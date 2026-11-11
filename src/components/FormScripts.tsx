"use client";

import { useEffect } from "react";

/**
 * Порт инлайн-скрипта form.html. Как и в оригинале, отправка отключена
 * (fetch был закомментирован): проверяется только email.
 * Для включения — POST FormData на /api/send-form.
 */
export default function FormScripts() {
  useEffect(() => {
    const form = document.querySelector<HTMLFormElement>("#booking-example");
    if (!form) return;

    const checkEmailAddress = (email: string) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      console.log(emailRegex.test(email));
      return emailRegex.test(email);
    };

    const onSubmit = (evt: SubmitEvent) => {
      evt.preventDefault();
      const target = evt.target as HTMLFormElement;
      checkEmailAddress((target.elements.namedItem("email") as HTMLInputElement).value);
    };

    form.addEventListener("submit", onSubmit);
    return () => form.removeEventListener("submit", onSubmit);
  }, []);

  return null;
}
