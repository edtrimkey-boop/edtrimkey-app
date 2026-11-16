# Ed-Trim Key — Apple Liquid Glass Design System & Brand Identity Manual

## 1. Executive Philosophy & The "Anti-AI" Standard

Most AI-generated interfaces feel sterile, robotic, or overly loud because language models default to two common failure modes:
1. Flat, unshaded rectangles (`border-radius: 4px` to `8px`) with raw solid hex colors and zero optical depth.
2. Cheap neon glow effects and noisy multi-color gradients (`linear-gradient`, `box-shadow: 0 0 25px rgba(...)`, `text-shadow: 0 0 10px ...`) that look like generic 2010s templates.

**Ed-Trim Key is engineered strictly on Apple Cupertino Human Interface Guidelines (HIG)**:
- **Zero glowing halos or neon text-shadows**: Clean, diffuse ambient shadows (`box-shadow: 0 4px 14px rgba(0, 0, 0, 0.25)` or `0 2px 8px rgba(0, 0, 0, 0.2)`).
- **Zero gradient colors**: No noisy multi-color gradients (`linear-gradient`). Solid, refined tones and single-tint translucent frosted layers.
- **Two Distinct Button Personalities**:
  1. **Solid Color-Filled Glass Effect**: High-contrast, rich solid buttons (e.g., `#26C3EA` Electric Cyan Blue for primary submits and dashboard actions, `#10B981` Emerald Green for positive confirmations, `#EF4444` Ruby Crimson for critical actions) with physical top specular reflection rims (`inset 0 1px 1px rgba(255, 255, 255, 0.6)`) and crisp dark typography.
  2. **Translucent Tinted Frosted Glass Effect**: Subtle, frosted optical glass (`rgba(255, 255, 255, 0.06)` to `rgba(38, 195, 234, 0.12)`) with `backdrop-filter: blur(20px) saturate(190%)` for secondary, outline, cancel, and table ledger badges.
- **Continuous Surface Tension Geometry**: Capsule pill curvature (`border-radius: var(--radius-pill); /* 9999px */`).
- **Tactile Apple Spring Kinetics**: `cubic-bezier(0.32, 0.72, 0, 1)` with haptic compression `scale(0.94)` on active press.

> **Golden Rule of Brand Consistency:**  
> Never render flat rectangles, neon glows, or multi-color gradients in Ed-Trim Key. Every action element must strictly follow the Liquid Glass Optical Engine.

---

## 2. The Optical Physics of Apple Liquid Glass

To achieve authentic, handcrafted Apple glass rather than artificial glowing artifacts, each component combines five physical layers:

```
┌────────────────────────────────────────────────────────┐
│ 1. Specular Refraction Lip (inset highlight on top rim) │
│ 2. Micro-Translucent Border (frosted optical boundary) │
│ 3. Ambient Saturation Filter (saturates background 190%)│
│ 4. Deep Gaussian Blur (20px ambient defocus)            │
│ 5. Clean Ambient Shadow (soft, zero-spread depth)      │
└────────────────────────────────────────────────────────┘
```

### The Core Engineering Pillars

1. **Backdrop Light Filtration:**
   ```css
   backdrop-filter: blur(20px) saturate(190%);
   -webkit-backdrop-filter: blur(20px) saturate(190%);
   ```
   *Why:* Defocuses background geometry while pulling 190% saturated environmental color through frosted glass surfaces.

2. **Specular Refraction Lip (Internal Light Gathering):**
   ```css
   box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.6), 0 4px 14px rgba(0, 0, 0, 0.25);
   ```
   *Why:* Real polished glass gathers overhead lighting along its top curved edge. Zero neon halos (`0 0 20px ...` is strictly forbidden).

3. **Surface Tension Pill Geometry:**
   ```css
   border-radius: var(--radius-pill); /* 9999px */
   ```
   *Why:* Rectangular boxes feel clinical. Continuous capsule/pill curvature emulates fluid surface tension and high-end industrial hardware.

4. **Tactile Spring Physics:**
   ```css
   transition: all 0.24s cubic-bezier(0.32, 0.72, 0, 1);
   ```
   *Why:* Linear or standard `ease` feels sluggish. The Apple spring curve `cubic-bezier(0.32, 0.72, 0, 1)` provides swift acceleration and smooth inertia damping.

5. **Haptic Compression (Press Feedback):**
   ```css
   button:active {
     transform: scale(0.94);
     transition: transform 0.1s cubic-bezier(0.32, 0.72, 0, 1);
   }
   ```
   *Why:* Emulates the physical click of an Apple Taptic Engine.

---

## 3. Button Categories & Palette

All button classes are globally defined in [index.html](file:///c:/Users/Dell/Downloads/edtrimkey-app/index.html).

### 3.1 Solid Color-Filled Glass Buttons

| Class | Solid Glass Color | Text Color | Usage Scenario | Inset Highlight & Shadow |
| :--- | :--- | :--- | :--- | :--- |
| `.btn-primary` | **Electric Cyan** (`var(--brand)` / `#26C3EA`) | `#05080F` (Dark) | Primary Submits, Submit Paper, Main Action | `inset 0 1px 1px rgba(255,255,255,0.6)`, `0 4px 14px rgba(0,0,0,0.25)` |
| `.btn-success` | **Emerald Green** (`var(--success)` / `#10B981`) | `#05080F` (Dark) | Pay Now, Approve, Download Receipt, Complete | `inset 0 1px 1px rgba(255,255,255,0.6)`, `0 4px 14px rgba(0,0,0,0.25)` |
| `.btn-danger` | **Ruby Crimson** (`var(--danger)` / `#EF4444`) | `#ffffff` (White) | Delete, Reject, Production Workspace, Dispute | `inset 0 1px 1px rgba(255,255,255,0.4)`, `0 4px 14px rgba(0,0,0,0.25)` |
| `.btn-warning` | **Amber Gold** (`var(--accent)` / `#F59E0B`) | `#05080F` (Dark) | Request Document, Review Changes, Notice | `inset 0 1px 1px rgba(255,255,255,0.6)`, `0 4px 14px rgba(0,0,0,0.25)` |
| `.btn-purple` | **Amethyst Violet** (`var(--purple)` / `#8B5CF6`) | `#ffffff` (White) | Dashboard Dynamic Apps, Generated Papers | `inset 0 1px 1px rgba(255,255,255,0.4)`, `0 4px 14px rgba(0,0,0,0.25)` |

### 3.2 Translucent Tinted Glass Buttons

| Class | Appearance / Tint | Text Color | Usage Scenario |
| :--- | :--- | :--- | :--- |
| `.btn-outline` | **Translucent Frosted Ice** (`rgba(255, 255, 255, 0.04)`) | `var(--brand)` | Secondary CTAs, Filter toggles, Back |
| `.btn-secondary` | **Smoked Obsidian Glass** (`rgba(255, 255, 255, 0.06)`) | `rgba(255, 255, 255, 0.95)` | Refresh Data, Muted Actions, Dismiss |
| `.glass-circle-btn` | **Circular Glass Orb** (`rgba(255, 255, 255, 0.06)`) | `var(--text)` | Hamburger Menu, Notification Bell |
| `.close-minimal` | **Modal Exit Glass Orb** (`rgba(255, 255, 255, 0.05)`) | `var(--text-muted)` | Close modal windows (replaces plain text `×`) |

---

## 4. Architectural Rules

### 4.1 Desktop Sidebar Close Button
- In desktop mode (screens wider than 950px), the sidebar close button (`.mobile-close-btn`) must be strictly hidden:
  ```css
  .mobile-close-btn { display: none !important; }
  ```
- The desktop view relies exclusively on the top-bar 3-bar hamburger button to toggle the sidebar smoothly. On mobile (`max-width: 950px`), the close button appears inside the drawer.

### 4.2 Dashboard Dynamic App Buttons with Domain SVGs
When dynamic applications are loaded into the dashboard (`#dyn-apps-container`), every app button must render with a dedicated SVG icon matching its capability:
- **Attendance**: Calendar check icon
- **Report Card / Results**: File text icon
- **Admit Card**: Badge ID card icon
- **Fee / Payment**: Credit card / billing icon
- **Exam / Tests**: Document edit / pen icon
- **Student / Admission**: Academic cap / user badge icon
- **General / Other**: External app portal icon

```javascript
const appSvg = getAppSvgIcon(app.name);
btn.innerHTML = `${appSvg} <span>${escapeHtml(app.name)}</span>`;
```

### 4.3 Top Bar Header Integrity
- The top bar header (`<header class="top-bar">` and its associated `.top-bar` CSS) is maintained strictly as established in commit `9cc7ec3`.
- Any updates to the app shell must never disrupt or override the layout, spacing, or functionality of this header.

---

## 5. Anti-Patterns & "AI Code Smells" To Strictly Avoid

When adding new screens or modifying existing code, **never** introduce the following flaws:

| ❌ AI Code Smell (Never Do This) | ✅ Apple Liquid Glass Standard |
| :--- | :--- |
| `border-radius: 4px;` or `border-radius: 6px;` | `border-radius: 9999px;` or `var(--radius-pill)` |
| Neon glow `box-shadow: 0 0 25px rgba(...)` | Diffuse ambient shadow: `box-shadow: 0 4px 14px rgba(0, 0, 0, 0.25)` |
| Multi-color `linear-gradient(...)` backgrounds | Clean solid tones (`var(--brand)`) or single-tint frosted layers |
| Glowing text `text-shadow: 0 0 10px rgba(...)` | Crisp, legible text without blur: `text-shadow: none;` |
| Plain text modal close button `×` with no background | `.close-minimal` circular glass orb with red hover state |
| Default `transition: 0.3s ease;` | `transition: all 0.24s cubic-bezier(0.32, 0.72, 0, 1);` with `active: scale(0.94)` |
| Uppercase blocky fonts (`text-transform: uppercase; font-family: sans-serif;`) | `font-family: 'Montserrat', sans-serif; font-weight: 700; letter-spacing: 0.3px;` |

---

## 6. Implementation Code Patterns

### 6.1 Standard Modal Action Bar
```html
<div class="modal-footer" style="display: flex; gap: 12px; justify-content: flex-end;">
  <button type="button" class="liquid-glass btn-outline" onclick="closeModal()">
    Cancel
  </button>
  <button type="button" class="liquid-glass btn-danger" onclick="clearForm()">
    Clear All
  </button>
  <button type="submit" class="liquid-glass btn-success">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
    Confirm & Proceed
  </button>
</div>
```

### 6.2 Data Table Ledger Action
```html
<!-- LED ID & Action in Data Tables -->
<button class="liquid-glass btn-sm btn-outline tk-led-btn" onclick="openReceipt('LED-001')">
  LED-001
</button>
<button class="liquid-glass btn-sm btn-success" onclick="downloadReceiptPdf('LED-001')">
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
  Receipt
</button>
```

---

## 7. Developer & Agent Verification Checklist

Before opening a pull request or submitting code touching UI in Ed-Trim Key:
- [ ] Are all action buttons styled with `.liquid-glass` and a semantic variant (`.btn-primary`, `.btn-success`, etc.)?
- [ ] Are all primary and confirmation actions rendered as solid color-filled glass buttons with dark text and specular top inset reflections?
- [ ] Are all secondary, cancel, and outline actions rendered as translucent frosted glass buttons?
- [ ] Are all neon glow effects (`box-shadow: 0 0 ...`, `text-shadow: 0 0 ...`) and multi-color gradients completely avoided?
- [ ] Is the sidebar close button hidden on desktop screens (`display: none !important;`)?
- [ ] Do dynamic app buttons render with domain-specific SVG icons and proper HTML escaping?
- [ ] Is the top bar header HTML and CSS identical to the established baseline?
- [ ] Does the page compile cleanly with zero console syntax or rendering errors?
