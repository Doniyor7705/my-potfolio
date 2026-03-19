import { google } from 'googleapis';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { name, family, phone, message } = await req.json();

    // TO'G'RIDAN-TO'G'RI KALITLAR (Vercel-dan kutib o'tirmaymiz)
    const botToken = "8678764757:AAHK5op2fkXj8kOTMEIo0ncdc69ALHSj-NE";
    const chatId = "1927762375";

    const telegramText = 
      `🚀 *Yangi loyiha xabari!*\n\n` +
      `👤 *Ism:* ${name} ${family}\n` +
      `📞 *Tel:* ${phone}\n` +
      `💬 *Xabar:* ${message}\n` +
      `⏰ *Vaqt:* ${new Date().toLocaleString('uz-UZ')}`;

    // Telegramga yuborish
    try {
      await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text: telegramText,
          parse_mode: 'Markdown',
        }),
      });
    } catch (e) {
      console.error("Telegram error:", e);
    }

    // Google Sheets qismi (Environment variables-dan o'qiydi)
    const rawKey = process.env.GOOGLE_PRIVATE_KEY || '';
    const privateKey = rawKey.replace(/\\n/g, '\n');

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: privateKey,
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });
    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: 'Лист1!A2',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[name, family, phone, message, new Date().toLocaleString('uz-UZ')]],
      },
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}