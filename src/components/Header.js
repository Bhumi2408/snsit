"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems, WHATSAPP_WEB } from "@/data/site";
import {
  ChevronDown,
  CloseIcon,
  FacebookSimple,
  InstagramSimple,
  MenuIcon,
  TwitterSimple,
} from "./Icons";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [subOpen, setSubOpen] = useState(false);
  const pathname = usePathname();

  // Home is current on "/", "Our Products" on any product page
  const trim = (path) => path.replace(/(.)\/$/, "$1");
  const isActive = (href) => trim(href) === trim(pathname);
  const isCurrent = (item) =>
    item.children ? item.children.some((c) => isActive(c.href)) : isActive(item.href);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <header className="site-header">
        {/* Desktop */}
        <div className="header-desktop">
          <div className="header-top">
            <div className="container header-top-inner">
              <div className="header-socials">
                <a href="#" aria-label="Facebook"><FacebookSimple /></a>
                <a href="#" aria-label="X (Twitter)"><TwitterSimple /></a>
                <a href="#" aria-label="Instagram"><InstagramSimple /></a>
              </div>
            </div>
          </div>
          <div className="header-main">
            <div className="container header-main-inner">
              <Link href="/" className="header-logo" rel="home">
                <img src="/logo.jpeg" alt="SNS IT SOLUTIONS" width="502" height="439" />
              </Link>
              <div className="header-right">
                <nav className="main-menu" aria-label="Header Menu">
                  <ul>
                    {navItems.map((item) => (
                      <li key={item.label} className={item.children ? "has-children" : undefined}>
                        <a href={item.href} className={isCurrent(item) ? "is-current" : undefined}>
                          {item.label}
                          {item.children && <ChevronDown />}
                        </a>
                        {item.children && (
                          <ul className="sub-menu">
                            {item.children.map((child) => (
                              <li key={child.href}>
                                <a href={child.href} className={isActive(child.href) ? "is-current" : undefined}>
                                  {child.label}
                                </a>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>
                <a href={WHATSAPP_WEB} className="header-cta">
                  <span className="header-cta-text">
                    Get Started
                    <span className="header-cta-secondary">Hurry Up!</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile */}
        <div className="header-mobile">
          <div className="container header-main-inner">
            <Link href="/" className="header-logo" rel="home">
              <img src="/logo.jpeg" alt="SNS IT SOLUTIONS" width="502" height="439" />
            </Link>
            <button
              type="button"
              className="menu-trigger"
              aria-label="Menu"
              aria-expanded={open}
              onClick={() => setOpen(true)}
            >
              <MenuIcon />
            </button>
          </div>
        </div>
      </header>

      {/* Off-canvas mobile menu */}
      <div className={`offcanvas${open ? " is-open" : ""}`} role="dialog" aria-label="Offcanvas modal" aria-hidden={!open}>
        <div className="offcanvas-actions">
          <button type="button" className="offcanvas-close" aria-label="Close drawer" onClick={close}>
            <CloseIcon />
          </button>
        </div>
        <div className="offcanvas-content">
          <Link href="/" className="offcanvas-logo" rel="home" onClick={close}>
            <img src="/logo.jpeg" alt="SNS IT SOLUTIONS" width="502" height="439" />
          </Link>
          <nav className="mobile-menu" aria-label="Main menu">
            <ul>
              {navItems.map((item) => (
                <li key={item.label}>
                  {item.children ? (
                    <>
                      <span className="mobile-parent">
                        <a href={item.href} onClick={close}>{item.label}</a>
                        <button
                          type="button"
                          className={`mobile-toggle${subOpen ? " is-open" : ""}`}
                          aria-label="Expand dropdown menu"
                          aria-expanded={subOpen}
                          onClick={() => setSubOpen((v) => !v)}
                        >
                          <ChevronDown />
                        </button>
                      </span>
                      <ul className={`mobile-sub${subOpen ? " is-open" : ""}`}>
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <a href={child.href} onClick={close}>{child.label}</a>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <a href={item.href} onClick={close}>{item.label}</a>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
