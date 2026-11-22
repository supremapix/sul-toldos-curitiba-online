import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Logo } from "./Logo";

const links = [
  ["/#services", "Soluções"],
  ["/#gallery", "Inspirações"],
  ["/#calculator", "Calcular medida"],
  ["/mapa-do-site", "Onde atendemos"],
  ["/faq", "Dúvidas"],
] as const;

export default function Header() {
  const [open, setOpen] = useState(false);
  const button = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        button.current?.focus();
      }
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  return (
    <>
      <a className="sul-skip" href="#main-content">Pular para o conteúdo</a>
      <header className="sul-header">
        <a href="/" aria-label="Portal Toldos em Curitiba, início"><Logo /></a>
        <button type="button" className="sul-menu-toggle" ref={button} aria-expanded={open} aria-controls="site-menu" onClick={() => setOpen((value) => !value)}>
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          <span>{open ? "Fechar" : "Menu"}</span>
        </button>
        <nav aria-label="Navegação principal" id="site-menu" className={open ? "sul-nav is-open" : "sul-nav"}>
          {links.map(([href, label]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
          <a className="sul-nav-cta" href="/#empresas" onClick={() => setOpen(false)}>Ver empresas <ArrowUpRight size={18} aria-hidden="true" /></a>
        </nav>
      </header>
      <aside className="portal-notice">Guia com empresas independentes. Cada contato tem seu próprio atendimento. <a href="/#empresas">Conheça os contatos</a>.</aside>
    </>
  );
}
