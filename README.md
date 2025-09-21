# Jmeter Restful-Booker_Performance-Testing   

![JMeter](https://img.shields.io/badge/Tool-Apache%20JMeter-red?style=for-the-badge&logo=apache)  
![Status](https://img.shields.io/badge/Status-Completed-brightgreen?style=for-the-badge)  
![Type](https://img.shields.io/badge/Test-Performance-blue?style=for-the-badge)  

---

## 📌 Project Overview  
This project demonstrates **Performance Testing** on the **Restful Booker API** using **Apache JMeter**.  
The goal was to analyze API performance under load, validate response times, error rates, and throughput.  

---

## ⚙️ Tools & Technology  
- 🛠 **Apache JMeter 5.x**  
- 🌐 **Restful Booker API** (public API for testing)  
- 📊 **JMeter Dashboard Report (HTML + CSV)**  
- 🐙 **GitHub** (Version Control & Hosting)  

---

## 🧪 Test Scenarios  
The following endpoints were tested:  
- 🔑 **Auth** → Generate Token  
- ➕ **Create Booking** → `POST /booking`  
- 📖 **Get Booking** → `GET /booking/{id}`  
- ✏️ **Update Booking (PUT/PATCH)** → Update existing booking  
- ❌ **Delete Booking** → Remove a booking  

---

## 📊 Results Summary  

### ✅ Requests Summary  
- **Total Samples:** `3300`  
- **Total Failures:** `8`  
- **Error %:** `0.24%`  
- **Pass Rate:** `99.76%`  

---

### 📈 Statistics Table  
| Request Type              | Samples | Avg Response (ms) | Min (ms) | Max (ms) | Error % | Throughput (req/sec) |
|---------------------------|---------|------------------|----------|----------|---------|-----------------------|
| Auth                      | 550     | 4091.34          | 1398     | 159623   | 0.36%   | 3.39                  |
| Create Booking            | 550     | 388.87           | 323      | 1509     | 0.00%   | 3.40                  |
| Delete Booking            | 550     | 386.46           | 324      | 1451     | 0.36%   | 3.40                  |
| Get Booking               | 550     | 380.64           | 323      | 543      | 0.00%   | 3.40                  |
| Update Booking (PATCH)    | 550     | 389.55           | 325      | 595      | 0.36%   | 3.40                  |
| Update Booking (PUT)      | 550     | 390.11           | 325      | 611      | 0.36%   | 3.40                  |

---

### 🔎 APDEX Score (Application Performance Index)  
- **Overall APDEX:** `0.811` (Acceptable Performance)  
- **Best Performing Endpoint:** `Get Booking` → APDEX `0.984`  
- **Lowest Performing Endpoint:** `Auth` → APDEX `0.012`  

---

## 📂 Project Structure  
## What is performance testing?
Is a non-functional testing approach to ensure that the application and the isolated elements of it will perform well under expected workload.
## What is JMeter?
JMeter is an open-source Java-based tool primarily used for performance testing web applications. 

# Content

- [Load testing Report](https://github.com/Mahmuduls1995/Performance-Testing-With-JMeter-BookingApp/tree/main?tab=readme-ov-file#load-testing-report) | [Running The Test](https://github.com/Mahmuduls1995/Performance-Testing-With-JMeter-BookingApp/blob/main/README.md#running-the-test)
- [Summary](https://github.com/Mahmuduls1995/Performance-Testing-With-JMeter-BookingApp/tree/main?tab=readme-ov-file#summary) | [Collection of API](https://github.com/Mahmuduls1995/Performance-Testing-With-JMeter-BookingApp?tab=readme-ov-file#collection-of-api)
- [Introduction](https://github.com/Mahmuduls1995/Performance-Testing-With-JMeter-BookingApp/tree/main?tab=readme-ov-file#introduction) | [Read Test Data from CSV file in Jmeter](https://github.com/Mahmuduls1995/Performance-Testing-With-JMeter-BookingApp?tab=readme-ov-file#read-test-data-from-csv-file-in-jmeter)
- [Install](https://github.com/Mahmuduls1995/Performance-Testing-With-JMeter-BookingApp/tree/main?tab=readme-ov-file#install)  | [Test execution from GUI](https://github.com/Mahmuduls1995/Performance-Testing-With-JMeter-BookingApp?tab=readme-ov-file#test-execution-from-gui)
- [Prerequisites](https://github.com/Mahmuduls1995/Performance-Testing-With-JMeter-BookingApp/tree/main?tab=readme-ov-file#prerequisites) | [Test execution from the Terminal](https://github.com/Mahmuduls1995/Performance-Testing-With-JMeter-BookingApp?tab=readme-ov-file#test-execution-from-the-terminal)
- [Elements of a Minimal Test Plan](https://github.com/Mahmuduls1995/Performance-Testing-With-JMeter-BookingApp/tree/main?tab=readme-ov-file#prerequisites) | [Make csv File](https://github.com/Mahmuduls1995/Performance-Testing-With-JMeter-BookingApp?tab=readme-ov-file#make-csv-file)
- [Creating a Test Plan](https://github.com/Mahmuduls1995/Performance-Testing-With-JMeter-BookingApp/blob/main/README.md#creating-a-test-plan) | [Make jtl File](https://github.com/Mahmuduls1995/Performance-Testing-With-JMeter-BookingApp?tab=readme-ov-file#make-jtl-file)
- [Make html File](https://github.com/Mahmuduls1995/Performance-Testing-With-JMeter-BookingApp?tab=readme-ov-file#make-html-file) | [HTML Report](https://github.com/Mahmuduls1995/Performance-Testing-With-JMeter-BookingApp?tab=readme-ov-file#html-report) | [Transaction Per Second](https://github.com/Mahmuduls1995/Performance-Testing-With-JMeter-BookingApp?tab=readme-ov-file#transaction-per-second)

## Introduction

This document explains how to run a performance test with JMeter against a Booking Site.

## Install

**Java**  
https://www.oracle.com/java/technologies/downloads/

**JMeter**  
https://jmeter.apache.org/download_jmeter.cgi  

Click =>Binaries    
=>**apache-jmeter-5.6.2.zip**

## Prerequisites

- As of JMeter 4.0, Java 8 and above are supported.
- we suggest  multicore cpu's with 4 or more cores.
- Memory 16GB RAM is a good value.

## Elements of a minimal test plan

- Thread Group

    The root element of every test plan. Simulates the (concurrent) users and then run all requests. Each thread simulates a single user.
- HTTP Request Default (Configuration Element)
- HTTP Request (Sampler)
- Summary Report (Listener)

## Creating a Test Plan

The first step in using JMeter is to create a Test Plan. A Test Plan is a collection of elements that define the test scenarios and their configurations. To create a Test Plan, you need to follow these steps:

![c]()

1. Right-click on the Test Plan in the tree view on the left-hand side of the JMeter interface.
2. Select Add > Threads (Users) > Thread Group.
3. In the Thread Group panel, you can set the number of threads (users) to simulate, the ramp-up period, and the loop count.
4. Next, you need to add a Sampler element to the Thread Group. A Sampler is used to simulate a request to the server under test. To add a Sampler, right-click on the Thread Group, select Add > Sampler, and then choose the appropriate Sampler type (e.g., HTTP Request, JDBC Request, etc.)

![c](https://github.com/Mahmuduls1995/Performance-Testing-With-JMeter-BookingApp/blob/main/Project%20Screenshot/1_.png)

5. In the Sampler panel, you can configure the parameters of the request (e.g., URL, method, parameters, etc.)

![c](https://github.com/Mahmuduls1995/Performance-Testing-With-JMeter-BookingApp/blob/main/Project%20Screenshot/2_.png)

6. Finally, you can add a Listener element to the Thread Group to view the test results. A Listener displays the test results in various formats such as tables, graphs, and charts. To add a Listener, right-click on the Thread Group, select Add > Listener, and then choose the appropriate Listener type (e.g., Summary Report, Graph Results, etc.).

![c](https://github.com/Mahmuduls1995/Performance-Testing-With-JMeter-BookingApp/blob/main/Project%20Screenshot/3_.png)

## Running The Test

Once you have created the Test Plan, you can run the test by clicking on the green arrow in the toolbar. JMeter will start sending requests to the server under test, and you can view the test results in the Listener.

Try Now
In this tutorial, we’ll go over how to set up a basic load test using JMeter to test the [https://restful-booker.herokuapp.com/booking](https://restful-booker.herokuapp.com/booking) API.
Set up the restful-booker.herokuapp.com/booking key by signing up to the above website. Then provide the API request details to the JMeter test plan.

![c](https://github.com/Mahmuduls1995/Performance-Testing-With-JMeter-BookingApp/blob/main/Project%20Screenshot/4_.png)

After running the load test, you can view the responses and check the number of requests as well.

![c](https://github.com/Mahmuduls1995/Performance-Testing-With-JMeter-BookingApp/blob/main/Project%20Screenshot/5_.png)

I have adjusted the thread group to have 1, 100, 500, 1000, 2000 concurrent users and do a load test.

![c](https://github.com/Mahmuduls1995/Performance-Testing-With-JMeter-BookingApp/blob/main/Project%20Screenshot/6_.png)

- Name: Users
- Number of Threads (users): 1, 100, 500, 1000, 2000
- Ramp-Up Period (in seconds): 10
- Loop Count: 1  

  1) The general setting for the tests execution, such as whether Thread Groups will run simultaneously or sequentially, is specified in the item called Test Plan.

  2) All HTTP Requests will use some default settings from the HTTP Request, such as the Server IP, Port Number, and Content-Encoding.

  3) Each Thread Group specifies how the HTTP Requests should be carried out. To determine how many concurrent "users" will be simulated, one must first know the number of threads. The number of actions each "user" will perform is determined by the loop count.

  4) The HTTP Header Manager, which allows you to provide the Request Headers that will be utilized by the upcoming HTTP Requests, is the first item in Thread Groups.

# Collection of API

### List of API 

  - For creating Booking: [https://restful-booker.herokuapp.com/booking](https://restful-booker.herokuapp.com/booking)
  - For getting, updating, deleting  Booking: [https://restful-booker.herokuapp.com/booking/id](https://restful-booker.herokuapp.com/booking/1)

### Load the JMeter Script 

   - File > Open (CTRL + O)
   - Locate the "BookingApp_csv_dataset_t1.jmx" file contained on this repo
   - Continue open BookingApp_csv_dataset_t1 to BookingApp_csv_dataset_t2000
   - Open those file
   - The Test Plan will be loaded  
   
   ![testPlan](https://github.com/Mahmuduls1995/Performance-Testing-With-JMeter-BookingApp/blob/main/Project%20Screenshot/opening-Jmx-File.png)

## Read Test Data from CSV file in Jmeter    

- Create a CSV file in the test suite folder and add test data to it.

![createCSV](https://github.com/Mahmuduls1995/Performance-Testing-With-JMeter-BookingApp/blob/main/CSV%20DataFile/newuser-CSV-Data.png)
- Add a Config Element CSV Data Set Config in Jmeter.

![configCSV](https://github.com/Mahmuduls1995/Performance-Testing-With-JMeter-BookingApp/blob/main/CSV%20Data%20Config%20and%20Passed%20Screenshot/CSV%20Data%20Set%20Config.png)

- Configure ' CSV Data Set Config ' based on the need such as providing path of CSV file and variable names and other configs. 

![readCSV](https://github.com/Mahmuduls1995/Performance-Testing-With-JMeter-BookingApp/blob/main/CSV%20Data%20Config%20and%20Passed%20Screenshot/CSV%20File%20to%20Set%20Variable.png)

![readCSV](https://github.com/Mahmuduls1995/Performance-Testing-With-JMeter-BookingApp/blob/main/CSV%20Data%20Config%20and%20Passed%20Screenshot/Newuser-Data%20-Set-From-CSV-File.png)

- Run the test to see if data from the CSV file is read and populated in the results.  <br/>

## Test execution from GUI
 
- JMeter should be initialized in GUI mode.
- Click on Run Button.

![run](https://github.com/Mahmuduls1995/Performance-Testing-With-JMeter-BookingApp/blob/main/Project%20Screenshot/Run%20Button%20SS.png)

- Check Different Types of Report.

    Summary and Aggregate  Report for  **Number of Threads 1 ; Ramp-Up Period 10s**
   
    Summary  Report           |  Aggregate  Report
    :-------------------------:|:-------------------------:
    ![BookingApp_t1_summary](https://github.com/Mahmuduls1995/Performance-Testing-With-JMeter-BookingApp/blob/main/Project%20Screenshot/t1-Summary%20report.png)  |  ![BookingApp_t1_agg](https://github.com/Mahmuduls1995/Performance-Testing-With-JMeter-BookingApp/blob/main/Project%20Screenshot/t1-Aggregate-report.png)

    Aggregate  Report for  **Number of Threads 2000 ; Ramp-Up Period 10s**
    Aggregate  Report
    :-------------------------:|
    ![BookingApp_t2000_summary](https://github.com/Mahmuduls1995/Performance-Testing-With-JMeter-BookingApp/blob/main/Project%20Screenshot/t2000_Summary.png)

## Test execution from the Terminal
 
- JMeter should be initialized in non-GUI mode.
- Make a report folder in the **bin** folder.  
- Run Command in __jmeter\bin__ folder. 

 ### Make csv file    
 
   - **n**: non GUI mode
  - **t**: test plan to execute
  - **l**: output file with results   

```bash
  jmeter -n -t  BookingApp_csv_dataset_t1.jmx -l   report\BookingApp_csv_dataset_t1.csv
```   

![BookingApp_t1_csv](https://github.com/Mahmuduls1995/Performance-Testing-With-JMeter-BookingApp/blob/main/CSV%20DataFile/BookingApp_csv_dataset_t1_CSV%20-Result.png)


## Make jtl file

```bash
  jmeter -n -t  BookingApp_csv_dataset_t1.jmx -l BookingAppLoadTesting\report\BookingApp_csv_dataset_t1.jtl
```      
  Then continue to upgrade Threads( 1, 100, 500, 1000, 2000 ) by keeping Ramp-up-Period Same.   
   
![BookingApp_t1_jtl](https://github.com/Mahmuduls1995/Performance-Testing-With-JMeter-BookingApp/blob/main/jtl-html-command-Ss/Jtl%20file%20Commant%20-SS.png)
  
 
![BookingApp_allJTLs](https://github.com/Mahmuduls1995/Performance-Testing-With-JMeter-BookingApp/blob/main/jtl-html-command-Ss/All%20Jtl%20file.png)

After completing this command  

## Make html file   
  
  ```bash
  jmeter -g BookingAppLoadTesting\report\BookingApp_csv_dataset_t1.jtl -o report\BookingApp_csv_dataset_t1.html
```

- **g**: jtl results file

- **o**: path to output folder

![BookingApp_t1_csv_cmd](https://github.com/Mahmuduls1995/Performance-Testing-With-JMeter-BookingApp/blob/main/jtl-html-command-Ss/jtl%20file%20to%20html%20file%20command.png)
  
  
![BookingApp_reports](https://github.com/Mahmuduls1995/Performance-Testing-With-JMeter-BookingApp/blob/main/jtl-html-command-Ss/Html-Folder-htmlk-link.png)

## HTML Report

### **Number of Threads 1 ; Ramp-Up Period: 10s**

![BookingApp_t1_100pass & Report](https://github.com/Mahmuduls1995/Performance-Testing-With-JMeter-BookingApp/blob/main/jtl-html-command-Ss/t1-html-report.png)


### **Number of Threads 100 ; Ramp-Up Period 10s**

![BookingApp_t1_100pass & Report](https://github.com/Mahmuduls1995/Performance-Testing-With-JMeter-BookingApp/blob/main/jtl-html-command-Ss/t100-html-report.png)


### **Number of Threads 500 ; Ramp-Up Period 10s**
   
![BookingApp_t1_100pass & Report](https://github.com/Mahmuduls1995/Performance-Testing-With-JMeter-BookingApp/blob/main/jtl-html-command-Ss/t_500-html-report.png)


### **Number of Threads 1000 ; Ramp-Up Period 10s**
   
![BookingApp_t1_100pass & Report](https://github.com/Mahmuduls1995/Performance-Testing-With-JMeter-BookingApp/blob/main/jtl-html-command-Ss/t1000-html-report%20(2).png)


### **Number of Threads 2000 ; Ramp-Up Period 10s**
   
![BookingApp_t1_100pass & Report](https://github.com/Mahmuduls1995/Performance-Testing-With-JMeter-BookingApp/blob/main/jtl-html-command-Ss/t2000-html-report.png)

## Transaction Per Second

### Transaction Per Second **Number of Threads 2000 ; Ramp-Up Period 10s**
   
![BookingApp_t2000_tps](https://github.com/Mahmuduls1995/Performance-Testing-With-JMeter-BookingApp/blob/main/Project%20Screenshot/t200_total_transaction-per-second.png)

### Response Time Percentiles **Number of Threads 2000 ; Ramp-Up Period 10s**
   
![BookingApp_t2000_tps](https://github.com/Mahmuduls1995/Performance-Testing-With-JMeter-BookingApp/blob/main/Project%20Screenshot/t2000-response-time-persentiles.png)

### Response Time Overview **Number of Threads 2000 ; Ramp-Up Period 10s**
   
![BookingApp_t2000_tps](https://github.com/Mahmuduls1995/Performance-Testing-With-JMeter-BookingApp/blob/main/Project%20Screenshot/t2000-response-time%20overview.png)

