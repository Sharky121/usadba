import nodemailer from "nodemailer";

/** Получатели — как в исходных PHP-обработчиках. */
export const RECIPIENTS = {
  main: "info@usadba-na-pre.ru, Sharky121@mail.ru, olga6227@gmail.com, Ushmor@list.ru, Samorukova_k@inbox.ru",
  booking: "Sharky121@mail.ru, Samorukova_k@inbox.ru", // send-form.php
};

/**
 * Транспорт почты. Если задан SMTP_HOST — отправка через SMTP,
 * иначе через локальный sendmail (аналог PHP mail()).
 */
function createTransport() {
  if (process.env.SMTP_HOST) {
    const port = Number(process.env.SMTP_PORT || 465);
    return nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port,
      secure: process.env.SMTP_SECURE ? process.env.SMTP_SECURE === "true" : port === 465,
      auth: process.env.SMTP_USER ? { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS } : undefined,
    });
  }
  return nodemailer.createTransport({
    sendmail: true,
    newline: "unix",
    path: process.env.SENDMAIL_PATH || "/usr/sbin/sendmail",
  });
}

let transport: ReturnType<typeof createTransport> | undefined;

export async function sendMail(to: string, subject: string, html: string) {
  transport ??= createTransport();
  await transport.sendMail({
    from: process.env.MAIL_FROM || "usadba-na-pre.ru <noreply@usadba-na-pre.ru>",
    replyTo: "info@usadba-na-pre.ru",
    to,
    subject,
    html,
  });
}

/** Ограничение длины поля формы — защита от мусорных/огромных писем. */
const MAX_FIELD_LENGTH = 500;

export function field(data: FormData, name: string): string {
  const v = data.get(name);
  return typeof v === "string" ? v.trim().slice(0, MAX_FIELD_LENGTH) : "";
}

export function esc(s: string): string {
  return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);
}

/** Общая отправка с обработкой ошибок транспорта. */
export async function deliver(to: string, subject: string, html: string): Promise<Response> {
  try {
    await sendMail(to, subject, html);
    return new Response("", { status: 200 });
  } catch (err) {
    console.error("[mail] send failed:", err);
    return new Response("Ошибка отправки письма", { status: 500 });
  }
}
