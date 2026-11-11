import { bookingHandler } from "@/lib/form-handlers";
import { RECIPIENTS } from "@/lib/mail";

/** Заявка на бронирование с тестовой формы form.html (бывший send-form.php). */
export async function POST(request: Request) {
  return bookingHandler(request, RECIPIENTS.booking);
}
