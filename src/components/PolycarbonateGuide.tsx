
type Scope = "home" | "bairro" | "cidade" | "faq" | "mapa";

// These describe project scenarios, not claims about the building stock of a locality.
const uses = [
  ["Entrada de loja", "Se a marquise sombreia demais a vitrine, compare chapas com diferentes níveis de transparência. Planeje a borda de forma que a água não caia no acesso dos clientes."],
  ["Corredor lateral", "Em uma passagem estreita, verifique se a cobertura deixa espaço para janelas abrirem, se permite ventilação e por onde a chuva escoa sem molhar a divisa."],
  ["Garagem residencial", "Comece pelas medidas da vaga e pela altura do portão aberto. O desenho dos apoios precisa respeitar a manobra e permitir a saída da água longe do acesso."],
  ["Acesso de condomínio", "Veja onde começa o trajeto descoberto da portaria e confirme a aprovação do condomínio. Uma cobertura fixa precisa preservar iluminação, circulação e interfone."],
  ["Varanda e área de serviço", "Considere em quais horários o sol bate e quanto de claridade você quer manter. Em uma área de serviço, avalie também ventilação e facilidade de limpeza."],
  ["Passagem entre blocos", "Desenhe o percurso de pedestres: início, chegada, mudanças de direção e pontos de drenagem. A proteção superior não resolve, por si só, a chuva que entra pelas laterais."],
  ["Recepção de clínica ou escritório", "Posicione a área protegida entre a chegada e a porta, sem estreitar a rota de acesso. Compare o efeito da chapa na iluminação interna e na leitura da sinalização."],
  ["Área externa de restaurante", "Antes de definir a chapa, observe a incidência de sol nas mesas, o espaço de ventilação e o caminho da água. Uma cobertura translúcida não substitui uma solução de sombreamento."],
  ["Acesso de carga", "Informe a altura e a rota dos veículos, onde há manobras e as dimensões do trecho desprotegido. Essas informações ajudam a comparar um trecho translúcido com outras soluções de cobertura."],
  ["Pátio interno", "Se o pátio ilumina salas vizinhas, compare a claridade que permanece com diferentes chapas. Preveja ventilação e manutenção dos pontos de drenagem."],
  ["Reforma de cobertura antiga", "Em caso de trincas, goteiras ou chapas soltas, registre onde o problema aparece. A avaliação precisa separar desgaste do material, vedação e condições dos apoios."],
  ["Proteção de vitrine e fachada", "Defina se o objetivo é diminuir chuva direta, reduzir claridade excessiva ou proteger o acesso. Mostre onde ficam placas, iluminação e elementos que não podem ser ocultados."],
] as const;

const checks = [
  ["Chapa compacta ou alveolar?", "Compare o grau de transparência, as opções de cor e a ficha técnica do modelo. A escolha depende do vão, do uso e da estrutura, não só do aspecto da chapa."],
  ["Como evitar pingos no acesso?", "Inclinação, arremates, calha e destino da água devem ser analisados juntos. Informe onde a água cai hoje e se há uma saída existente para reaproveitar."],
  ["A estrutura existente pode ficar?", "Envie imagens dos apoios, das emendas e de eventuais sinais de corrosão. Só uma avaliação do conjunto pode confirmar se dá para reaproveitar ou adaptar a estrutura."],
  ["A cobertura deixa passar luz?", "Sim, em diferentes graus conforme o modelo. Se o local já é quente, compare opções de controle solar, ventilação e outras coberturas antes de escolher."],
  ["O que mandar para o orçamento?", "Junte fotos do local, largura e projeção aproximadas, altura disponível e CEP. Diga se é uma instalação nova ou substituição de uma cobertura existente."],
  ["Precisa prever dilatação?", "Sim. Chapas de policarbonato se expandem e contraem com a temperatura; a instalação precisa seguir a ficha do fabricante para fixação, folgas e acessórios."],
  ["O que influencia no custo?", "Além da área, compare espessura, estrutura, perfis, calhas, remoção de material antigo e dificuldade de acesso. Peça que a proposta informe o que está incluído."],
  ["Como planejar a manutenção?", "Pergunte como será o acesso seguro a calhas e pontos de vedação. Siga a orientação de limpeza do fabricante e não caminhe sobre chapas sem sistema projetado para isso."],
  ["Como avaliar a exposição à chuva?", "Identifique de que lado a chuva costuma entrar e onde se formam poças. Essa observação ajuda a separar o problema de escoamento do efeito da chuva lateral."],
  ["É igual a um toldo retrátil?", "Não. Uma cobertura fixa com chapas mantém o vão coberto; um toldo retrátil permite alternar entre sombra e área aberta. Escolha conforme o uso."],
  ["Como escolher a cor da chapa?", "Compare amostras sob iluminação semelhante à do local, considerando sombra, reflexo e a visibilidade desejada. Nem toda cor transmite a mesma quantidade de luz."],
  ["Precisa confirmar a face com proteção UV?", "Consulte a ficha e a identificação do fabricante. Se somente uma face tiver proteção, ela deve ser orientada para o lado indicado no manual."],
] as const;

const recommended: Record<string, number> = {
  curitiba: 0, pinhais: 8, "sao-jose-dos-pinhais": 8, colombo: 2, araucaria: 8,
  "fazenda-rio-grande": 2, "campo-largo": 4, "campo-magro": 5,
  "agua-verde": 6, centro: 11, batel: 7, portao: 2, cajuru: 1, tatuquara: 4,
  "campo-de-santana": 1, caximba: 9, "sitio-cercado": 0, cic: 8, "santa-felicidade": 7,
  augusta: 11, "cic-central": 5, pinheirinho: 3, carmo: 6,
  "sao-lourenco": 5, "jardim-social": 4,
};

const tailored = {
  home: {
    title: "Coberturas em policarbonato em Curitiba e região",
    intro: "Policarbonato é uma opção de cobertura fixa para quem quer proteger uma garagem, passagem ou entrada de comércio sem perder toda a luz natural. A transparência e o conforto do espaço dependem da chapa, da posição do sol e da ventilação.",
    cards: [
      ["Garagens, corredores e varandas", "Informe a largura e a projeção, a altura de portas e portões e onde a cobertura se apoia. Esses elementos ajudam a planejar a circulação e o caminho da água."],
      ["Fachadas, acessos e passarelas", "Considere onde as pessoas esperam, como entram e onde ficam placas e vitrines. Calha e inclinação ajudam a evitar que a água seja lançada no fluxo de pedestres."],
      ["Policarbonato compacto ou alveolar", "O compacto tem seção maciça; o alveolar possui canais internos. Compare a aparência, a passagem de luz e as especificações do fabricante antes de escolher para o seu vão."],
    ],
  },
  faq: {
    title: "Dúvidas sobre cobertura em policarbonato",
    intro: "A escolha depende do que você quer proteger, da quantidade de luz desejada e da estrutura que vai receber as chapas. Estas são boas perguntas para a avaliação técnica.",
    cards: [checks[2], checks[4], checks[5]],
  },
  mapa: {
    title: "Encontre a orientação de policarbonato da sua região",
    intro: "Use as páginas por cidade e bairro deste mapa para consultar aplicações em garagens, corredores, vitrines, condomínios e acessos de comércio. A disponibilidade do serviço deve ser confirmada pelo CEP.",
    cards: [
      ["Curitiba", "Na página de Curitiba, comece pelas orientações para entradas comerciais: transparência da chapa, drenagem e circulação dos clientes."],
      ["Bairros de Curitiba", "Procure o seu bairro acima. As páginas explicam como registrar fotos, medidas e interferências do imóvel antes da avaliação."],
      ["Cidades da região", "Selecione seu município e confira o que observar no local. Informe cidade, bairro e CEP ao pedir uma proposta."],
    ],
  },
} as const;

const serviceUrl = "https://wa.me/5541984877344?text=Ol%C3%A1%20vi%20no%20seu%20site%20feitos%20pela%20suprema%20o%20servi%C3%A7o%20Coberturas%20em%20policarbonato";

function getPolycarbonateLocation(slug: string, scope: "bairro" | "cidade") {
  let code = 0;
  for (const char of scope + slug) code = (Math.imul(code, 31) + char.charCodeAt(0)) >>> 0;
  const use = uses[recommended[slug] ?? (code % uses.length)];
  const check = checks[Math.floor(code / uses.length) % checks.length];
  const follow = checks[(Math.floor(code / 144) + 1 + checks.indexOf(check)) % checks.length];
  return { use, check, follow };
}

export default function PolycarbonateGuide({ scope, name, slug = "" }: { scope: Scope; name?: string; slug?: string }) {
  const isLocal = scope === "bairro" || scope === "cidade";
  const fixed = scope === "bairro" || scope === "cidade" ? null : tailored[scope];
  const place = name ? (scope === "bairro" ? `${name}, Curitiba` : name) : "";
  const scenario = isLocal ? getPolycarbonateLocation(slug, scope) : null;
  const data = fixed ?? {
    title: `Coberturas em policarbonato em ${place}`,
    intro: scope === "bairro"
      ? `Para um imóvel em ${place}, vale planejar a proteção contra chuva sem comprometer a claridade. Comece pelo uso do espaço e informe o CEP ao consultar instalação ou troca de chapas.`
      : `Quer avaliar uma cobertura translúcida em ${place}? Informe o bairro e o CEP e explique se quer proteger uma entrada, uma passagem ou outro espaço. A indicação depende do vão e da estrutura do imóvel.`,
    cards: scenario ? scenario.follow === scenario.check ? [scenario.use, scenario.check, checks[(checks.indexOf(scenario.check) + 1) % checks.length]] : [scenario.use, scenario.check, scenario.follow] : [],
  };

  return (
    <section id="coberturas-policarbonato" className="sul-guide sul-polycarbonate" aria-labelledby="titulo-policarbonato">
      <div>
        <p className="sul-eyebrow">COBERTURAS FIXAS TRANSLÚCIDAS</p>
        <h2 id="titulo-policarbonato">{data.title}</h2>
        <p className="sul-poly-intro">{data.intro}</p>
      </div>
      <div className="sul-guide-grid">
        {data.cards.map(([title, detail], i) => <article key={title}><span aria-hidden="true">0{i + 1}</span><h3>{title}</h3><p>{detail}</p></article>)}
      </div>
      {scope === "home" && (
        <div className="sul-poly-images">
          <figure><img src="/assets/policarbonato/referencia-cobertura-transparente.webp" alt="Cobertura transparente com perfis escuros sobre um corredor com parede de pedra" width="554" height="554" loading="lazy" decoding="async" /><figcaption>Referência visual de cobertura sobre passagem.</figcaption></figure>
          <figure><img src="/assets/policarbonato/referencia-cobertura-corredor.webp" alt="Cobertura translúcida com estrutura escura protegendo um corredor externo" width="447" height="447" loading="lazy" decoding="async" /><figcaption>Referência visual de cobertura lateral translúcida.</figcaption></figure>
        </div>
      )}
      <div className="sul-poly-actions">
        <a className="sul-primary" href={serviceUrl} target="_blank" rel="noopener noreferrer">Consultar cobertura de policarbonato no WhatsApp</a>
        {scope !== "home" && <a href="/#coberturas-policarbonato" className="sul-poly-guide-link">Ver o guia de policarbonato com imagens</a>}
      </div>
    </section>
  );
}
