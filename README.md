# Restful-Booker_Performance-Testing
# 🚀 JMeter Performance Testing Project  

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

![Requests Summary](https://raw.githubusercontent.com/your-username/Performance-Testing-JMeter/main/screenshots/request-summary.png)

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

