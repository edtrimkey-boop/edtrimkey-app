# Ed-Trim Key — Enterprise Institutional ERP & Academic Operations Platform

[![Version](https://img.shields.io/badge/version-2.4.0-blue.svg?style=flat-square)](https://ed.trimkey.in)
[![Design System](https://img.shields.io/badge/UI%2FUX-Apple%20Liquid%20Glass-00f0ff.svg?style=flat-square)](docs/BRAND_DESIGN_SYSTEM.md)
[![Payment Gateway](https://img.shields.io/badge/FinTech-Trim%20Key%20Flow%20%7C%20Razorpay-10B981.svg?style=flat-square)](docs/PAYMENT_FLOW_INTEGRATION.md)
[![AI Assistant](https://img.shields.io/badge/AI-Sara%20Autonomous%20Assistant-8B5CF6.svg?style=flat-square)](https://sara.trimkey.in)
[![Cloud Storage](https://img.shields.io/badge/Cloud%20Storage-Supabase-3ECF8E.svg?style=flat-square)](https://supabase.com)
[![Push Notifications](https://img.shields.io/badge/Web%20Push-Firebase%20FCM-FFA611.svg?style=flat-square)](https://firebase.google.com)

**Ed-Trim Key** is a high-performance, single-page application (SPA) designed as a comprehensive Institutional ERP, Examination Publishing Engine, and Academic Operations Command Center. Engineered strictly on **Apple Cupertino Human Interface Guidelines (HIG)**, it pairs real-world optical glass physics with enterprise-scale school management, cloud typesetting, automated payment reconciliation, and autonomous AI customer support.

---

## 📑 Table of Contents

1. [Executive Summary & Architecture](#1-executive-summary--architecture)
2. [User Roles & Permissions Matrix](#2-user-roles--permissions-matrix)
3. [Core Functional Modules](#3-core-functional-modules)
   - [3.1 Dashboard Command Center](#31-dashboard-command-center)
   - [3.2 Question Paper Publishing Engine](#32-question-paper-publishing-engine)
   - [3.3 Academic Documents & Records Management](#33-academic-documents--records-management)
   - [3.4 Operator Production Workspace](#34-operator-production-workspace)
   - [3.5 Multi-Tenant Institute Administration](#35-multi-tenant-institute-administration)
   - [3.6 Broadcast Center & Web Push Messaging](#36-broadcast-center--web-push-messaging)
4. [FinTech, Billing & PDF Receipt Engine](#4-fintech-billing--pdf-receipt-engine)
   - [4.1 Trim Key Flow & Razorpay Integration](#41-trim-key-flow--razorpay-integration)
   - [4.2 PostMessage Handshake Protocol](#42-postmessage-handshake-protocol)
   - [4.3 Zero-Friction Customer Data Pre-Filling](#43-zero-friction-customer-data-pre-filling)
   - [4.4 Redesigned Activity Ledger](#44-redesigned-activity-ledger)
   - [4.5 Vector PDF Receipt & Print Subsystem](#45-vector-pdf-receipt--print-subsystem)
5. [Sara AI Autonomous Assistant](#5-sara-ai-autonomous-assistant)
6. [Apple Liquid Glass UI/UX Design System](#6-apple-liquid-glass-uiux-design-system)
7. [Repository File Map](#7-repository-file-map)
8. [Configuration & Service Endpoints](#8-configuration--service-endpoints)
9. [Deployment & Local Setup](#9-deployment--local-setup)
10. [Security & Compliance](#10-security--compliance)

---

## 1. Executive Summary & Architecture

Ed-Trim Key is engineered as an ultra-responsive, zero-dependency client application delivered entirely in an optimized Single-Page Application (SPA) structure:

```
┌────────────────────────────────────────────────────────────────────────┐
│                        CLIENT APPLICATION LAYER                        │
│   • Apple Liquid Glass Design Engine (CSS3 backdrop filters & physics)  │
│   • Role-Based State Router (Overview, Papers, Docs, Billing, etc.)    │
│   • Vector PDF Engine (jsPDF) & Embedded Canvas Preloader              │
│   • Responsive Desktop / Mobile Layout System                          │
└──────────────────┬───────────────────────────────┬─────────────────────┘
                   │                               │
        JSON REST  │                               │ postMessage / Iframe
                   ▼                               ▼
┌──────────────────────────────────────┐  ┌──────────────────────────────┐
│        BACKEND GATEWAY API           │  │     TRIM KEY FLOW / GATEWAY   │
│   https://backend-ed.trimkey.in      │  │    https://flow.trimkey.in   │
│   • Multi-Tenant Session Sync        │  │  • Razorpay Checkout Forms   │
│   • Job Queue & Operator Allocation  │  │  • Instant Order Creation    │
│   • Ledger & Quota Accounting        │  │  • Webhook Verification      │
└───────────────┬──────────────────────┘  └───────────────┬──────────────┘
                │                                         │
        Storage │ Events                         Database │ Webhooks
                ▼                                         ▼
┌──────────────────────────────────────┐  ┌──────────────────────────────┐
│           CLOUD SERVICES             │  │       SARA AI ASSISTANT      │
│   • Supabase Storage (Logos, Assets) │  │    https://sara.trimkey.in   │
│   • Firebase FCM (Web Push Workers)  │  │  • Contextual Helpdesk       │
│   • IPify & QR Server Utilities      │  │  • Real-Time Support Chat    │
└──────────────────────────────────────┘  └──────────────────────────────┘
```

### Key Architectural Strengths:
- **Zero Build-Step Latency:** Pure vanilla modern ES6+ JavaScript, CSS3 custom properties, and semantic HTML5. No bloated bundlers or node_modules overhead in production.
- **Micro-Luminance Optical Physics:** Interfaces render physical glass effects using hardware-accelerated GPU layers (`backdrop-filter: blur(20px) saturate(190%)`), top specular light gathering, and zero artificial neon halos.
- **Fail-Safe Session Sync:** Every request carries client IP, OS, and browser fingerprinting for robust multi-device management and security auditing.

---

## 2. User Roles & Permissions Matrix

The platform provides a strict Role-Based Access Control (RBAC) hierarchy governing navigation, views, modal forms, and API calls:

| Feature / Workspace | Super / System Admin | Institute Admin | Teacher | Production Operator |
| :--- | :---: | :---: | :---: | :---: |
| **Dashboard Overview** | Full Overview | Institute KPIs | Teacher Overview | Operator KPIs |
| **Question Paper Submission** | View / Manage All | Submit / Review | Submit / Draft | Assigned Jobs Only |
| **Academic Documents** | View / Manage All | Request / Download | Request / View | View Task Attachments |
| **Dynamic Apps Launcher** | All Apps | Subscribed Apps | Assigned Apps | Hidden |
| **Institute Billing & Ledger** | Global Financials | Institute Invoices | Hidden | Hidden |
| **Teachers Directory** | Manage All | Provision / Edit | Directory (Read) | Hidden |
| **Students Database** | All Institutes | Branch Students | Assigned Classes | Hidden |
| **Production Workspace** | Monitor / Reassign | Hidden | Hidden | Claim / Process / Proof |
| **Operator Financial Ledger** | Approve Payouts | Hidden | Hidden | Track Earnings / UPI |
| **Global Institutes Console** | Full CRUD | Hidden | Hidden | Hidden |
| **Broadcast Center** | Global Broadcast | Institute Alerts | Hidden | Hidden |
| **Master Settings & Profile** | Full Control | Full Control | Full Control | Full Control |

---

## 3. Core Functional Modules

### 3.1 Dashboard Command Center
- **Dynamic KPI Tiles:** Live metrics tracking total question papers generated, document requests, active subscriptions, and pending tasks.
- **Outstanding Balance & Trial Banners:** Intelligent alert system for pending dues, grace period notifications, and subscription renewals.
- **Dynamic App Integration (`#dyn-apps-container`):** Dynamically provisions connected modules (Attendance, Result Cards, Admit Cards, Fees, Online Exams) equipped with domain-specific SVG icons and safe HTML escaping.
- **Quick Action Bar:** Direct triggers for submitting papers, requesting documents, opening generated paper archives, and jumping to production queues.

### 3.2 Question Paper Publishing Engine
- **Exam Types & Formats:** Supports Terminal Exams, Periodic Assessments, Board Mock Tests, and Quiz Sets.
- **Typesetting & Formatting Pipeline:** Upload handwritten or digital question drafts. Specify target class, subject, date, total marks, and formatting instructions.
- **Status Lifecycle:** `Pending` $\rightarrow$ `Assigned` $\rightarrow$ `In Progress` $\rightarrow$ `Completed` $\rightarrow$ `Delivered`.
- **Revision Tracking:** Teachers or Institute Admins can request revisions with inline messaging, notifying operators instantly.

### 3.3 Academic Documents & Records Management
- **Document Catalog:** Automated generation for Admit Cards with student photos, Academic Report Cards, Character Certificates, Transfer Certificates, and Bonafide Letters.
- **High-Density Table View:** Features instant search, subject filters, status badges, and download triggers.
- **Cloud Delivery:** Direct download links for print-ready PDFs and editable Microsoft Word / Excel templates.

### 3.4 Operator Production Workspace
- **Live Task Board (`#view-op-workspace`):** Operators view assigned typesetting, proofreading, and design jobs.
- **Interactive Timeline Chat:** Real-time group communication between Admins, Teachers, and Operators for precise editorial clarifications.
- **Proof & Final File Upload:** Drag-and-drop file upload with live progress tracking, byte statistics, and transfer speed indicators.
- **Earnings Ledger:** Automatic credit calculation per delivered page or question paper format.

### 3.5 Multi-Tenant Institute Administration
- **Branch Code Architecture:** Each school or college branch operates under an isolated institutional identifier (e.g. `KPS`, `DPS`).
- **Staff Provisioning:** Institute Admins can create teacher logins, set access permissions, or temporarily suspend access.
- **Student Database:** Centralized repository for student names, roll numbers, sections, parent details, and enrollment dates.

### 3.6 Broadcast Center & Web Push Messaging
- **Dual Notification Engine:** Combines in-app notifications with native browser push notifications via Firebase Cloud Messaging (`firebase-messaging-sw.js`).
- **Audience Targeting:** Broadcast announcements to all users, specific institutes, or filtered roles (e.g., Teachers only).

---

## 4. FinTech, Billing & PDF Receipt Engine

The billing system in Ed-Trim Key provides seamless corporate recharge, subscription billing, and verifiable PDF invoice generation.

### 4.1 Trim Key Flow & Razorpay Integration
Payments are processed via **Trim Key Flow** (`https://flow.trimkey.in`), which wraps payment gateway rails including **Razorpay** with an iOS-style glass checkout modal:

```
[User Clicks Recharge] 
          │
          ▼
[openFlowCheckout()] ──► Retrieves user name, email & 10-digit mobile phone
          │
          ▼
[Modal Overlay Mounts] ──► Loads Flow checkout in isolated, secure iframe
          │
          ▼
[postMessage Handshake] ──► 'TK_FLOW_READY' hides skeleton, reveals checkout
          │
          ▼
[User Completes Payment via UPI / Card / NetBanking]
          │
          ├──► Dual-Channel Reconciliation
          │    ├─ Instant Client Call: 'confirmFlowPayment'
          │    └─ Backend Webhook Validation: Razorpay Signature Check
          │
          ▼
[Play Haptic Audio & Trigger PDF Receipt Modal]
```

### 4.2 PostMessage Handshake Protocol
The parent app and checkout iframe communicate through secure HTML5 message events:
- **`TK_FLOW_READY`**: Fired by Flow upon loading, triggering the parent to hide the loading spinner.
- **`SUCCESS` / `payment.success`**: Fired with payment reference, Razorpay payment ID, and transaction amount upon authorization.

### 4.3 Zero-Friction Customer Data Pre-Filling
To ensure high conversion and optimal UX:
- **Name:** Pre-filled from `globalUser.name` or `globalUser.full_name`.
- **Email:** Pre-filled from `globalUser.email`.
- **Mobile Phone:** Pre-filled from `globalUser.phone` or `globalUser.phone_number`, automatically cleaned and normalized to 10 digits (stripping leading `+91` or `0`).

### 4.4 Redesigned Activity Ledger
The transaction ledger in **Institute Billing** provides complete transparency:

| LED ID | Date & Time | Type | Service | Amount | Qty | Status | Action |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| `LED-TKF-PAY-001` | **16 Nov 2026**<br><small>03:31 am</small> | Purchase | Report Card Quota | ₹1,500 | 500 | `PAID` | [Receipt / PDF] |

- **Two-Line Date Layout:** Primary date in bold with 12-hour formatted lowercase time beneath.
- **Interactive LED ID:** Clickable button opening the official corporate receipt modal.

### 4.5 Vector PDF Receipt & Print Subsystem
Powered by `window.jspdf.jsPDF`, the receipt system generates corporate, tax-compliant single-page invoices:
- **Preloaded Vector Logo:** Canvas-based image preloading from Supabase Storage with CORS support, rendering a 52x52px branded crest.
- **Issuer Details & Inline SVGs:**
  - **Company:** `EdTrimKey Technologies Private Limited`
  - **Address:** `Tech Innovation Hub, Bailey Road, Patna, Bihar - 800001, India`
  - **Contact:** `+91 8294544727` | `support@trimkey.in`
  - **Websites:** `https://ed.trimkey.in` | `https://flow.trimkey.in`
- **A4 Single-Page Guarantee:** Strict geometric boundaries (~600 pt height footprint on an 841.89 pt A4 canvas) guarantee zero overflow.
- **Direct Printing:** Prints instantly via a hidden sandboxed iframe (`receiptPrintIframe`), invoking native printer and system "Save as PDF" dialogs.

---

## 5. Sara AI Autonomous Assistant

Embedded as a floating conversational companion, **Sara AI** provides automated customer assistance and contextual guidance:
- **Floating Launcher (`#sara-chat-btn`):** Positioned at the bottom-right corner featuring an animated brand logo GIF and active pulse beacon.
- **Modal Viewport (`#sara-chat-modal`):** Sandboxed iframe pointing to `https://sara.trimkey.in`.
- **Operator Utilities:** Quick reload (`reloadSaraChat()`) and minimization controls with Apple spring haptics.

---

## 6. Apple Liquid Glass UI/UX Design System

The Ed-Trim Key interface is designed around the **Apple Cupertino Human Interface Guidelines (HIG)**:

```
┌────────────────────────────────────────────────────────┐
│ 1. Specular Refraction Lip (inset highlight on top rim) │
│ 2. Micro-Translucent Border (frosted optical boundary) │
│ 3. Ambient Saturation Filter (saturates background 190%)│
│ 4. Deep Gaussian Blur (20px ambient defocus)            │
│ 5. Clean Ambient Shadow (soft, zero-spread depth)      │
└────────────────────────────────────────────────────────┘
```

### Core Design Standards:
1. **Zero Glowing Halos:** No neon `box-shadow: 0 0 25px rgba(...)` or glowing text shadows. All shadows are diffuse, soft ambient depth occlusions (`box-shadow: 0 4px 14px rgba(0, 0, 0, 0.25)`).
2. **Two Distinct Button Personalities:**
   - **Solid Color-Filled Glass Buttons:** Rich, high-contrast buttons (`.btn-primary` Electric Cyan Blue `#26C3EA`, `.btn-success` Emerald Green `#10B981`, `.btn-danger` Ruby Crimson `#EF4444`) with dark text and a physical top specular reflection rim (`inset 0 1px 1px rgba(255, 255, 255, 0.6)`).
   - **Translucent Tinted Frosted Glass Buttons:** Clean, frosted optical surfaces (`.btn-outline`, `.btn-secondary`) for secondary actions.
3. **Surface Tension Pill Geometry:** Continuous capsule pill curvature (`border-radius: var(--radius-pill); /* 9999px */`).
4. **Tactile Spring Physics:** `transition: all 0.24s cubic-bezier(0.32, 0.72, 0, 1)` with haptic compression `scale(0.94)` on active press.
5. **Atmospheric Header Scrim:** Vertical opacity dissolution gradient (`.header-scrim`) allowing background content to dissolve smoothly under the top bar.
6. **Sleek Data Tables:** Horizontal micro-luminance sweeps across row cells (`linear-gradient(90deg, ...)`), with smooth hover lift and deep depth shadows.
7. **Desktop Sidebar Optimization:** Desktop view relies strictly on the 3-bar hamburger toggle; redundant close buttons are hidden (`display: none !important;`).
8. **Protected Top Bar Integrity:** The floating top-bar layout remains immutable and byte-for-byte preserved.

> Detailed design patterns and token specifications are documented in **[docs/BRAND_DESIGN_SYSTEM.md](docs/BRAND_DESIGN_SYSTEM.md)**.

---

## 7. Repository File Map

```
edtrimkey-app/
├── index.html                   # Complete SPA application (HTML, CSS3, ES6+ JS)
├── firebase-messaging-sw.js      # Background service worker for Firebase FCM Web Push
├── docs/
│   ├── BRAND_DESIGN_SYSTEM.md   # Optical physics, button tokens, & brand identity manual
│   └── PAYMENT_FLOW_INTEGRATION.md # FinTech protocol, postMessage, & receipt engine docs
└── README.md                    # Platform manual & architectural documentation
```

---

## 8. Configuration & Service Endpoints

| Environment / Service | URL / Identifier | Purpose |
| :--- | :--- | :--- |
| **Backend Gateway** | `https://backend-ed.trimkey.in/api/gateway` | Core API for auth, jobs, documents, and ledger |
| **Trim Key Flow** | `https://flow.trimkey.in` | Checkout gateway and Razorpay payment bridge |
| **Sara AI Assistant** | `https://sara.trimkey.in` | Autonomous helpdesk and customer support chat |
| **Supabase Storage** | `https://ypmnsgpohaaavbjdqjye.supabase.co` | Cloud bucket for logos, avatars, and assets |
| **Firebase Project** | `ed-trim-key` | Push notifications and device token registration |
| **IP Detection** | `https://api.ipify.org?format=json` | Client IP logging for session audit trails |

---

## 9. Deployment & Local Setup

Because Ed-Trim Key is engineered with zero compile-step dependencies, running the app locally or deploying to production is instantaneous:

### Running Locally:
```bash
# Option 1: Python 3 HTTP Server
python -m http.server 8080

# Option 2: Node.js http-server
npx http-server -p 8080

# Option 3: VS Code Live Server
# Right click index.html -> "Open with Live Server"
```
Open your browser to `http://localhost:8080`.

### Production Deployment:
The repository can be deployed directly to static hosting platforms:
- **Vercel:** Connect the repository; zero build configuration needed.
- **Cloudflare Pages / Netlify / GitHub Pages:** Set the build output directory to root `/`.

---

## 10. Security & Compliance

- **Transport Layer Security:** Strict 256-Bit SSL encryption required across all endpoints and iframe bridges.
- **Data Sanitization:** Strict HTML entity encoding (`escapeHtml`) across all user-generated content, app titles, and ledger tables.
- **Multi-Device Session Control:** Automatic session synchronization and instant remote device revocation (`logoutAllDevices`).
- **GST & Invoicing Compliance:** Generated receipts follow statutory Indian GST formats with clear breakdown of order values, service tax statuses, and unique immutable ledger IDs (`LED-TKF-...`).

---

<p align="center">
  <b>Ed-Trim Key</b> — Engineered by the EdTrimKey Technologies Team.<br>
  <i>Confidential & Proprietary. All Rights Reserved.</i>
</p>
