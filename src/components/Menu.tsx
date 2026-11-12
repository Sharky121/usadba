"use client";

import { useEffect, useRef, useState } from "react";
import { SITE_MENU, type MenuEntry } from "@/data/site-menu";

/** Пункт меню (порт src/js/menu/menu-item.jsx). */
function MenuItem({ data }: { data: MenuEntry }) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLSpanElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const { title, submenu, slug } = data;

  useEffect(() => {
    const handler = (evt: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(evt.target as Node)) {
        setIsOpen(false);
      }
    };
    window.addEventListener("click", handler);
    return () => {
      window.removeEventListener("click", handler);
      clearTimeout(closeTimer.current);
    };
  }, []);

  if (submenu.length > 0) {
    // На десктопе с мышью подменю открывается по наведению; на телефоне и планшете — по нажатию.
    const hoverMode = () => window.matchMedia("(hover: hover) and (min-width: 1280px)").matches;
    const openOnHover = () => {
      if (!hoverMode()) return;
      clearTimeout(closeTimer.current);
      setIsOpen(true);
    };
    // Небольшая задержка, чтобы список не закрывался, если курсор на мгновение вышел за край
    const closeOnLeave = () => {
      if (!hoverMode()) return;
      closeTimer.current = setTimeout(() => setIsOpen(false), 160);
    };

    return (
      <li
        className="site-menu__item"
        onMouseEnter={openOnHover}
        onMouseLeave={closeOnLeave}
        onClick={(evt) => {
          const onTitle = menuRef.current?.contains(evt.target as Node);
          // По наведению список уже открыт — клик по названию не должен его закрывать
          setIsOpen((prev) => (hoverMode() && onTitle ? true : !prev));
        }}
      >
        <span className="site-menu__link" ref={menuRef} role="button" tabIndex={0} aria-expanded={isOpen}>
          {title}
        </span>
        {isOpen && (
          <div className="site-menu__subitem menu-subitem">
            <ul className="menu-subitem__list">
              {submenu.map((item, index) => (
                <li key={index} className="menu-subitem__item">
                  <a className="menu-subitem__link" href={`#${item.slug}`} data-scroll={item.slug}>
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </li>
    );
  }

  return (
    <li className="site-menu__item">
      <a href={`#${slug}`} data-scroll={slug} className="site-menu__link">
        {title}
      </a>
    </li>
  );
}

/** Меню сайта (порт src/js/menu/menu.jsx). Клики по [data-scroll] обрабатывает SiteScripts. */
export default function Menu() {
  return (
    <ul className="site-menu__list">
      {SITE_MENU.map((item, index) => (
        <MenuItem key={index} data={item} />
      ))}
    </ul>
  );
}
