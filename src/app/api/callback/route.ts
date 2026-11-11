import { contactHandler } from "@/lib/form-handlers";

/** Обратный звонок (бывший callback.php); тема письма может прийти в поле subject. */
export async function POST(request: Request) {
  return contactHandler(request, "Обратная связь с сайта", true);
}
