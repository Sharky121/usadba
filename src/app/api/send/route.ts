import { bookingHandler } from "@/lib/form-handlers";
import { RECIPIENTS } from "@/lib/mail";

/** Заявка на бронирование (бывший send.php). */
export async function POST(request: Request) {
  return bookingHandler(request, RECIPIENTS.main);
}
