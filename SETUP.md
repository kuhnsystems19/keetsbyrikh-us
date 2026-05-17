# Keets × rik.haus — Form Backend Setup

Both the waitlist and collaboration forms post to a **Google Apps Script** web app,
which appends rows to a Google Sheet. No server needed, completely free.

---

## Step 1 — Create the Google Sheet

1. Go to [sheets.google.com](https://sheets.google.com) and create a new spreadsheet
2. Rename the first tab: **Waitlist**
3. Add a second tab: **Collab**
4. Add these exact headers (Row 1) to each tab:

**Waitlist tab:**
```
Timestamp | Email | Access | Platform
```

**Collab tab:**
```
Timestamp | Email | Who | Message
```

---

## Step 2 — Create the Apps Script

1. In your Google Sheet, go to **Extensions → Apps Script**
2. Delete the default code, paste this:

```javascript
function doPost(e) {
  var data = JSON.parse(e.postData.contents);
  var ss   = SpreadsheetApp.getActiveSpreadsheet();

  if (data.type === 'waitlist') {
    ss.getSheetByName('Waitlist').appendRow([
      data.timestamp,
      data.email,
      data.access,
      data.platform,
    ]);
  } else if (data.type === 'collab') {
    ss.getSheetByName('Collab').appendRow([
      data.timestamp,
      data.email,
      data.who,
      data.message,
    ]);
  }

  return ContentService
    .createTextOutput(JSON.stringify({ status: 'ok' }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

3. Click **Save** (name the project anything, e.g. "Keets Forms")

---

## Step 3 — Deploy

1. Click **Deploy → New Deployment**
2. Click the gear icon next to "Type" → select **Web App**
3. Settings:
   - Execute as: **Me**
   - Who has access: **Anyone**
4. Click **Deploy**
5. Copy the **Web App URL** (looks like `https://script.google.com/macros/s/.../exec`)

---

## Step 4 — Connect to the Site

Open `js/main.js` and replace the placeholder at the top:

```javascript
const CONFIG = {
  FORM_URL: 'https://script.google.com/macros/s/YOUR_ID_HERE/exec',
};
```

Both forms (waitlist + collab) use the same URL — they're differentiated by the
`type` field in the payload.

---

## Notes

- **Opaque responses:** The site uses `fetch` with `mode: 'no-cors'` because
  Apps Script doesn't return CORS headers. This means the browser can't read
  the response, but data is still written to the sheet. The confirmation screen
  shows after every successful network request.

- **Redeployments:** If you update the Apps Script code, you must create a
  **New Deployment** (not update the existing one) for the changes to take effect.
  Update the URL in `js/main.js` accordingly.

- **Export to Excel:** In Google Sheets, go to **File → Download → Microsoft Excel (.xlsx)**
  at any time to get an Excel file.

- **Spam protection:** For now, the form has no captcha. If you start getting spam,
  consider adding [hCaptcha](https://hcaptcha.com) or a simple honeypot field.
