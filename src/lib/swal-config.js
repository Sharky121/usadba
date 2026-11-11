/**
 * Единые настройки модальных окон SweetAlert2.
 * @param {import('sweetalert2').SweetAlertStatic} Swal
 */
export function applySwalDefaults(Swal) {
  Swal.mixin({
    buttonsStyling: false,
    showClass: { popup: "swal2-show" },
    hideClass: { popup: "swal2-hide" },
    customClass: {
      container: "swal-site-container",
      popup: "swal-site",
      title: "swal-site__title",
      htmlContainer: "swal-site__html",
      actions: "swal-site__actions",
      confirmButton: "swal-site__btn swal-site__btn--primary",
    },
    allowOutsideClick: true,
    allowEscapeKey: true,
    scrollbarPadding: true,
  });
}

/**
 * @param {import('sweetalert2').SweetAlertStatic} Swal
 */
export function swalFormSuccess(Swal) {
  return Swal.fire({
    title: "Спасибо",
    text: "Менеджер свяжется с вами в ближайшее время",
    icon: "success",
    confirmButtonText: "Понятно",
    timer: 2400,
    timerProgressBar: true,
  });
}

/**
 * @param {import('sweetalert2').SweetAlertStatic} Swal
 * @param {unknown} [err]
 */
export function swalFormError(Swal, err) {
  const detail =
    err instanceof Error
      ? err.message
      : typeof err === "string"
        ? err
        : "";

  return Swal.fire({
    icon: "error",
    title: "Не удалось отправить",
    text: detail
      ? `Попробуйте ещё раз или свяжитесь с нами по телефону. (${detail})`
      : "Попробуйте ещё раз или свяжитесь с нами по телефону.",
    confirmButtonText: "Закрыть",
    customClass: {
      confirmButton: "swal-site__btn swal-site__btn--danger",
    },
  });
}

/**
 * @param {import('sweetalert2').SweetAlertStatic} Swal
 */
export function swalServerError(Swal) {
  return Swal.fire({
    icon: "error",
    title: "Сервер недоступен",
    text: "Письмо не отправилось. Позвоните нам или напишите в мессенджер.",
    confirmButtonText: "Закрыть",
    customClass: {
      confirmButton: "swal-site__btn swal-site__btn--danger",
    },
  });
}

/**
 * @param {import('sweetalert2').SweetAlertStatic} Swal
 */
export function swalPaymentModal(Swal) {
  return Swal.fire({
    template: "#yookassa-template",
    confirmButtonText: "Закрыть",
    showCloseButton: true,
    customClass: {
      popup: "swal-site swal-site--wide swal-site--pay",
      htmlContainer: "pay-container",
    },
    didOpen: () => {
      const container = Swal.getHtmlContainer();
      container?.querySelector(".ym-block-title")?.remove();
    },
  });
}
