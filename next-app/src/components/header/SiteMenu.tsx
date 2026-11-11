"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { SiteMenuEntry, SiteMenuSubitem } from "@/data/site-menu";
import { SITE_MENU } from "@/data/site-menu";
import { scrollToSectionById } from "@/lib/scroll-to-section";
import { SubmenuParentOrnamentXL } from "./SubmenuOrnaments";

type SiteMenuProps = {
  items?: SiteMenuEntry[];
  /** Вызвать после перехода по якорю (закрыть моб. меню). */
  onNavigate?: () => void;
};

const linkBase =
  "block text-center text-lg font-medium leading-[1.2] text-[rgb(87,77,77)] transition-[background-color] duration-1000 hover:text-[rgb(87,77,77)]/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(87,77,77)]/30 focus-visible:ring-offset-2 md:text-left max-xl:flex max-xl:min-h-[48px] max-xl:items-center max-xl:justify-center xl:inline-flex xl:h-full xl:min-h-0 xl:items-center xl:justify-center xl:px-[15px] xl:py-[42px] xl:font-normal xl:text-lg xl:transition-colors xl:duration-200 xl:ease-in-out xl:hover:text-[rgb(87,77,77)]/80";

function MenuLink({
  slug,
  title,
  onPick,
}: {
  slug: string;
  title: string;
  onPick: (slug: string) => void;
}) {
  return (
    <a
      href={`#${slug}`}
      data-scroll={slug}
      className={linkBase}
      onClick={(e) => {
        e.preventDefault();
        onPick(slug);
      }}
    >
      {title}
    </a>
  );
}

function SubmenuList({
  items,
  onPick,
}: {
  items: SiteMenuSubitem[];
  onPick: (slug: string) => void;
}) {
  return (
    <ul className="m-0 w-full list-none p-0 max-xl:divide-y max-xl:divide-[rgb(87,77,77)]/12">
      {items.map((sub) => (
        <li key={sub.slug + sub.title} className="w-full">
          <a
            href={`#${sub.slug}`}
            data-scroll={sub.slug}
            className="flex min-h-[44px] w-full items-center px-5 py-2 text-left text-sm text-[#574d4d] transition-colors hover:bg-black/5 hover:opacity-100 max-xl:min-h-[40px] max-xl:justify-center max-xl:px-3 max-xl:py-2 max-xl:text-center max-xl:text-[13px] max-xl:leading-snug max-xl:font-normal max-xl:text-[rgb(87,77,77)]/90 max-xl:active:bg-[rgb(87,77,77)]/8 max-xl:hover:bg-[rgb(87,77,77)]/5 xl:min-h-0 xl:justify-center xl:px-5 xl:py-2 xl:text-center xl:text-base xl:leading-normal"
            onClick={(e) => {
              e.preventDefault();
              onPick(sub.slug);
            }}
          >
            {sub.title}
          </a>
        </li>
      ))}
    </ul>
  );
}

function MenuRow({
  item,
  onPick,
  open,
  onOpenChange,
}: {
  item: SiteMenuEntry;
  onPick: (slug: string) => void;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const rootRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const close = (evt: MouseEvent) => {
      if (!open) return;
      if (rootRef.current && !rootRef.current.contains(evt.target as Node)) {
        onOpenChange(false);
      }
    };
    window.addEventListener("click", close);
    return () => window.removeEventListener("click", close);
  }, [open, onOpenChange]);

  if (item.submenu.length === 0) {
    return (
      <li className="mb-5 last:mb-0 md:mb-0 xl:relative xl:mb-0 xl:flex xl:h-full xl:items-stretch">
        <MenuLink slug={item.slug} title={item.title} onPick={onPick} />
      </li>
    );
  }

  const pickSub = (slug: string) => {
    onOpenChange(false);
    onPick(slug);
  };

  return (
    <li
      ref={rootRef}
      className="mb-5 last:mb-0 md:mb-0 xl:relative xl:mb-0 xl:flex xl:h-full xl:items-stretch"
    >
      <button
        type="button"
        className={`relative ${linkBase} w-full text-left xl:text-center ${
          open ? "xl:font-semibold xl:text-[rgb(58,50,50)]" : ""
        }`}
        aria-expanded={open}
        onClick={(e) => {
          e.stopPropagation();
          onOpenChange(!open);
        }}
      >
        <span className="relative z-[1]">{item.title}</span>
        {open && (
          <span
            className="pointer-events-none absolute bottom-3 left-1/2 hidden -translate-x-1/2 xl:block"
            aria-hidden
          >
            <SubmenuParentOrnamentXL />
          </span>
        )}
      </button>
      {open && (
        <div className="relative mt-3 max-xl:pl-0 max-xl:text-left xl:absolute xl:left-1/2 xl:top-full xl:z-[9999] xl:-mt-px xl:ml-[-125px] xl:mt-0 xl:w-[250px] xl:pl-0 xl:text-center xl:origin-top xl:isolate">
          <div
            key={item.slug}
            className="overflow-hidden max-xl:rounded-xl max-xl:border max-xl:border-[rgb(87,77,77)]/10 max-xl:bg-[linear-gradient(180deg,rgba(252,251,249,0.42)_0%,rgba(245,242,238,0.32)_100%)] max-xl:shadow-[inset_0_1px_0_rgba(255,255,255,0.35)] xl:animate-header-submenu-enter xl:rounded-b-[10px] xl:border-x xl:border-b xl:border-[rgb(87,77,77)]/12 xl:bg-white xl:shadow-none"
          >
            <SubmenuList items={item.submenu} onPick={pickSub} />
          </div>
        </div>
      )}
    </li>
  );
}

export function SiteMenu({
  items = SITE_MENU,
  onNavigate,
}: SiteMenuProps) {
  const [openSlug, setOpenSlug] = useState<string | null>(null);

  const handlePick = (slug: string) => {
    scrollToSectionById(slug);
    onNavigate?.();
  };

  const handleOpenChange = useCallback((slug: string, open: boolean) => {
    setOpenSlug(open ? slug : null);
  }, []);

  return (
    <ul className="m-0 mt-5 w-full list-none p-0 text-center md:mt-0 md:flex md:h-full md:w-auto md:flex-row md:items-center md:justify-center md:gap-0 xl:mt-0 xl:flex xl:items-stretch xl:justify-center">
      {items.map((item) => (
        <MenuRow
          key={item.slug}
          item={item}
          onPick={handlePick}
          open={openSlug === item.slug}
          onOpenChange={(next) => handleOpenChange(item.slug, next)}
        />
      ))}
    </ul>
  );
}
