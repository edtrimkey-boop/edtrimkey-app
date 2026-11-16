# Ed-Trim Key — Apple Liquid Glass Design System & Brand Identity Manual

## 1. Executive Philosophy & The "Anti-AI" Standard

Most AI-generated interfaces feel sterile, robotic, or overly loud because language models default to two common failure modes:
1. Flat, unshaded rectangles (`border-radius: 4px` to `8px`) with raw solid hex colors and zero depth.
2. Cheap neon glow effects and noisy multi-color gradients (`linear-gradient`, `box-shadow: 0 0 25px rgba(...)`) that look like generic 2010s templates.

**Ed-Trim Key is engineered strictly on Apple Cupertino Human Interface Guidelines (HIG)**:
- **Zero glowing halos or neon text-shadows**: Clean, diffuse ambient shadows (`box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25)`).
- **Zero gradient colors**: No noisy color shifts. Solid, refined tones and single-tint translucent frosted layers.
- **Two Distinct Button Personalities**:
  1. **Solid Color-Filled Glass Effect**: High-contrast, rich solid buttons (e.g., `#26C3EA` Electric Cyan Blue for primary submits and dashboard actions, `#10B981` Emerald Green for positive confirmations) with physical top specular reflection rims and crisp typography.
  2. **Translucent Tinted Frosted Glass Effect**: Subtle, frosted optical glass (`rgba(255, 255, 255, 0.07)` to `rgba(38, 195, 234, 0.12)`) with `backdrop-filter: blur(20px) saturate(190%)` for secondary, outline, cancel, and table ledger badges.
- **Continuous Surface Tension Geometry**: Capsule pill curvature (`border-radius: var(--radius-pill); /* 9999px */`).
- **Tactile Apple Spring Kinetics**: `cubic-bezier(0.32, 0.72, 0, 1)` with haptic compression `scale(0.94)` on active press.

---

## 2. The Optical Physics of Apple Liquid Glass

Every interactive component combines five physical layers without artificial glowing artifacts:

```
┌────────────────────────────────────────────────────────┐
│ 1. Specular Refraction Lip (inset highlight on top rim) │
│ 2. Micro-Translucent Border (frosted optical boundary) │
│ 3. Ambient Saturation Filter (saturates background 190%)│
│ 4. Deep Gaussian Blur (20px ambient defocus)            │
│ 5. Clean Ambient Shadow (soft, zero-spread depth)      │
└────────────────────────────────────────────────────────┘
```

### The Core Engineering Rules

1. **Backdrop Light Filtration:**
   ```css
   backdrop-filter: blur(20px) saturate(190%);
   -webkit-backdrop-filter: blur(20px) saturate(190%);
   ```
   *Why:* Defocuses background geometry while pulling 190% saturated environmental color through frosted glass surfaces.

2. **Specular Refraction Lip (Internal Light Gathering):**
   ```css
   box-shadow: inset 0 1px 1.5px rgba(255, 255, 255, 0.45), 0 2px 8px rgba(0, 0, 0, 0.25);
   ```
   *Why:* Real polished glass gathers overhead lighting along its top curved edge. Zero neon halos (`0 0 20px ...` is strictly forbidden).

3. **Surface Tension Pill Geometry:**
   ```css
   border-radius: var(--radius-pill); /* 9999px */
   ```
   *Why:* Eliminates clinical rectangular corners (`4px` or `6px`) in favor of fluid physical hardware geometry.

4. **Tactile Spring Physics & Haptic Press:**
   ```css
   transition: all 0.24s cubic-bezier(0.32, 0.72, 0, 1);
   ```
   ```css
   button:active {
     transform: scale(0.94) !important;
     transition: transform 0.1s cubic-bezier(0.32, 0.72, 0, 1) !important;
   }
   ```

---

## 3. Universal Button Architecture & Catalog

All button classes are globally defined in [index.html](file:///c:/Users/Dell/Downloads/edtrimkey-app/index.html).

### 3.1 Solid Color Filled Glass Buttons (High-Impact CTAs)

| Class | Appearance / Fill | Typography | Usage Scenario |
| :--- | :--- | :--- | :--- |
| `.btn-primary` | **Solid Electric Cyan Glass** (`#26C3EA`) | Dark `#061320`, Weight 800 | Primary CTAs, Dashboard Submit Paper, Modal Submit & Login |
| `.btn-success` | **Solid Emerald Green Glass** (`#10B981`) | White `#ffffff`, Weight 800 | Confirm, Save, Pay Now, Register, Approve |
| `.btn-danger` | **Solid Ruby Crimson Glass** (`#EF4444`) | White `#ffffff`, Weight 800 | Delete, Clear All, Reject, Revision Request |
| `.btn-warning` | **Solid Amber Gold Glass** (`#F59E0B`) | Black `#000000`, Weight 800 | Request Document, Review Alerts |
| `.btn-purple` | **Solid Amethyst Purple Glass** (`#8B5CF6`) | White `#ffffff`, Weight 800 | Generated Papers, Workspace, Dynamic Dashboard Apps |

### 3.2 Translucent Tinted Frosted Glass Buttons (Secondary & Tables)

| Class | Appearance / Tint | Typography | Usage Scenario |
| :--- | :--- | :--- | :--- |
| `.btn-outline` | **Clear Frosted Glass** (`rgba(255, 255, 255, 0.07)`) | White `#ffffff`, Weight 700 | Secondary CTAs, Print, Cancel, Modal Dismiss |
| `.btn-secondary` | **Smoked Obsidian Glass** (`rgba(30, 41, 59, 0.72)`) | Muted `#cbd5e1`, Weight 700 | Refresh Data, Reset, Secondary Controls |
| `.tk-led-btn` | **Tinted Cyan Frosted Pill** (`rgba(38, 195, 234, 0.08)`) | Brand Cyan `#26C3EA` | Ledger ID Clickable Invoice Pills |
| `.btn-action-download` | **Tinted Emerald Frosted Badge** (`rgba(16, 185, 129, 0.12)`) | Mint `#10B981` | Pipeline Table Completed Downloads |
| `.btn-action-pending` | **Tinted Amber Frosted Badge** (`rgba(245, 158, 11, 0.12)`) | Amber `#F59E0B` | Pipeline Table Pending Status |
| `.close-minimal` | **Frosted Glass Orb** (32px circular) | Cross Icon | Modal Exit Controls |

---

## 4. Dashboard App Buttons & Inline SVGs

Every action and dynamic external app button rendered in the dashboard overview must feature an inline SVG icon corresponding to its domain:

```javascript
// Function: getAppSvgIcon(name, size = 16)
// Automatically maps dynamic apps to clean Cupertino SVGs:
- Attendance     -> Calendar with checklist
- Admission      -> User application with pen
- Fee / Billing  -> Currency wallet card
- Exam / Result  -> Achievement grade star
- Library        -> Open book
- Timetable      -> Clock schedule
- Analytics      -> Bar chart
- General App    -> Clean 4-square grid icon
```

### Dashboard Button Example
```html
<button class="liquid-glass btn-purple" onclick="openApp()">
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
    <rect x="3" y="3" width="7" height="7" rx="1.5"/>
    <rect x="14" y="3" width="7" height="7" rx="1.5"/>
    <rect x="14" y="14" width="7" height="7" rx="1.5"/>
    <rect x="3" y="14" width="7" height="7" rx="1.5"/>
  </svg>
  <span>Fee Portal</span>
</button>
```

---

## 5. Sidebar Navigation & Responsive Rules

1. **Desktop View (>950px):**
   - The close button (`.mobile-close-btn`) is strictly **hidden** (`display: none !important;`).
   - The primary sidebar expand/collapse control is the **3-bar hamburger button** in the sticky top header.
2. **Mobile View (≤950px):**
   - The sidebar functions as a slide-out drawer (`transform: translateX(-100%)`).
   - The `.mobile-close-btn` is displayed (`display: inline-flex !important;`) inside the drawer header so mobile users can dismiss the drawer.

---

## 6. Anti-Patterns & "AI Code Smells" To Strictly Avoid

| ❌ AI Code Smell (Never Do This) | ✅ Apple Liquid Glass Standard |
| :--- | :--- |
| Multi-color gradients (`linear-gradient(135deg, ... 0%, ... 100%)`) | Solid color filled (`#26C3EA`) or clean single-tint frosted glass |
| Neon glowing drop shadows (`box-shadow: 0 0 25px rgba(...)`) | Diffuse ambient drop shadow (`0 2px 8px rgba(0, 0, 0, 0.25)`) |
| Glowing text (`text-shadow: 0 0 10px rgba(...)`) | Clean high-contrast solid typography with Montserrat 800 weight |
| Hard rectangular corners (`border-radius: 4px` to `8px`) | Capsule pill geometry (`var(--radius-pill); /* 9999px */`) |
| Unstyled buttons or buttons missing SVG icons | All buttons have semantic SVG icons with `gap: 8px;` |
| Sidebar close button visible in desktop view | `.mobile-close-btn { display: none !important; }` on desktop |

---

## 7. Developer & Agent Quality Checklist

Before submitting any front-end change to Ed-Trim Key:
- [ ] Are all glowing effects (`0 0 Xpx ...`) and gradients removed?
- [ ] Are primary submit buttons and dashboard action buttons solid color filled with glass rims?
- [ ] Are secondary and cancel buttons styled as translucent frosted glass?
- [ ] Do all dynamic app buttons in the dashboard have their corresponding SVG icon?
- [ ] Is the sidebar close button completely hidden on desktop?
- [ ] Does the page compile with 0 syntax errors (`new Function(...)` check passes)?

---

## 8. SARA AI Floating Widget & Billing Ledger System

### 8.1 SARA AI Floating Trigger Widget
- **Geometry:** Exact 60px × 60px circle (`border-radius: 50% !important;`).
- **Logo Graphic:** Animated GIF (`https://ypmnsgpohaaavbjdqjye.supabase.co/storage/v1/object/public/logo/1115.gif`) fitted cleanly to 100% of button area (`object-fit: cover`).
- **Aesthetic:** Solid brand cyan with Apple liquid glass refraction (`backdrop-filter: blur(25px) saturate(200%)`), zero glowing aura.
- **Micro-interactions:** Natural floating kinetic animation (`saraFloat 3.2s ease-in-out infinite`), active press scale `0.92`, hides smoothly when the chat window opens.

### 8.2 Institute Billing Transaction Ledger & PDF Receipt
- **Table Columns:** `LED ID | Date with time | Type | Service | Amount | Qty | Status`.
- **Date & Time Layout:** Stacked on two distinct lines for rapid optical scanning:
  - Line 1: `16 Nov 2026` (Weight 700, White)
  - Line 2: `03:31 am` (Weight 600, Muted Text)
- **Clickable LED ID:** Opens the official Tax Invoice & Payment Receipt modal and offers direct PDF download via jsPDF.
- **Official PDF Receipt Specs:**
  - Official Brand Logo header.
  - Issuer & Business Information with SVGs (Address: Lalpur, Ranchi, Jharkhand - 834001; Phone: +91 8235400967; Email: trimkeyai@gmail.com; Website: https://trimkey.in/ed).
  - Customer contact details auto-queried from user profile (Name, Email, Phone).
  - Itemized quantity, unit pricing, total order value in INR (₹).
  - Print, Download, and View PDF actions.

---

## 9. Floating Liquid Glass Header & Universal SVG Standard

### 9.1 Floating Liquid Glass Header Physics
- **Detached Island Geometry:** Positioned with `position: sticky; top: 16px; margin: 16px 24px 0 24px;` so content area cards scroll smoothly underneath it.
- **Capsule Pill Curvature:** `border-radius: var(--radius-pill); /* 9999px */` with height `64px` (`56px` on mobile).
- **Surface Physics:** `backdrop-filter: blur(25px) saturate(190%); border: 1px solid rgba(255, 255, 255, 0.12); box-shadow: 0 12px 32px rgba(0, 0, 0, 0.35), inset 0 1px 1.5px rgba(255, 255, 255, 0.25);`
- **Integrated Controls:**
  1. **Hamburger Button:** 3-bar sidebar toggle with spring physics.
  2. **Glass Title Pill:** Features dynamic tab SVG (`#headerTabIcon`), institute logo, separator, and active view name.
  3. **Quick Database Sync Button (`#headerSyncBtn`):** 40px circular glass button with animated spinning refresh SVG.
  4. **Quick Theme Toggle (`#headerThemeBtn`):** 40px circular glass button dynamically rendering Sun (in dark mode) or Moon (in light mode) SVGs.
  5. **Notification Bell (`#bellWrapper`):** Glass orb with unread count badge and styled alerts dropdown.
  6. **User Profile Capsule (`#userHeaderInfo`):** Avatar orb, user name, and chevron toggle.

### 9.2 Universal SVG Standard (No Text Glyphs or Emojis)
- **Zero Raw Characters:** Never use `✖`, `+`, `▼`, or Unicode emojis in buttons or interactive controls.
- **Modal Close Controls (`.close-minimal`):** Strictly equipped with Apple Cupertino cross SVGs (`14px` by `14px`, `stroke-width="2.5"`).
- **Action Buttons:** Every modal submit, register, save, cancel, acknowledge, and table row action button features an inline semantic SVG icon (`gap: 8px;`).
