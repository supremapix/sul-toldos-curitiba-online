import { Link } from "react-router-dom";
import { BookOpen, LayoutGrid } from "lucide-react";
import histories from "@/data/sulLocalHistories.json";

type Entry = {
  slug: string;
  name: string;
  historyTitle?: string;
  benefitTitle?: string;
  history: string;
  benefit: string;
  sourceUrl: string;
  sourceLabel: string;
};

const entries = {
  bairro: new Map((histories.bairros as Entry[]).map((entry) => [entry.slug, entry])),
  cidade: new Map((histories.cidades as Entry[]).map((entry) => [entry.slug, entry])),
};

export const getLocalPlaceName = (scope: "bairro" | "cidade", slug: string) => entries[scope].get(slug)?.name;

export default function LocalHistoryGuide({ scope, slug, name }: { scope: "bairro" | "cidade"; slug: string; name: string }) {
  const entry = entries[scope].get(slug);
  if (!entry) return null;

  return (
    <section id="historia-local" aria-labelledby="historia-local-titulo" className="scroll-mt-24 border-y border-[#ddd5c7] bg-[#f4efe6] px-5 py-12 text-[#1c1f22] sm:px-8 sm:py-20">
      <div className="mx-auto max-w-[1200px]">
        <p className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#8c3020]">
          <BookOpen aria-hidden="true" className="h-4 w-4 shrink-0" />
          História local e aplicações
        </p>
        <h2 id="historia-local-titulo" className="mb-6 font-serif text-3xl leading-tight tracking-tight sm:text-5xl">
          {name}: história e usos de toldos
        </h2>
        <div className="grid gap-4 md:grid-cols-2 md:gap-6">
          <div className="rounded-2xl border border-[#ddd5c7] bg-[#fffaf3] p-5 sm:p-7">
            <h3 className="mb-2 font-serif text-2xl">{entry.historyTitle ?? "Entenda o lugar"}</h3>
            <p className="leading-relaxed">{entry.history}</p>
            <a href={entry.sourceUrl} className="mt-4 inline-block text-sm font-semibold text-[#8c3020] underline decoration-[#c6a592] underline-offset-4">
              {entry.sourceLabel}
            </a>
          </div>
          <div className="rounded-2xl border border-[#ddd5c7] bg-[#fffaf3] p-5 sm:p-7">
            <h3 className="mb-2 font-serif text-2xl">{entry.benefitTitle ?? "Onde um toldo ou uma cobertura ajuda"}</h3>
            <p className="leading-relaxed">{entry.benefit}</p>
          </div>
        </div>
        <Link to="/atendimento-em-quadrinhos" className="mt-6 inline-flex min-h-11 items-center gap-2 font-semibold text-[#8c3020] underline underline-offset-4">
          <LayoutGrid aria-hidden="true" className="h-5 w-5 shrink-0" />
          Veja como planejar seu pedido, em quadrinhos
        </Link>
      </div>
    </section>
  );
}
