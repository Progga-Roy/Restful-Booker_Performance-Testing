/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
var showControllersOnly = false;
var seriesFilter = "";
var filtersOnlySampleSeries = true;

/*
 * Add header in statistics table to group metrics by category
 * format
 *
 */
function summaryTableHeader(header) {
    var newRow = header.insertRow(-1);
    newRow.className = "tablesorter-no-sort";
    var cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 1;
    cell.innerHTML = "Requests";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 3;
    cell.innerHTML = "Executions";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 7;
    cell.innerHTML = "Response Times (ms)";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 1;
    cell.innerHTML = "Throughput";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 2;
    cell.innerHTML = "Network (KB/sec)";
    newRow.appendChild(cell);
}

/*
 * Populates the table identified by id parameter with the specified data and
 * format
 *
 */
function createTable(table, info, formatter, defaultSorts, seriesIndex, headerCreator) {
    var tableRef = table[0];

    // Create header and populate it with data.titles array
    var header = tableRef.createTHead();

    // Call callback is available
    if(headerCreator) {
        headerCreator(header);
    }

    var newRow = header.insertRow(-1);
    for (var index = 0; index < info.titles.length; index++) {
        var cell = document.createElement('th');
        cell.innerHTML = info.titles[index];
        newRow.appendChild(cell);
    }

    var tBody;

    // Create overall body if defined
    if(info.overall){
        tBody = document.createElement('tbody');
        tBody.className = "tablesorter-no-sort";
        tableRef.appendChild(tBody);
        var newRow = tBody.insertRow(-1);
        var data = info.overall.data;
        for(var index=0;index < data.length; index++){
            var cell = newRow.insertCell(-1);
            cell.innerHTML = formatter ? formatter(index, data[index]): data[index];
        }
    }

    // Create regular body
    tBody = document.createElement('tbody');
    tableRef.appendChild(tBody);

    var regexp;
    if(seriesFilter) {
        regexp = new RegExp(seriesFilter, 'i');
    }
    // Populate body with data.items array
    for(var index=0; index < info.items.length; index++){
        var item = info.items[index];
        if((!regexp || filtersOnlySampleSeries && !info.supportsControllersDiscrimination || regexp.test(item.data[seriesIndex]))
                &&
                (!showControllersOnly || !info.supportsControllersDiscrimination || item.isController)){
            if(item.data.length > 0) {
                var newRow = tBody.insertRow(-1);
                for(var col=0; col < item.data.length; col++){
                    var cell = newRow.insertCell(-1);
                    cell.innerHTML = formatter ? formatter(col, item.data[col]) : item.data[col];
                }
            }
        }
    }

    // Add support of columns sort
    table.tablesorter({sortList : defaultSorts});
}

$(document).ready(function() {

    // Customize table sorter default options
    $.extend( $.tablesorter.defaults, {
        theme: 'blue',
        cssInfoBlock: "tablesorter-no-sort",
        widthFixed: true,
        widgets: ['zebra']
    });

    var data = {"OkPercent": 99.75757575757575, "KoPercent": 0.24242424242424243};
    var dataset = [
        {
            "label" : "FAIL",
            "data" : data.KoPercent,
            "color" : "#FF6347"
        },
        {
            "label" : "PASS",
            "data" : data.OkPercent,
            "color" : "#9ACD32"
        }];
    $.plot($("#flot-requests-summary"), dataset, {
        series : {
            pie : {
                show : true,
                radius : 1,
                label : {
                    show : true,
                    radius : 3 / 4,
                    formatter : function(label, series) {
                        return '<div style="font-size:8pt;text-align:center;padding:2px;color:white;">'
                            + label
                            + '<br/>'
                            + Math.round10(series.percent, -2)
                            + '%</div>';
                    },
                    background : {
                        opacity : 0.5,
                        color : '#000'
                    }
                }
            }
        },
        legend : {
            show : true
        }
    });

    // Creates APDEX table
    createTable($("#apdexTable"), {"supportsControllersDiscrimination": true, "overall": {"data": [0.8109090909090909, 500, 1500, "Total"], "isController": false}, "titles": ["Apdex", "T (Toleration threshold)", "F (Frustration threshold)", "Label"], "items": [{"data": [0.9590909090909091, 500, 1500, "Update_Booking_By_Patch"], "isController": false}, {"data": [0.9654545454545455, 500, 1500, "Delete_Booking"], "isController": false}, {"data": [0.011818181818181818, 500, 1500, "Auth"], "isController": false}, {"data": [0.9772727272727273, 500, 1500, "Create_Booking"], "isController": false}, {"data": [0.9836363636363636, 500, 1500, "Get_Booking"], "isController": false}, {"data": [0.9681818181818181, 500, 1500, "Update_Booking_By_Put"], "isController": false}]}, function(index, item){
        switch(index){
            case 0:
                item = item.toFixed(3);
                break;
            case 1:
            case 2:
                item = formatDuration(item);
                break;
        }
        return item;
    }, [[0, 0]], 3);

    // Create statistics table
    createTable($("#statisticsTable"), {"supportsControllersDiscrimination": true, "overall": {"data": ["Total", 3300, 8, 0.24242424242424243, 1004.3951515151523, 323, 159623, 386.0, 2907.9, 4265.749999999995, 7126.389999999943, 19.979415148029304, 16.919889829418178, 6.256338166737302], "isController": false}, "titles": ["Label", "#Samples", "FAIL", "Error %", "Average", "Min", "Max", "Median", "90th pct", "95th pct", "99th pct", "Transactions/s", "Received", "Sent"], "items": [{"data": ["Update_Booking_By_Patch", 550, 2, 0.36363636363636365, 389.5490909090913, 325, 595, 369.0, 485.0, 516.3499999999998, 583.49, 3.404792710029281, 3.0341950489671095, 1.0372164155889982], "isController": false}, {"data": ["Delete_Booking", 550, 2, 0.36363636363636365, 386.46, 324, 1451, 365.0, 475.0, 514.8999999999999, 578.94, 3.404624098548392, 2.479898693088613, 0.7545546519545638], "isController": false}, {"data": ["Auth", 550, 2, 0.36363636363636365, 4091.338181818179, 1398, 159623, 3133.0, 6011.4000000000015, 7237.199999999999, 9296.45, 3.388097306154633, 2.579754559300943, 0.8241642949985524], "isController": false}, {"data": ["Create_Booking", 550, 0, 0.0, 388.8745454545454, 323, 1509, 372.5, 471.90000000000003, 498.0, 556.98, 3.401655059807281, 3.1246062004440707, 1.5446968777445171], "isController": false}, {"data": ["Get_Booking", 550, 0, 0.0, 380.04363636363655, 323, 543, 367.0, 457.0, 493.3499999999998, 532.0, 3.401718176926455, 3.0282539753715607, 0.5580943884019965], "isController": false}, {"data": ["Update_Booking_By_Put", 550, 2, 0.36363636363636365, 390.1054545454547, 325, 611, 373.0, 484.90000000000003, 508.24999999999966, 558.3900000000001, 3.4043922850281017, 3.034902081166902, 1.6720933840278291], "isController": false}]}, function(index, item){
        switch(index){
            // Errors pct
            case 3:
                item = item.toFixed(2) + '%';
                break;
            // Mean
            case 4:
            // Mean
            case 7:
            // Median
            case 8:
            // Percentile 1
            case 9:
            // Percentile 2
            case 10:
            // Percentile 3
            case 11:
            // Throughput
            case 12:
            // Kbytes/s
            case 13:
            // Sent Kbytes/s
                item = item.toFixed(2);
                break;
        }
        return item;
    }, [[0, 0]], 0, summaryTableHeader);

    // Create error table
    createTable($("#errorsTable"), {"supportsControllersDiscrimination": false, "titles": ["Type of error", "Number of errors", "% in errors", "% in all samples"], "items": [{"data": ["403/Forbidden", 6, 75.0, 0.18181818181818182], "isController": false}, {"data": ["Non HTTP response code: java.net.SocketException/Non HTTP response message: A connection attempt failed because the connected party did not properly respond after a period of time, or established connection failed because connected host has failed to respond", 2, 25.0, 0.06060606060606061], "isController": false}]}, function(index, item){
        switch(index){
            case 2:
            case 3:
                item = item.toFixed(2) + '%';
                break;
        }
        return item;
    }, [[1, 1]]);

        // Create top5 errors by sampler
    createTable($("#top5ErrorsBySamplerTable"), {"supportsControllersDiscrimination": false, "overall": {"data": ["Total", 3300, 8, "403/Forbidden", 6, "Non HTTP response code: java.net.SocketException/Non HTTP response message: A connection attempt failed because the connected party did not properly respond after a period of time, or established connection failed because connected host has failed to respond", 2, "", "", "", "", "", ""], "isController": false}, "titles": ["Sample", "#Samples", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors"], "items": [{"data": ["Update_Booking_By_Patch", 550, 2, "403/Forbidden", 2, "", "", "", "", "", "", "", ""], "isController": false}, {"data": ["Delete_Booking", 550, 2, "403/Forbidden", 2, "", "", "", "", "", "", "", ""], "isController": false}, {"data": ["Auth", 550, 2, "Non HTTP response code: java.net.SocketException/Non HTTP response message: A connection attempt failed because the connected party did not properly respond after a period of time, or established connection failed because connected host has failed to respond", 2, "", "", "", "", "", "", "", ""], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": ["Update_Booking_By_Put", 550, 2, "403/Forbidden", 2, "", "", "", "", "", "", "", ""], "isController": false}]}, function(index, item){
        return item;
    }, [[0, 0]], 0);

});
