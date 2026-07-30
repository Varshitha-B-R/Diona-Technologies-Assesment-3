# Criminal Risk Assessment Request

A digital web-based reproduction of the **Criminal Risk Assessment Request** form used by **Manitoba Families – Criminal Risk Assessment Unit (CRAU)**, Child Protection Branch. This application converts a paper-based legal form into a dynamic, print-ready web application with real-time validation.

## 📋 Overview

This application replicates the official **Criminal Risk Assessment Request** form (Revision date: 2025-01-10) used under **The Child and Family Services Act (s.18.4(1.1))**. It allows authorized CFS (Child and Family Services) Agency designates to submit risk assessment requests digitally.

The form collects:
- **Consent** for criminal risk assessment and release of information
- **Personal information** of the person being assessed (name, DOB, gender, aliases, address, contact, birth place)
- **Identification** details (two pieces of ID required)
- **Agency information** (submitting agency, reason for assessment, assigned worker, designate details)
- **Request** metadata (dates, contact info)

## 🚀 Features

- **A4 Print-Perfect Layout** — Two-page form formatted exactly like the official paper document
- **Real-time Form Validation** — Client-side validation for required fields, email format, phone number (10 digits)
- **Dynamic Pug Templating** — Reusable mixins for headers, footers, form fields, and checkboxes
- **Express.js Backend** — Serves the Pug template with static assets
- **Responsive Header** — Includes Manitoba logo, department address, and revision tracking
- **Page Numbering** — Automatic "Page X of Y" display in the footer
- **Print Optimization** — Full CSS `@media print` support with proper page breaks

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **Node.js** | Runtime environment |
| **Express.js** | Web server framework |
| **Pug** | Template engine for HTML rendering |
| **Vanilla JavaScript** | Client-side form validation |
| **CSS** | Custom styling with A4 print layout |

## 📁 Project Structure

```
├── app.js                              # Express server entry point
├── index.pug                           # Main Pug template (2-page form)
├── mixins.pug                          # Reusable Pug mixins (header, footer, fields)
├── package.json                        # Project dependencies
├── package-lock.json                   # Dependency lock file
├── prompt.txt                          # Development prompts / instructions
├── Criminal_Risk_Assessment_Form.xlsx  # Excel data source
├── readme.md                           # Project documentation
│
├── assests/
│   └── logo.png                        # Manitoba logo
│
├── css/
│   └── Criminal Risk Assessment.css    # Print-perfect stylesheet
│
└── js/
    └── Criminal Risk Assessment.js     # Client-side validation logic
```

## ⚙️ Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd "Diona Technologies Assessment-3"
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the server**

   ```bash
   node app.js
   ```

4. **Open the application**

   Navigate to [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Usage

1. **Fill out the form** — Complete all required fields on both pages
2. **Real-time validation** — Required fields are validated as you type
3. **Print the form** — Use your browser's print function (Ctrl+P / Cmd+P) for an A4-perfect output
4. **Submit** — (Future enhancement) Form data can be collected and processed

## ✅ Validation Rules

| Field | Validation |
|-------|-----------|
| First Name | Required |
| Last Name | Required |
| Phone | Required, exactly 10 digits |
| Email | Required, valid email format |
| Request Date | Required |
| Agency Name | Required |
| Assigned Worker | Required |
| Designate Name | Required |

## 🖨️ Print Formatting

The CSS includes comprehensive print styles:
- A4 page size (210mm × 297mm)
- Proper margins (12mm top, 14mm sides, 18mm bottom)
- Page breaks between form pages
- Footer positioned at the bottom of each page
- Section grouping to prevent awkward page breaks
- Font: Times New Roman (matching the official document)

## 🔧 Dependencies

- **express** ^5.2.1 — Web server framework
- **pug** ^3.0.4 — Template engine
- **pug-cli** ^1.0.0-alpha6 — CLI tool for Pug (dev dependency)

  Video Links:
  

## 📄 License

This project is for assessment purposes. The form design is based on the official **Manitoba Families – Criminal Risk Assessment Request** form.

## 📬 Contact

For questions about this implementation, please refer to the project repository or the submitting agency.
