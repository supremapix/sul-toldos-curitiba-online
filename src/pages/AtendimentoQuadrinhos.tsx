import EnhancedSEO from '@/components/EnhancedSEO';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './AtendimentoQuadrinhos.css';

export const quadrinhosPath = '/atendimento-em-quadrinhos';
const host = 'https://www.sultoldos.app.br';
const imageRoot = '/quadrinhos-toldos';
const title = 'Do orçamento à instalação do toldo, em quadrinhos';
const description = 'Veja em quatro cenas como preparar um orçamento de toldo em Curitiba: fotos e medidas aproximadas, visita, proposta e instalação.';
const scenes = [
  {
    id: '01', title: 'Mande as fotos e conte o que incomoda',
    alt: 'Comerciante fotografa a entrada da sua loja com o celular.',
    client: 'O sol da tarde bate direto na vitrine. O que mando para vocês?',
    guide: 'Fotografe a fachada inteira e a área de lado. Diga seu bairro, a largura aproximada e até onde quer a sombra.',
    tip: 'Mencione letreiros, portas e passagem de pedestres. Não suba para tirar medidas.',
  },
  {
    id: '02', title: 'Confira as medidas e o local',
    alt: 'Dois profissionais conferem a largura do vão na entrada da loja.',
    client: 'A medida que eu tirei por baixo já resolve?',
    guide: 'Ela ajuda no início. Confirme se haverá visita para verificar largura, projeção, altura e condições de fixação.',
    tip: 'Aponte obstáculos e avise sobre regras do condomínio ou do imóvel antes de combinar a visita.',
  },
  {
    id: '03', title: 'Compare o modelo e leia a proposta',
    alt: 'Comerciante e consultor comparam amostras de lona e o desenho de um toldo.',
    client: 'Quero sombra, mas não quero cobrir a vitrine o dia todo.',
    guide: 'Compare um toldo retrátil com uma solução fixa. Peça uma proposta que descreva material, dimensões, instalação e o que fica de fora.',
    tip: 'Uma passagem exposta à chuva tem outras prioridades: converse também sobre inclinação e escoamento da água.',
  },
  {
    id: '04', title: 'Combine a instalação e confira o uso',
    alt: 'Comerciante observa a entrada da loja protegida pelo toldo instalado.',
    client: 'Como vou saber quando devo recolher o toldo?',
    guide: 'Peça uma demonstração de abertura e fechamento, orientações para vento e chuva e as instruções de limpeza do modelo.',
    tip: 'Se for comércio, combine o acesso e o período de trabalho para interferir o mínimo possível na entrada.',
  },
];

export default function AtendimentoQuadrinhos() {
  const canonical = host + quadrinhosPath;
  const ogImage = host + imageRoot + '/capa.jpg';
  const structuredData = {
    '@type': 'Article', headline: title, description, image: [ogImage],
    mainEntityOfPage: canonical, inLanguage: 'pt-BR',
    isPartOf: { '@id': host + '/#website' },
  };

  return <div className="min-h-screen bg-background">
    <EnhancedSEO title={title} description={description} canonical={canonical} ogImage={ogImage} structuredData={structuredData} />
    <Header />
    <main className="sul-hq" aria-labelledby="sul-hq-title">
      <header className="sul-hq-intro">
        <p className="sul-eyebrow">GUIA ILUSTRADO · CURITIBA E REGIÃO</p>
        <h1 id="sul-hq-title">{title}</h1>
        <p>Uma lojista quer proteger a vitrine do sol sem escurecer a loja o dia todo. Acompanhe o que ela manda no primeiro contato, o que é conferido no local e o que vale perguntar antes da instalação.</p>
        <p className="sul-hq-note">História fictícia. Ilustrações geradas por IA. As falas são exemplos de perguntas e orientações, não um compromisso de atendimento de nenhuma empresa.</p>
      </header>
      <ol className="sul-hq-scenes" aria-label="Quatro etapas do projeto">
        {scenes.map((scene) => <li key={scene.id}>
          <img src={imageRoot + '/' + scene.id + '.webp'} width="640" height="480" alt={scene.alt} loading={scene.id === '01' ? 'eager' : 'lazy'} decoding="async" />
          <div className="sul-hq-card">
            <p className="sul-hq-number">QUADRO {scene.id}</p>
            <h2>{scene.title}</h2>
            <p className="sul-hq-balloon"><strong>Cliente:</strong> {scene.client}</p>
            <p className="sul-hq-balloon"><strong>Orientação:</strong> {scene.guide}</p>
            <p><strong>Dica:</strong> {scene.tip}</p>
          </div>
        </li>)}
      </ol>
      <section className="sul-hq-next" aria-labelledby="sul-hq-next-title">
        <h2 id="sul-hq-next-title">Já tem as fotos? Escolha com quem conversar.</h2>
        <p>A Sul Toldos atende os serviços indicados no guia e na calculadora. A Tornimec atende separadamente os produtos e serviços identificados em seu nome. Confirme a medição, o orçamento e a instalação diretamente com a empresa escolhida.</p>
        <a className="sul-primary" href="/#empresas">Ver os contatos das empresas</a>
      </section>
    </main>
    <Footer />
  </div>;
}
