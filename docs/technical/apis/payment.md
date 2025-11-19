### **1. Finish Payment Process (Test Mode)**  
`POST /api/v1/pay`  
![POST](https://img.shields.io/badge/POST-4CAF50?style=flat&labelColor=000)

**Auth:** citizen  
**Purpose:** Complete a payment request.

#### Request Body
```json
{
  "applicationId": "",
  "serviceType": "vital_birth | tin | platform_fee",
  "phoneNumber": "+2519xxxxxxx",
  "amount": 50
}
````

#### Behavior (Test Mode)

* System checks `system_configs.telebirr_test_number`

  * If `phoneNumber` matches the configured test number → **simulate success**
  * Otherwise → **simulate failure**
  * All simulations are using the sandbox environment
* Creates a **payments** document with:
  * Initial status: **pending**
  * Immediately updated to: **success** or **failed** (test synchronous mode)

#### Response — 200 OK

```json
{
  "paymentId": "...",
  "status": "completed"
}
```

---

### **2. Get Payment Status**

`GET /api/v1/payments/:id/status`
![GET](https://img.shields.io/badge/GET-2196F3?style=flat\&labelColor=000)

**Auth:**

* Owner (citizen)
* Admin (optional)
* Officer (but sees only a **boolean paymentComplete** for applications assigned to them)

---

### **3. Payment History (Citizen)**

`GET /api/v1/payments/history`
![GET](https://img.shields.io/badge/GET-2196F3?style=flat\&labelColor=000)

**Auth:** citizen
**Response:** List of user's payment records, each item includes a `receiptUrl`.

---

### **4. Download Payment Receipt**

`GET /api/v1/payments/:id/receipt`
![GET](https://img.shields.io/badge/GET-2196F3?style=flat\&labelColor=000)

**Auth:** owner only
**Behavior:** Returns a **PDF receipt** (file download or stream).
