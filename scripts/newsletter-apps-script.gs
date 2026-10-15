/**
 * Newsletter sign-ups → Google Sheet (for export to EmailOctopus).
 *
 * Sheet: https://docs.google.com/spreadsheets/d/1WNx3-CR_TJvQ-q6Lat7-FRZVW7Ebq--Ixe9mOr75xa8
 *
 * Setup (one time):
 * 1. Open the sheet → Extensions → Apps Script.
 * 2. Replace everything in Code.gs with this file and click Save.
 * 3. Deploy → New deployment → type "Web app".
 *      Execute as: Me
 *      Who has access: Anyone
 * 4. Authorise when asked, then copy the Web app URL (ends in /exec).
 * 5. Paste that URL into NEWSLETTER_SCRIPT_URL in src/lib/site-data.ts.
 *
 * Each sign-up adds a row to the "Subscribers" tab:
 *   Email Address | Subscribed At | Source
 * Duplicate emails are skipped. To import into EmailOctopus, download the tab
 * as CSV (File → Download → .csv) and map "Email Address" to the email field.
 */

var SHEET_NAME = "Subscribers";
var HEADERS = ["Email Address", "Subscribed At", "Source"];

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    var data = JSON.parse(e.postData.contents || "{}");
    var email = String(data.email || "").trim().toLowerCase();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return json({ ok: false, error: "invalid_email" });
    }

    var sheet = getSheet();
    var last = sheet.getLastRow();
    if (last > 1) {
      var existing = sheet.getRange(2, 1, last - 1, 1).getValues();
      for (var i = 0; i < existing.length; i++) {
        if (String(existing[i][0]).toLowerCase() === email) {
          return json({ ok: true, duplicate: true });
        }
      }
    }

    sheet.appendRow([email, new Date(), String(data.source || "website")]);
    return json({ ok: true });
  } finally {
    lock.releaseLock();
  }
}

function getSheet() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function json(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
