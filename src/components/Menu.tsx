"use client";

import { useEffect, useRef, useState } from "react";
import { SITE_MENU, type MenuEntry } from "@/data/site-menu";

/** Пункт меню (порт src/js/menu/menu-item.jsx). */
function MenuItem({ data }: { data: MenuEntry }) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLSpanElement>(null);
  const { title, submenu, slug } = data;

  useEffect(() => {
    const handler = (evt: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(evt.target as Node)) {
        setIsOpen(false);
      }
    };
    window.addEventListener("click", handler);
    return () => window.removeEventListener("click", handler);
  }, []);

  if (submenu.length > 0) {
    return (
      <li className="site-menu__item" onClick={() => setIsOpen((prev) => !prev)}>
        <span className="site-menu__link" ref={menuRef}>
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
