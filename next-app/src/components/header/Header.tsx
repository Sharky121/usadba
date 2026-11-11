"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState, useSyncExternalStore } from "react";
import { SiteMenu } from "./SiteMenu";

const PHONE_HREF = "tel:+79038181818";
const PHONE_DISPLAY = "+7 (903) 818-18-18";
const TELEGRAM_HREF = "https://t.me/+79038181818";

const noopSubscribe = () => () => {};

function PhoneIconLink({ className }: { className?: string }) {
  return (
    <Link
      href={PHONE_HREF}
      className={`inline-flex shrink-0 items-center justify-center rounded-full p-2 text-[rgb(87,77,77)] transition-colors hover:bg-[rgb(87,77,77)]/8 ${className ?? ""}`}
      aria-label={`Позвонить: ${PHONE_DISPLAY}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-6 w-6"
        aria-hidden
      >
        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
      </svg>
    </Link>
  );
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const mounted = useSyncExternalStore(noopSubscribe, () => true, () => false);

  const closeMenu = useCallback(() => setMenuOpen(false), []);
  const openMenu = useCallback(() => setMenuOpen(true), []);

  useEffect(() => {
    if (!mounted) return;
    document.body.classList.toggle("overflow-hidden", menuOpen);
    return () => document.body.classList.remove("overflow-hidden");
  }, [menuOpen, mounted]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen, closeMenu]);

  useEffect(() => {
    if (!menuOpen || !mounted) return;
    const el = document.getElementById("hamburger-menu");
    if (el instanceof HTMLElement) el.focus({ preventScroll: true });
  }, [menuOpen, mounted]);

  return (
    <>
      <header
        className="relative z-[9999] w-full bg-white shadow-[0_2px_4px_rgba(0,0,0,0.1)] [font-family:var(--font-kurale)]"
        id="page-header-main"
      >
        <div className="mx-auto w-full max-w-full px-[15px] pt-[max(0.25rem,env(safe-area-inset-top))] md:h-[100px] md:max-w-[768px] md:pt-0 md:pl-5 md:pr-0 xl:h-[118px] xl:max-w-[1280px]">
          <nav className="relative flex min-h-[52px] w-full flex-wrap items-center justify-between md:min-h-0 md:h-full md:flex-nowrap md:justify-start">
            <div className="flex w-full items-center justify-between gap-2 md:contents">
              <button
                type="button"
                id="hamburger-menu"
                className="relative z-[10001] flex h-[50px] w-[50px] shrink-0 cursor-pointer flex-col items-center justify-center gap-1 border-0 bg-transparent p-0 md:hidden"
                aria-expanded={menuOpen}
                aria-controls="menu"
                aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
                onClick={() => (menuOpen ? closeMenu() : openMenu())}
              >
                <div className="flex flex-col items-center justify-center gap-[5px]">
                  <span
                    className={`block h-0.5 w-[25px] bg-[rgb(87,77,77)] transition-transform duration-300 ease-in-out ${
                      menuOpen ? "translate-y-[7px] rotate-45" : ""
                    }`}
                  />
                  <span
                    className={`block h-0.5 w-[25px] bg-[rgb(87,77,77)] transition-opacity duration-300 ease-in-out ${
                      menuOpen ? "opacity-0" : ""
                    }`}
                  />
                  <span
                    className={`block h-0.5 w-[25px] bg-[rgb(87,77,77)] transition-transform duration-300 ease-in-out ${
                      menuOpen ? "-translate-y-[7px] -rotate-45" : ""
                    }`}
                  />
                </div>
                <span className="sr-only">Меню</span>
              </button>

              <Link
                href="/"
                className="flex min-w-0 flex-1 items-center justify-center px-1 text-center text-[rgb(87,77,77)] md:order-1 md:mr-5 md:max-w-[320px] md:min-h-[100px] md:shrink-0 md:flex-none md:items-center md:justify-start md:px-0 md:text-left xl:max-w-[380px] xl:min-h-[118px]"
              >
                <span className="text-lg font-bold leading-snug md:text-2xl md:font-extrabold md:tracking-tight md:leading-tight xl:text-3xl xl:leading-[1.12] xl:tracking-tight">
                  Отдых в центре
                  <br />
                  Мещеры
                </span>
              </Link>

              <PhoneIconLink className="md:hidden" />
            </div>

            <div
              data-menu="site-menu"
              className={`order-3 relative flex min-h-0 w-full flex-1 flex-col overflow-hidden md:static md:order-2 md:mr-5 md:h-full md:max-h-none md:w-auto md:translate-x-0 md:overflow-visible md:bg-transparent md:shadow-none xl:mr-[30px] xl:flex-1 xl:min-w-0 ${
                menuOpen
                  ? "max-md:fixed max-md:left-0 max-md:top-0 max-md:z-[9999] max-md:flex max-md:h-screen max-md:w-[300px] max-md:max-w-[min(300px,100vw-20px)] max-md:translate-x-0 max-md:flex-col max-md:shadow-[0_2px_2px_rgba(0,0,0,0.14),0_3px_1px_-2px_rgba(0,0,0,0.12),0_1px_5px_rgba(0,0,0,0.2)] max-md:will-change-transform max-md:[backface-visibility:hidden]"
                  : "max-md:fixed max-md:left-0 max-md:top-0 max-md:z-[9999] max-md:flex max-md:h-screen max-md:w-[300px] max-md:max-w-[min(300px,100vw-20px)] max-md:-translate-x-[105%] max-md:flex-col max-md:shadow-[0_2px_2px_rgba(0,0,0,0.14),0_3px_1px_-2px_rgba(0,0,0,0.12),0_1px_5px_rgba(0,0,0,0.2)] max-md:transition-transform max-md:duration-500 max-md:ease-in-out max-md:will-change-transform max-md:[backface-visibility:hidden]"
              }`}
            >
              <div
                className="pointer-events-none absolute inset-0 -z-20 bg-[url(/images/nav-bg.jpg)] bg-cover bg-center bg-no-repeat md:hidden"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute inset-0 -z-10 bg-[rgba(240,240,240,0.85)] md:hidden"
                aria-hidden
              />
              <div className="relative z-10 flex min-h-0 w-full flex-1 flex-col items-center justify-start overflow-y-auto overscroll-y-contain px-[15px] pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-[max(1rem,env(safe-area-inset-top))] text-center md:h-full md:overflow-visible md:p-0 md:pb-0 md:pt-0 md:text-left xl:flex-row xl:items-stretch xl:justify-between xl:gap-0 xl:overflow-visible xl:p-0">
                <div
                  id="menu"
                  className="flex min-h-0 w-full flex-1 flex-col justify-center overflow-y-auto md:flex-row md:flex-1 md:h-full md:items-center md:justify-center md:overflow-visible xl:min-w-0 xl:items-stretch xl:self-stretch"
                >
                  <SiteMenu onNavigate={closeMenu} />
                </div>

                <div className="mx-auto mb-[15px] flex w-full max-w-[260px] shrink-0 flex-col items-stretch gap-3 md:hidden xl:hidden">
                  <div className="flex w-full items-center justify-center gap-2">
                    <a
                      href={TELEGRAM_HREF}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 transition-opacity hover:opacity-80"
                      aria-label="Написать в Telegram"
                    >
                      <Image
                        src="/images/ico-telegram.svg"
                        alt=""
                        width={28}
                        height={28}
                        className="block h-7 w-7"
                      />
                    </a>
                    <Link
                      href={PHONE_HREF}
                      className="shrink-0 text-xl font-normal leading-tight tracking-tight text-[rgb(87,77,77)] transition-colors hover:text-[rgb(87,77,77)]"
                    >
                      <span>{PHONE_DISPLAY}</span>
                    </Link>
                  </div>
                  <Link
                    href="https://pay.ushmor.ru/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full min-h-[36px] items-center justify-center rounded border-2 border-[rgb(87,77,77)] bg-transparent px-3 py-1.5 text-sm font-normal leading-tight text-[rgb(87,77,77)] transition-colors duration-300 hover:border-[rgb(87,77,77)] hover:bg-[rgb(87,77,77)] hover:text-white"
                  >
                    <span>Онлайн оплата</span>
                  </Link>
                </div>

                <address className="shrink-0 not-italic md:hidden xl:hidden">
                  <p className="text-center text-sm leading-[1.2] text-[rgba(87,77,77,0.9)] [font-feature-settings:'lnum'] md:text-left">
                    Нижегородская область, Балахнинский район, деревня Ушмор
                  </p>
                </address>
              </div>
            </div>

            <div className="order-4 hidden shrink-0 flex-col md:flex md:order-3 md:ml-auto">
              <div className="flex w-[min(260px,100%)] flex-col gap-2.5 md:w-[240px] md:items-stretch">
                <div className="hidden w-full items-center justify-end gap-2 md:flex">
                  <a
                    href={TELEGRAM_HREF}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 transition-opacity hover:opacity-80"
                    aria-label="Написать в Telegram"
                  >
                    <Image
                      src="/images/ico-telegram.svg"
                      alt=""
                      width={28}
                      height={28}
                      className="block h-7 w-7"
                    />
                  </a>
                  <Link
                    href={PHONE_HREF}
                    className="shrink-0 text-left text-xl font-normal leading-tight tracking-tight text-[rgb(87,77,77)] transition-colors hover:text-[rgb(87,77,77)] xl:text-2xl"
                  >
                    <span>{PHONE_DISPLAY}</span>
                  </Link>
                </div>

                <Link
                  href="https://pay.ushmor.ru/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden w-full min-h-[36px] items-center justify-center rounded border-2 border-[rgb(87,77,77)] bg-transparent px-3 py-1.5 text-center text-sm font-normal leading-tight text-[rgb(87,77,77)] transition-colors duration-300 hover:border-[rgb(87,77,77)] hover:bg-[rgb(87,77,77)] hover:text-white md:inline-flex xl:inline-flex"
                >
                  <span>Онлайн оплата</span>
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </header>

      {mounted && menuOpen && (
        <button
          type="button"
          className="fixed inset-0 z-[997] h-[120vh] cursor-default border-0 bg-black/50 md:hidden"
          aria-hidden
          tabIndex={-1}
          onClick={closeMenu}
        />
      )}
    </>
  );
}
