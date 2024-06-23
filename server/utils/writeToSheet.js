import { google } from "googleapis";

const auth = new google.auth.GoogleAuth({
    keyFile: './career-charcha-key.json',
    scopes: ['https://www.googleapis.com/auth/spreadsheets']
})

export async function writeToSheet(values) {
    const sheets = google.sheets({ version: 'v4', auth });
    const spreadsheetId = '1Z-zmmYHRh_wrfD6nAfphjlGWWDUs6SBKwe2ne6efo9c';
    const range = 'Sheet1!A1';
    const valueInputOption = 'USER_ENTERED';
    const resource = { values };

    try {
        const res = await sheets.spreadsheets.values.append({
            spreadsheetId,
            range,
            valueInputOption,
            resource,
        });
        return res;
    } catch (error) {
        console.error('Error:', error);
    }
}