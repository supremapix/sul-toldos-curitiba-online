import SiteLayout from "@/components/SiteLayout";

const NotFound = () => (
  <SiteLayout mainClassName="sul-inner-page">
    <section className="sul-inner-hero py-20 px-6 text-center">
      <p className="font-semibold tracking-widest mb-4" aria-hidden="true">404</p>
      <h1 className="text-4xl md:text-6xl mb-4">Página não encontrada</h1>
      <p className="text-base md:text-lg mb-8">O endereço pode ter mudado. Volte ao início ou encontre sua região no mapa do site.</p>
      <div className="flex flex-wrap gap-4 justify-center">
        <a href="/" className="sul-primary">Voltar para a página inicial</a>
        <a href="/mapa-do-site" className="sul-secondary px-3 underline">Ver cidades e bairros</a>
      </div>
    </section>
  </SiteLayout>
);

export default NotFound;
