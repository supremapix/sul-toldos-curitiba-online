import type { ReactNode } from "react";
import Header from "./Header";
import ProjectDecision from "./ProjectDecision";
import Footer from "./Footer";
import FloatingButtons from "./FloatingButtons";

export default function SiteLayout({ children, className = "", mainClassName = "" }: {
  children: ReactNode;
  className?: string;
  mainClassName?: string;
}) {
  return (
    <div className={`min-h-screen bg-background ${className}`}>
      <Header />
      <main id="main-content" tabIndex={-1} className={mainClassName}>{children}<ProjectDecision /></main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
