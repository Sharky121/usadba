import { contactHandler } from "@/lib/form-handlers";

/** Форма «Консультация» (бывший question.php). */
export async function POST(request: Request) {
  return contactHandler(request, "Вопрос с сайта", false);
}
