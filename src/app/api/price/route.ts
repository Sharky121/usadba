import { deliver, esc, field, RECIPIENTS } from "@/lib/mail";

/** Запрос стоимости (бывший price.php). */
export async function POST(request: Request) {
  const data = await request.formData();
  const message = `<b>Имя:</b> ${esc(field(data, "name"))}<br><b>Телефон::</b> ${esc(field(data, "phone"))}`;
  return deliver(RECIPIENTS.main, "Запрос стоимости", message);
}
