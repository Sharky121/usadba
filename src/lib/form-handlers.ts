import { deliver, esc, field, RECIPIENTS } from "@/lib/mail";

const RU_NAME = /^[а-яё\s]+$/iu;

/** Логика question.php / callback.php: имя, email, телефон. */
export async function contactHandler(request: Request, defaultSubject: string, useSubjectField: boolean) {
  const data = await request.formData();
  const name = field(data, "name");
  const email = field(data, "email");
  const phone = field(data, "phone");
  const subject = useSubjectField ? field(data, "subject") || defaultSubject : defaultSubject;

  if (name && !RU_NAME.test(name)) {
    return new Response("Имя должно быть на русском языке!", { status: 400 });
  }
  if (!name && !email && !phone) {
    return new Response("Необходимо заполнить хотя бы одно поле!", { status: 400 });
  }

  const message = `<b>Имя:</b> ${esc(name)}<br><b>Email:</b> ${esc(email)}<br><b>Телефон::</b> ${esc(phone)}`;
  return deliver(RECIPIENTS.main, subject, message);
}

const HOUSE_NAMES: Record<string, string> = { pra: "Усадьба на Пре", ushmor: "Усадьба Ушмор" };

/** Логика send.php / send-form.php: заявка на бронирование. */
export async function bookingHandler(request: Request, to: string) {
  const data = await request.formData();
  const house = field(data, "house-name");
  const houseName = house ? HOUSE_NAMES[house] || "Усадьба не выбрана" : "";

  const message =
    `<b>Дата заезда:</b> ${esc(field(data, "start-date"))}<br>` +
    `<b>Дата выезда::</b> ${esc(field(data, "end-date"))}<br>` +
    `<b>Телефон::</b> ${esc(field(data, "phone"))}<br>` +
    `<b>E-mail::</b> ${esc(field(data, "email"))}<br>` +
    `<b>Усадьба::</b> ${esc(houseName)}`;
  return deliver(to, "Бронирование с сайта", message);
}
