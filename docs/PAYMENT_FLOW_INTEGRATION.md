# EdTrimKey Frontend — Payment Flow & Sara AI Architecture

## 1. Overview

**EdTrimKey Frontend** is a Single-Page Application (SPA) designed with an iOS-inspired, high-performance liquid-glass UI. It manages school administration, admissions, fees, admit cards, student reports, and service top-ups.

This document details:
1. **Trim Key Flow Checkout Modal Integration**
2. **PostMessage Communication Protocol**
3. **Dual-Channel Payment Reconciliation**
4. **Sara AI Assistant Architecture**

---

## 2. Trim Key Flow Checkout Integration

### 2.1. The Modal Container (`index.html`)
The payment modal is rendered as a top-level, hardware-accelerated glass overlay (`z-index: 99999`):
```html
<div id="paymentModal" class="glass-overlay" style="z-index: 99999;">
  <div class="glass-card sara-chat-card" style="max-width: 500px; height: 90vh;">
    <!-- Header with 256-bit SSL indicator, reload, and close buttons -->
    <iframe id="flowCheckoutIframe" src="about:blank" allow="payment; clipboard-write; ..."></iframe>
  </div>
</div>
```

### 2.2. Initiating Checkout (`openFlowCheckout`)
When a user requests a recharge or service payment (e.g. Admit Card, Report Card, MCQ formatter):
```javascript
function openFlowCheckout(url, refId, amount, serviceType, quantity) {
    currentFlowPayment = {
        url: url,
        refId: refId,
        amount: amount,
        serviceType: serviceType || 'Report Card',
        quantity: quantity || 1
    };
    const iframe = document.getElementById('flowCheckoutIframe');
    iframe.src = url; // Loads https://flow.trimkey.in/checkout/{paymentNumber}
    openModal('paymentModal');
}
```

### 2.3. PostMessage Handshake Protocol
The iframe communicates with the parent window using HTML5 `postMessage`:
* **`TK_FLOW_READY`**: Sent by Trim Key Flow as soon as the checkout interface is mounted. The parent window hides the loading skeleton and reveals the checkout seamlessly.
* **Payment Success Event**: Fired when payment is confirmed:
  ```javascript
  window.addEventListener('message', function(event) {
      if (event.data.type === 'TK_FLOW_READY') {
          // Hide loader skeleton
      }
      if (event.data.status === 'SUCCESS' || event.data.event === 'payment.success') {
          handleFlowPaymentSuccess(event.data);
      }
  });
  ```

### 2.4. Client-Side Reconciliation Handshake
When `handleFlowPaymentSuccess()` executes:
1. Plays audio confirmation (`tkPlaySound('notification')`).
2. Shows green success toast: *"Payment Confirmed! Your subscription and quotas are updated via Trim Key Flow."*
3. Closes modal and resets iframe `src` to `about:blank`.
4. Dispatches client reconciliation call:
   ```javascript
   serverCall('confirmFlowPayment', {
       paymentNumber: paymentNumber,
       instCode: globalUser?.code,
       serviceType: currentFlowPayment?.serviceType || 'Report Card',
       amount: currentFlowPayment?.amount || data.amount,
       quantity: currentFlowPayment?.quantity || 1,
       providerPaymentId: data.provider_payment_id || data.razorpay_payment_id,
       providerOrderId: data.provider_order_id || data.razorpay_order_id
   });
   ```
5. Reloads dashboard state with fresh quotas.

---

## 3. Sara AI Chatbot Integration

Sara AI is embedded as a floating conversational widget:
* **Floating Launcher:** `#sara-chat-btn` (bottom right corner with pulse dot).
* **Modal Window:** `#sara-chat-modal` containing an iframe pointing to `https://sara.trimkey.in`.
* **Controls:** High-contrast reload (`reloadSaraChat()`) and close (`toggleSaraChat(false)`) buttons.
* **Logo & Visual Identity:** Configured in `#sara-chat-btn .sara-chat-icon` and `.sara-header-icon`.
