import { useState, useMemo } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import YouTubeVideo from "@/components/YouTubeVideo";
import { MessageCircle, Phone, Search, ChevronDown, ChevronUp, X } from "lucide-react";
import { openWhatsapp } from "@/utils/whatsapp";

const BLOCOS = [
  { id: "tipos", label: "Tipos de Toldos" },
  { id: "precos", label: "Preços e Orçamento" },
  { id: "instalacao", label: "Instalação" },
  { id: "manutencao", label: "Manutenção" },
  { id: "materiais", label: "Materiais e Tecnologia" },
  { id: "aplicacoes", label: "Aplicações e Locais" },
  { id: "regioes", label: "Regiões e Cidades" },
  { id: "conserto", label: "Conserto e Reforma" },
  { id: "legislacao", label: "Legislação e Normas" },
  { id: "serralheria", label: "Serralheria e Extras" },
];

interface FaqItem {
  q: string;
  a: string;
  bloco: string;
}

const FAQ_DATA: FaqItem[] = [
  // BLOCO 1: TIPOS DE TOLDOS (20)
  { bloco: "tipos", q: "Qual a diferença entre toldo retrátil e fixo?", a: "O toldo retrátil possui braços articulados que permitem abrir e fechar conforme necessidade, ideal para quem quer flexibilidade. O toldo fixo é instalado permanentemente, mais resistente para locais que exigem proteção constante. Ambos disponíveis na Sul Toldos em Curitiba." },
  { bloco: "tipos", q: "O que é toldo em lona acrílica?", a: "Lona acrílica é um tecido tratado com resina acrílica que oferece resistência ao sol, chuva e mofo. É o material mais usado em toldos residenciais e comerciais pela durabilidade, variedade de cores e facilidade de limpeza." },
  { bloco: "tipos", q: "Qual a diferença entre lona PVC e lona acrílica?", a: "A lona PVC é mais espessa, impermeável e resistente a rasgos, ideal para uso industrial e cobertura de cargas. A lona acrílica é mais leve, respirável e estética, ideal para toldos de varanda, fachada e uso residencial." },
  { bloco: "tipos", q: "O que é toldo de policarbonato?", a: "Toldo de policarbonato é uma cobertura rígida feita com chapas de policarbonato — material plástico de alta resistência que permite a passagem de luz, bloqueia UV e suporta impactos. Ideal para garagens, varandas e áreas gourmet." },
  { bloco: "tipos", q: "Qual a diferença entre policarbonato compacto e alveolar?", a: "O policarbonato compacto é sólido, mais resistente e com melhor aparência. O alveolar tem camadas com alvéolos de ar que proporcionam maior isolamento térmico e menor peso. Ambos bloqueiam os raios UV e são excelentes para coberturas." },
  { bloco: "tipos", q: "O que é toldo cortina?", a: "Toldo cortina ou cortina de enrolar é uma lona vertical que fecha lateralmente áreas externas. Protege contra vento, chuva e sol e pode ser operada manualmente ou com motor. Muito usada em varandas, restaurantes e áreas de lazer." },
  { bloco: "tipos", q: "O que é toldo articulado?", a: "Toldo articulado é o mesmo que toldo retrátil — possui braços metálicos articulados que permitem estender e recolher o toldo conforme necessidade. Design moderno e praticidade para uso diário." },
  { bloco: "tipos", q: "O que é sombreador?", a: "Sombreador é uma estrutura em tecido resistente e impermeável tensionado sobre uma armação metálica. Oferece sombra e proteção solar para áreas externas como jardins, parquinhos, piscinas e decks." },
  { bloco: "tipos", q: "Qual tipo de toldo é melhor para garagem?", a: "Para garagem o mais recomendado é a cobertura em policarbonato com estrutura galvanizada pela durabilidade e resistência. Toldos em lona também são opção mais econômica. Depende do espaço e do orçamento. Fazemos medição gratuita para indicar a melhor solução." },
  { bloco: "tipos", q: "Qual é o melhor toldo para varanda?", a: "Para varanda o toldo retrátil é ideal pela flexibilidade — abre quando quiser sol e fecha na chuva. Para varandas de apartamento cortinas de enrolar laterais são excelentes. Fazemos projeto sob medida para cada tipo de varanda." },
  { bloco: "tipos", q: "Qual toldo usar em sacada de apartamento?", a: "Em sacadas de apartamento os mais usados são toldos retráteis compactos, cortinas de enrolar e toldos em lona fixos. É necessário verificar com o condomínio as restrições de cor e modelo antes da instalação." },
  { bloco: "tipos", q: "O que é toldo para fachada comercial?", a: "Toldo de fachada comercial é instalado na frente de lojas, restaurantes e comércios para proteger a entrada, criar identidade visual e atrair clientes. Pode ser personalizado com logo e cores da marca." },
  { bloco: "tipos", q: "O que é cobertura metálica?", a: "Cobertura metálica é uma estrutura rígida em alumínio ou aço galvanizado com telhas metálicas ou termoacústicas. Ideal para garagens, galpões e áreas comerciais que exigem maior resistência." },
  { bloco: "tipos", q: "O que é toldo automático?", a: "Toldo automático ou motorizado é equipado com motor elétrico que permite abrir e fechar com controle remoto ou aplicativo. Mais conforto e praticidade, especialmente para toldos de grande porte." },
  { bloco: "tipos", q: "O que é cobertura termoacústica?", a: "Cobertura termoacústica usa telhas com isolamento térmico e acústico — reduz o calor interno e o barulho da chuva. Ideal para galpões industriais, comércios e áreas de lazer." },
  { bloco: "tipos", q: "O que é toldo australiano?", a: "Toldo australiano tem estrutura em alumínio com lona que pode ser inclinada em vários ângulos. É robusto, resistente ao vento e ideal para fachadas comerciais e entradas de edifícios." },
  { bloco: "tipos", q: "O que é toldo para piscina?", a: "Toldo para piscina é uma cobertura que pode ser fixa ou retrátil instalada sobre a piscina ou na área ao redor. Reduz evaporação, protege contra detritos e cria um ambiente mais agradável para uso durante o ano todo." },
  { bloco: "tipos", q: "O que é pergolado com telhado?", a: "Pergolado é uma estrutura de madeira ou alumínio com cobertura parcial ou total em lona, policarbonato ou ripas. Cria área de estar externa com estética premium. Sul Toldos faz pergolados sob medida em Curitiba." },
  { bloco: "tipos", q: "O que é toldo para deck?", a: "Toldo para deck é uma cobertura instalada sobre área de deck externo para proteger da chuva e sol. Pode ser retrátil, fixo ou em policarbonato conforme o projeto." },
  { bloco: "tipos", q: "O que é abrigo para carro?", a: "Abrigo para carro é uma estrutura metálica com cobertura instalada para proteger veículos de sol, chuva e granizo. Pode ser fixo na parede ou independente com colunas próprias." },

  // BLOCO 2: PREÇOS E ORÇAMENTO (15)
  { bloco: "precos", q: "Quanto custa um toldo em Curitiba?", a: "O preço de toldos em Curitiba varia conforme tipo, material, tamanho e complexidade. Toldos em lona simples podem começar em valores mais acessíveis, enquanto coberturas em policarbonato e toldos retráteis têm investimento maior. Na Sul Toldos o orçamento é gratuito — solicite sua visita." },
  { bloco: "precos", q: "O orçamento é gratuito?", a: "Sim! O orçamento da Sul Toldos é 100% gratuito e sem compromisso. Agendamos uma visita técnica sem custo para medir o espaço, avaliar as opções e entregar proposta detalhada." },
  { bloco: "precos", q: "Quanto custa toldo de policarbonato?", a: "O preço do toldo de policarbonato varia conforme a área, espessura do material e estrutura metálica necessária. Solicite orçamento gratuito e receba o valor exato para o seu espaço." },
  { bloco: "precos", q: "Quanto custa toldo retrátil?", a: "Toldo retrátil tem preço variável conforme a largura, projeção e qualidade do mecanismo. A Sul Toldos trabalha com diferentes faixas de preço para atender todos os perfis. Solicite orçamento." },
  { bloco: "precos", q: "Quanto custa conserto de toldo?", a: "O conserto de toldo tem preço conforme o tipo de reparo — troca de lona, reparo de estrutura ou mecanismo. Fazemos avaliação gratuita e orçamento detalhado antes de qualquer serviço." },
  { bloco: "precos", q: "Parcelam a instalação de toldos?", a: "Sim! A Sul Toldos oferece opções de parcelamento. Consulte as condições disponíveis no momento do orçamento pelo WhatsApp ou telefone." },
  { bloco: "precos", q: "Aceitam PIX?", a: "Sim! Aceitamos PIX, cartão de crédito, cartão de débito e dinheiro. Consulte as condições no momento do orçamento." },
  { bloco: "precos", q: "Tem desconto para instalação de vários toldos?", a: "Sim! Para projetos maiores ou instalação de múltiplos toldos oferecemos condições especiais. Fale com nossa equipe para negociar o melhor preço." },
  { bloco: "precos", q: "Vale a pena instalar toldo ou comprar guarda-sol?", a: "Toldo é muito superior ao guarda-sol em durabilidade, proteção e estética. O investimento inicial é maior mas o custo-benefício a longo prazo é muito melhor. Toldos duram de 5 a 15 anos dependendo do material." },
  { bloco: "precos", q: "Quanto custa lona de reposição?", a: "O preço da lona de reposição varia conforme o tipo de material, cor e metragem. Solicite orçamento informando o modelo do toldo e as medidas." },
  { bloco: "precos", q: "O preço inclui a instalação?", a: "Sim! Nosso orçamento sempre inclui fabricação, materiais e instalação completa com mão de obra especializada. Não há custos ocultos." },
  { bloco: "precos", q: "Cobram a visita técnica?", a: "Não! A visita técnica para medição e orçamento é totalmente gratuita e sem compromisso de contratação." },
  { bloco: "precos", q: "Quanto tempo leva para entregar o toldo?", a: "O prazo de entrega varia conforme o tipo e complexidade do projeto. Em média de 7 a 15 dias úteis após a aprovação do orçamento e pagamento do sinal. Informamos o prazo exato no orçamento." },
  { bloco: "precos", q: "Fazem projeto antes de instalar?", a: "Sim! Para cada projeto realizamos medição técnica no local, elaboramos proposta com especificações de material, cores, dimensões e prazo antes de iniciar qualquer instalação." },
  { bloco: "precos", q: "Tem garantia nos serviços?", a: "Sim! Todos os serviços da Sul Toldos têm garantia documentada em peças e mão de obra. Consulte os detalhes no momento do orçamento." },

  // BLOCO 3: INSTALAÇÃO (15)
  { bloco: "instalacao", q: "Como funciona a instalação de toldo?", a: "O processo de instalação começa com a visita técnica gratuita, orçamento detalhado, aprovação do cliente, fabricação sob medida e instalação por equipe especializada com limpeza total do ambiente ao final." },
  { bloco: "instalacao", q: "Quanto tempo demora a instalação?", a: "A instalação de um toldo simples pode ser feita em algumas horas. Coberturas maiores ou mais complexas podem levar 1 a 2 dias. Informamos o prazo exato no orçamento." },
  { bloco: "instalacao", q: "A instalação inclui limpeza do local?", a: "Sim! Nossa equipe realiza a limpeza completa do local ao final de cada instalação, retirando todos os resíduos e materiais excedentes." },
  { bloco: "instalacao", q: "A instalação danifica a parede?", a: "A instalação profissional é feita com fixação adequada ao tipo de parede. Para paredes de alvenaria, estrutura metálica ou concreto temos o método correto para cada caso sem danos desnecessários." },
  { bloco: "instalacao", q: "Pode instalar toldo em apartamento?", a: "Sim! Instalamos toldos em apartamentos com aprovação do condomínio. Trabalhamos dentro das normas e restrições de cada edifício para garantir instalação segura e aprovada." },
  { bloco: "instalacao", q: "Preciso de alvará para instalar toldo?", a: "Para residências particulares geralmente não é necessário. Para comércios ou toldos em fachadas de edifícios pode ser necessário verificar com a prefeitura local. Nossa equipe orienta sobre cada caso." },
  { bloco: "instalacao", q: "Conseguem instalar em lugares de difícil acesso?", a: "Sim! Nossa equipe é equipada para instalações em alturas, locais de acesso restrito e estruturas complexas com equipamentos de segurança adequados." },
  { bloco: "instalacao", q: "Fazem instalação nos finais de semana?", a: "Consulte disponibilidade. Em muitos casos conseguimos agendar instalações aos sábados. Entre em contato para verificar agenda disponível." },
  { bloco: "instalacao", q: "Atendem condomínio e empresa?", a: "Sim! Atendemos residências, condomínios, empresas, comércios, indústrias, hospitais e qualquer tipo de estabelecimento em Curitiba e região metropolitana." },
  { bloco: "instalacao", q: "Qual a largura máxima de um toldo?", a: "Toldos retráteis de um só pano geralmente vão até 6 metros de largura. Para larguras maiores fabricamos em módulos ou com estrutura especial. Avaliamos cada caso na visita técnica." },
  { bloco: "instalacao", q: "Qual a projeção máxima de um toldo retrátil?", a: "A projeção máxima de toldos retráteis varia conforme o modelo, mas geralmente vai de 1,5 a 4 metros. Para projeções maiores indicamos cobertura fixa com estrutura adequada." },
  { bloco: "instalacao", q: "Toldo suporta granizo em Curitiba?", a: "Lonas de qualidade e policarbonato de espessura adequada suportam granizos moderados comuns em Curitiba. Para regiões com granizo forte recomendamos policarbonato mais espesso ou estrutura retrátil para recolher nos temporais." },
  { bloco: "instalacao", q: "Posso escolher a cor do toldo?", a: "Sim! Trabalhamos com ampla variedade de cores e estampas em lona acrílica e PVC. Para policarbonato há opções em transparente, opal, bronze e verde. Mostramos amostras no momento da visita." },
  { bloco: "instalacao", q: "A instalação é feita por equipe própria?", a: "Sim! Toda instalação é feita por equipe técnica própria da Sul Toldos — sem terceirização. Isso garante padrão de qualidade e responsabilidade total pelo serviço." },
  { bloco: "instalacao", q: "Entregam nota fiscal?", a: "Sim! Emitimos nota fiscal para todos os serviços prestados. Solicite no momento da contratação." },

  // BLOCO 4: MANUTENÇÃO (15)
  { bloco: "manutencao", q: "Com que frequência devo limpar o toldo?", a: "Recomenda-se limpeza do toldo a cada 3 a 6 meses para remover poeira, fungos e detritos que degradam o material. Em Curitiba a chuva frequente pode acelerar o acúmulo de sujeira." },
  { bloco: "manutencao", q: "Como limpar lona de toldo?", a: "Limpe com escova macia, água e detergente neutro. Evite produtos abrasivos, cloro e solventes que danificam o tecido. Enxágue bem e deixe secar ao natural." },
  { bloco: "manutencao", q: "Como limpar toldo de policarbonato?", a: "Use água e sabão neutro com pano macio ou esponja. Evite esponjas abrasivas, álcool e produtos químicos fortes que riscam e opacificam o policarbonato." },
  { bloco: "manutencao", q: "Toldo mofou — o que fazer?", a: "Mofo em lona deve ser tratado com solução de água e vinagre ou produto específico para lona. Se o mofo estiver muito acentuado pode ser necessário substituir a lona. Entre em contato para avaliarmos." },
  { bloco: "manutencao", q: "Com que frequência devo fazer manutenção preventiva?", a: "Recomenda-se manutenção preventiva anual ou a cada 2 anos para verificar estrutura, mecanismos, fixações e estado da lona. Isso aumenta muito a vida útil do toldo." },
  { bloco: "manutencao", q: "O que inclui a manutenção de toldo?", a: "Nossa manutenção inclui inspeção da estrutura, limpeza dos trilhos e mecanismos, lubrificação das partes móveis, verificação das fixações e avaliação do estado da lona." },
  { bloco: "manutencao", q: "Quando devo trocar a lona do toldo?", a: "A lona deve ser trocada quando apresentar rasgos, desbotamento acentuado, perda de impermeabilidade ou mofo profundo que não sai com limpeza. Com manutenção adequada dura de 5 a 10 anos." },
  { bloco: "manutencao", q: "Toldo rasgou — tem conserto?", a: "Sim! Realizamos reparo de lonas com remendos técnicos para rasgos menores. Para danos maiores fazemos orçamento para substituição completa da lona mantendo a estrutura existente." },
  { bloco: "manutencao", q: "A estrutura do toldo enferrujou — tem conserto?", a: "Sim! Realizamos lixamento, tratamento anticorrosivo e pintura de estruturas metálicas. Em casos de corrosão severa pode ser necessário substituir as peças danificadas." },
  { bloco: "manutencao", q: "Mecanismo do toldo retrátil travou — o que fazer?", a: "Não force o mecanismo. Entre em contato com a Sul Toldos para avaliação técnica. Geralmente é problema de lubrificação ou peça danificada com reparo simples." },
  { bloco: "manutencao", q: "O toldo está fazendo barulho — o que pode ser?", a: "Barulho em toldo geralmente indica estrutura solta, parafusos frouxos ou mecanismo sem lubrificação. Verifique as fixações e se persistir solicite visita técnica gratuita." },
  { bloco: "manutencao", q: "Como proteger toldo no inverno em Curitiba?", a: "Recolha o toldo retrátil em dias de temporal e granizo. Para toldos fixos verifique as fixações antes do inverno. Limpe a lona após chuvas fortes para evitar acúmulo de água e fungos." },
  { bloco: "manutencao", q: "Qual a vida útil de um toldo em lona?", a: "Com manutenção adequada lonas acrílicas duram de 5 a 10 anos. Lonas PVC podem durar ainda mais. A vida útil depende muito da exposição ao sol, qualidade do material e frequência de manutenção." },
  { bloco: "manutencao", q: "Qual a vida útil de toldo de policarbonato?", a: "Coberturas em policarbonato de qualidade duram de 10 a 20 anos. O material é muito resistente a impactos e UV quando instalado com estrutura adequada e com manutenção básica." },
  { bloco: "manutencao", q: "Posso pintar a estrutura do toldo?", a: "Sim! A estrutura metálica pode ser pintada com tinta específica para metal ou com pintura eletrostática. Realizamos esse serviço na Sul Toldos com acabamento profissional." },

  // BLOCO 5: MATERIAIS E TECNOLOGIA (15)
  { bloco: "materiais", q: "Qual é o melhor material para toldo em Curitiba?", a: "Para o clima de Curitiba — com sol forte, chuvas frequentes e frio no inverno — recomendamos lona acrílica de alta qualidade ou policarbonato compacto para maior durabilidade e proteção." },
  { bloco: "materiais", q: "Policarbonato bloqueia calor?", a: "Policarbonato comum transmite calor. Para bloqueio térmico recomendamos policarbonato alveolar com tratamento térmico especial que reduz significativamente a temperatura sob a cobertura." },
  { bloco: "materiais", q: "Lona acrílica é impermeável?", a: "Sim! Lona acrílica de qualidade é impermeável, resistente ao mofo e com tratamento anti-UV. Porém com o tempo pode perder a impermeabilização e precisar de reaplicação ou troca." },
  { bloco: "materiais", q: "O policarbonato amarela com o tempo?", a: "Policarbonato sem tratamento UV pode amarelar em 2 a 3 anos. Na Sul Toldos trabalhamos com policarbonato com proteção UV em ambas as faces que mantém a transparência por muito mais tempo." },
  { bloco: "materiais", q: "Qual espessura de policarbonato usar em toldo?", a: "Para toldos residenciais 4mm e 6mm são comuns. Para áreas maiores ou com risco de granizo recomendamos 8mm ou 10mm. Nossa equipe indica a espessura correta para cada projeto." },
  { bloco: "materiais", q: "A estrutura do toldo é galvanizada?", a: "Sim! Utilizamos alumínio e aço galvanizado nas estruturas para garantir resistência à corrosão no clima úmido e frio de Curitiba." },
  { bloco: "materiais", q: "Qual a diferença entre alumínio e ferro na estrutura do toldo?", a: "O alumínio é mais leve, não enferruja e tem maior durabilidade. O aço galvanizado é mais resistente para grandes vãos. Indicamos o material correto conforme o projeto e o orçamento do cliente." },
  { bloco: "materiais", q: "Tem toldo automático motorizado?", a: "Sim! Oferecemos toldos retráteis com motor elétrico que opera por controle remoto ou automação. Ideal para toldos de grandes dimensões ou locais de difícil acesso." },
  { bloco: "materiais", q: "A lona tem proteção UV?", a: "Sim! Todas as lonas que utilizamos têm tratamento anti-UV que protege contra a radiação solar e retarda o desbotamento e degradação do material." },
  { bloco: "materiais", q: "Tem opção de lona transparente?", a: "Sim! Temos lonas em PVC transparente ideal para fechamentos laterais que precisam manter a visibilidade e a entrada de luz natural." },
  { bloco: "materiais", q: "As cores das lonas desbotam?", a: "Com o tempo é normal algum desbotamento pela exposição ao sol. Lonas acrílicas de qualidade resistem melhor ao desbotamento que lonas mais baratas. A manutenção e limpeza regular ajudam a preservar as cores." },
  { bloco: "materiais", q: "Qual é a melhor marca de lona para toldo?", a: "Trabalhamos com fornecedores certificados e lonas de primeira linha para garantir a qualidade e durabilidade dos nossos produtos. Consulte nossa equipe sobre as opções disponíveis." },
  { bloco: "materiais", q: "Toldo de alumínio vale a pena?", a: "Sim! Estruturas em alumínio são leves, resistentes à ferrugem e com excelente durabilidade. São ideais para Curitiba pelo clima úmido que acelera a corrosão em estruturas de aço sem tratamento." },
  { bloco: "materiais", q: "Tem toldo com blackout?", a: "Sim! Temos opções de lona em PVC com efeito blackout para quem precisa de privacidade total e bloqueio de luz. Muito usado em cortinas de varanda e fechamentos de quarto." },
  { bloco: "materiais", q: "Qual a espessura ideal de lona?", a: "Para toldos residenciais recomendamos lonas entre 400g/m² e 600g/m². Para uso comercial e industrial 600g/m² a 900g/m² para maior resistência." },

  // BLOCO 6: APLICAÇÕES E LOCAIS (20)
  { bloco: "aplicacoes", q: "Qual toldo usar para varanda gourmet?", a: "Para varanda gourmet recomendamos toldos retráteis ou coberturas em policarbonato que protegem da chuva e do sol mantendo a ventilação. A Sul Toldos faz avaliação técnica gratuita para indicar a melhor solução." },
  { bloco: "aplicacoes", q: "Que toldo indicam para churrasqueira?", a: "Para áreas de churrasqueira indicamos coberturas em policarbonato ou lona com tratamento antichamas. A Sul Toldos faz avaliação técnica gratuita no local." },
  { bloco: "aplicacoes", q: "Qual cobertura usar para área de piscina?", a: "Para piscinas recomendamos coberturas em policarbonato que permitem luz natural e protegem contra detritos. Toldos retráteis também são excelentes para uso flexível." },
  { bloco: "aplicacoes", q: "Que tipo de toldo usar na fachada de loja?", a: "Para fachadas comerciais indicamos toldos fixos ou retráteis com personalização de logo e cores da marca. Aumenta a visibilidade e protege clientes na entrada." },
  { bloco: "aplicacoes", q: "Qual toldo usar para jardim?", a: "Para jardins indicamos sombreadores tensionados ou pergolados com cobertura em lona. Criam sombra agradável sem bloquear totalmente a luz natural." },
  { bloco: "aplicacoes", q: "Que tipo de cobertura usar para estacionamento?", a: "Para estacionamentos recomendamos coberturas metálicas com policarbonato ou lona industrial. Estrutura galvanizada para maior durabilidade e resistência." },
  { bloco: "aplicacoes", q: "Toldo para quiosque — qual indicam?", a: "Para quiosques indicamos toldos fixos em lona ou sombreadores. A Sul Toldos faz avaliação técnica gratuita para indicar o melhor tipo para cada espaço." },
  { bloco: "aplicacoes", q: "Qual cobertura usar em academia ao ar livre?", a: "Para academias ao ar livre recomendamos coberturas em policarbonato ou sombreadores tensionados que protegem do sol e chuva sem impedir a ventilação." },
  { bloco: "aplicacoes", q: "Que tipo de toldo usar em restaurante?", a: "Para restaurantes indicamos toldos retráteis, cortinas de enrolar e coberturas em policarbonato. Personalização com logo e cores do estabelecimento." },
  { bloco: "aplicacoes", q: "Qual toldo usar em escola?", a: "Para escolas recomendamos coberturas em policarbonato para pátios e sombreadores para playgrounds. Segurança e proteção para as crianças." },
  { bloco: "aplicacoes", q: "Cobertura para área de serviço — o que indicam?", a: "Para áreas de serviço indicamos coberturas em policarbonato ou toldos fixos em lona. Proteção contra chuva com passagem de luz natural." },
  { bloco: "aplicacoes", q: "Toldo para corredor externo — qual escolher?", a: "Para corredores externos recomendamos coberturas em policarbonato ou toldos fixos. Protegem a passagem contra sol e chuva com estética moderna." },
  { bloco: "aplicacoes", q: "Que cobertura usar em condomínio?", a: "Para condomínios atendemos com coberturas para garagens, áreas de lazer, playgrounds e halls. Seguimos normas de cada condomínio para cor e modelo." },
  { bloco: "aplicacoes", q: "Toldo para hospital — o que recomendam?", a: "Para hospitais recomendamos coberturas em policarbonato para entradas e estacionamentos. Material de fácil limpeza e alta durabilidade." },
  { bloco: "aplicacoes", q: "Qual toldo usar em posto de gasolina?", a: "Para postos de gasolina indicamos coberturas metálicas com estrutura reforçada. A Sul Toldos faz projeto sob medida para grandes áreas." },
  { bloco: "aplicacoes", q: "Que cobertura usar em galpão?", a: "Para galpões recomendamos coberturas metálicas termoacústicas. Reduzem calor e barulho da chuva com alta resistência estrutural." },
  { bloco: "aplicacoes", q: "Toldo para pet shop — qual indicam?", a: "Para pet shops indicamos toldos de fachada personalizados com logo. Proteção para clientes na entrada e identidade visual atrativa." },
  { bloco: "aplicacoes", q: "Que tipo de toldo usar em padaria?", a: "Para padarias recomendamos toldos de fachada em lona acrílica com personalização. Atraem clientes e protegem a vitrine do sol." },
  { bloco: "aplicacoes", q: "Qual cobertura usar em salão de beleza?", a: "Para salões de beleza indicamos toldos de fachada elegantes e cortinas laterais. Visual moderno que atrai clientes e protege a entrada." },
  { bloco: "aplicacoes", q: "Toldo para loja de roupas — o que recomendam?", a: "Para lojas de roupas recomendamos toldos de fachada personalizados que protegem a vitrine do sol, evitam desbotamento dos produtos e criam identidade visual marcante." },

  // BLOCO 7: REGIÕES E CIDADES (15)
  { bloco: "regioes", q: "A Sul Toldos atende Colombo?", a: "Sim! Atendemos Colombo com fabricação, instalação e conserto de toldos. Nossa equipe se desloca até Colombo para visita técnica gratuita." },
  { bloco: "regioes", q: "Atendem São José dos Pinhais?", a: "Sim! Atendemos São José dos Pinhais com todos os nossos serviços de toldos e coberturas. Orçamento gratuito com visita no local." },
  { bloco: "regioes", q: "Atendem Araucária?", a: "Sim! Araucária faz parte da nossa área de cobertura na região metropolitana de Curitiba. Fale com nossa equipe." },
  { bloco: "regioes", q: "Atendem Fazenda Rio Grande?", a: "Sim! Atendemos Fazenda Rio Grande. Orçamento e visita técnica gratuita. Ligue ou mande WhatsApp." },
  { bloco: "regioes", q: "Atendem Pinhais?", a: "Sim! Atendemos Pinhais com todos os serviços. Orçamento e visita gratuita. Ligue ou mande WhatsApp." },
  { bloco: "regioes", q: "Atendem Campo Largo?", a: "Sim! Atendemos Campo Largo. Orçamento e visita gratuita. Ligue ou mande WhatsApp." },
  { bloco: "regioes", q: "Atendem Almirante Tamandaré?", a: "Sim! Atendemos Almirante Tamandaré. Orçamento e visita gratuita. Ligue ou mande WhatsApp." },
  { bloco: "regioes", q: "Atendem Quatro Barras?", a: "Sim! Atendemos Quatro Barras. Orçamento e visita gratuita. Ligue ou mande WhatsApp." },
  { bloco: "regioes", q: "Atendem Piraquara?", a: "Sim! Atendemos Piraquara. Orçamento e visita gratuita. Ligue ou mande WhatsApp." },
  { bloco: "regioes", q: "Atendem Campina Grande do Sul?", a: "Sim! Atendemos Campina Grande do Sul. Orçamento e visita gratuita. Ligue ou mande WhatsApp." },
  { bloco: "regioes", q: "Atendem bairros de Curitiba?", a: "Sim! Atendemos todos os bairros de Curitiba — Água Verde, Batel, Centro, Portão, Cajuru, Boqueirão, Santa Felicidade e mais de 70 bairros." },
  { bloco: "regioes", q: "Quanto cobram pelo deslocamento?", a: "Não cobramos pelo deslocamento para orçamento em Curitiba e região metropolitana. A visita técnica e medição são gratuitas." },
  { bloco: "regioes", q: "Atendem fora da região metropolitana?", a: "Consulte disponibilidade para cidades fora da RMC. Em alguns casos atendemos mediante avaliação de viabilidade. Entre em contato." },
  { bloco: "regioes", q: "Fazem instalação em Curitiba no mesmo dia?", a: "Para casos urgentes consulte disponibilidade. O prazo padrão inclui fabricação e agendamento, mas priorizamos quando possível." },
  { bloco: "regioes", q: "Qual o bairro onde fica a Sul Toldos?", a: "A Sul Toldos está localizada em Curitiba, PR. Entre em contato para o endereço completo e agende uma visita ao nosso showroom." },

  // BLOCO 8: CONSERTO E REFORMA (15)
  { bloco: "conserto", q: "Consertam qualquer marca de toldo?", a: "Sim! A Sul Toldos faz conserto de toldos de qualquer marca e modelo em Curitiba e região. Orçamento gratuito e sem compromisso." },
  { bloco: "conserto", q: "Quanto custa trocar a lona do toldo?", a: "O preço da troca de lona depende do tamanho, tipo de material e modelo do toldo. Fazemos avaliação gratuita e orçamento detalhado." },
  { bloco: "conserto", q: "Reformam toldos antigos?", a: "Sim! Reformamos toldos antigos com substituição de lona, pintura de estrutura e troca de peças danificadas. Orçamento gratuito." },
  { bloco: "conserto", q: "Consertam toldo retrátil emperrado?", a: "Sim! Consertamos toldos retráteis com problemas de mecanismo, braços, molas e motores. Avaliação gratuita no local." },
  { bloco: "conserto", q: "Fazem manutenção de toldo motorizado?", a: "Sim! Fazemos manutenção e reparo de toldos motorizados incluindo motor, controle remoto e fiação elétrica." },
  { bloco: "conserto", q: "Trocam apenas a lona sem mexer na estrutura?", a: "Sim! Se a estrutura estiver em bom estado trocamos apenas a lona, economizando no custo total do serviço." },
  { bloco: "conserto", q: "Fazem conserto de toldo em condomínio?", a: "Sim! Atendemos condomínios para conserto individual ou em lote de toldos. Seguimos as normas de cada edifício." },
  { bloco: "conserto", q: "Consertam toldo de lona rasgada?", a: "Sim! Para rasgos pequenos fazemos remendo técnico. Para danos maiores substituímos a lona completa mantendo a estrutura." },
  { bloco: "conserto", q: "Reparam estrutura enferrujada de toldo?", a: "Sim! Fazemos lixamento, tratamento anticorrosivo e pintura. Em corrosão severa substituímos as peças danificadas." },
  { bloco: "conserto", q: "Fazem pintura de estrutura de toldo?", a: "Sim! Realizamos pintura de estruturas metálicas com tratamento anticorrosivo e acabamento profissional." },
  { bloco: "conserto", q: "Trocam rolamento de toldo retrátil?", a: "Sim! Substituímos rolamentos, molas, braços e qualquer peça do mecanismo retrátil com garantia." },
  { bloco: "conserto", q: "Consertam toldo de policarbonato quebrado?", a: "Sim! Substituímos chapas de policarbonato danificadas mantendo a estrutura existente. Orçamento gratuito." },
  { bloco: "conserto", q: "Fazem reparo de cortina de enrolar?", a: "Sim! Consertamos cortinas de enrolar com problemas de mecanismo, lona ou estrutura. Avaliação gratuita." },
  { bloco: "conserto", q: "Substituem apenas as partes danificadas?", a: "Sim! Sempre que possível substituímos apenas as peças com defeito, reduzindo o custo do conserto para o cliente." },
  { bloco: "conserto", q: "Fazem conserto de toldo com urgência?", a: "Sim! Para emergências como toldos caídos ou danificados por temporal, priorizamos o atendimento. Ligue para agendar." },

  // BLOCO 9: LEGISLAÇÃO E NORMAS (10)
  { bloco: "legislacao", q: "Preciso de permissão para instalar toldo?", a: "As exigências variam conforme o tipo de imóvel e município. Nossa equipe orienta sobre as normas locais de Curitiba e região no momento da visita técnica gratuita." },
  { bloco: "legislacao", q: "Condomínio pode proibir toldo?", a: "O condomínio pode regulamentar cor, modelo e tipo de toldo mas geralmente não pode proibir totalmente. Consulte a convenção do seu condomínio e nossa equipe orienta sobre as opções permitidas." },
  { bloco: "legislacao", q: "Que cor de toldo o condomínio geralmente permite?", a: "A maioria dos condomínios exige cores neutras ou padronizadas. Nossa equipe verifica as normas do seu condomínio antes de iniciar o projeto." },
  { bloco: "legislacao", q: "Toldo pode sair além do terreno?", a: "Geralmente o toldo não pode avançar sobre calçada ou área pública sem autorização. Nossa equipe orienta sobre as normas locais." },
  { bloco: "legislacao", q: "Prefeitura de Curitiba exige alvará para toldo?", a: "Depende do tipo e tamanho do toldo. Para residências geralmente não é necessário. Para comércios pode ser exigido. Orientamos cada caso." },
  { bloco: "legislacao", q: "Toldo em fachada comercial precisa de aprovação?", a: "Em muitos casos sim, especialmente em áreas com restrição urbanística. Nossa equipe orienta sobre os procedimentos necessários." },
  { bloco: "legislacao", q: "Tem norma ABNT para instalação de toldos?", a: "Existem normas técnicas que regulamentam a instalação de coberturas e estruturas metálicas. A Sul Toldos segue todas as normas de segurança aplicáveis." },
  { bloco: "legislacao", q: "O toldo precisa de AVCB?", a: "Para estabelecimentos comerciais o AVCB pode incluir requisitos sobre materiais de cobertura. Utilizamos materiais que atendem às normas de segurança contra incêndio." },
  { bloco: "legislacao", q: "Quem é responsável pela instalação segura?", a: "A empresa instaladora é responsável pela segurança da instalação. A Sul Toldos assume total responsabilidade técnica pelos serviços realizados." },
  { bloco: "legislacao", q: "Toldo precisa de laudo estrutural?", a: "Para toldos de grande porte ou em estruturas especiais pode ser necessário. Nossa equipe avalia cada caso e providencia quando exigido." },

  // BLOCO 10: SERRALHERIA E EXTRAS (15)
  { bloco: "serralheria", q: "A Sul Toldos faz serralheria?", a: "Sim! A Sul Toldos tem serviço de serralheria em Curitiba. Fabricamos estruturas metálicas, grades, portões e suportes com soldagem profissional." },
  { bloco: "serralheria", q: "Fazem grades e portões?", a: "Sim! Fabricamos grades e portões em aço e alumínio com acabamento profissional. Consulte orçamento pelo WhatsApp." },
  { bloco: "serralheria", q: "Fazem corrimão para escada?", a: "Sim! Fabricamos corrimãos em aço inox, alumínio e ferro com design moderno e seguro. Orçamento gratuito." },
  { bloco: "serralheria", q: "Fazem estrutura metálica para galpão?", a: "Sim! Fabricamos estruturas metálicas para galpões com soldagem profissional e acabamento galvanizado." },
  { bloco: "serralheria", q: "Fazem suporte metálico para toldo?", a: "Sim! Fabricamos suportes sob medida para qualquer tipo de toldo e cobertura." },
  { bloco: "serralheria", q: "Tem serviço de soldagem?", a: "Sim! Oferecemos serviço de soldagem MIG, TIG e eletrodo para estruturas metálicas diversas." },
  { bloco: "serralheria", q: "Fazem fechamento metálico de área?", a: "Sim! Fazemos fechamentos metálicos para áreas externas, garagens e espaços comerciais. Orçamento gratuito." },
  { bloco: "serralheria", q: "Fazem cobertura metálica para estacionamento?", a: "Sim! Fabricamos coberturas metálicas para estacionamentos com estrutura galvanizada de alta durabilidade." },
  { bloco: "serralheria", q: "Fazem abrigo para bicicleta?", a: "Sim! Fabricamos abrigos para bicicletas em estrutura metálica com cobertura em policarbonato ou lona." },
  { bloco: "serralheria", q: "Tem serviço de funilaria?", a: "Consulte disponibilidade. Nosso foco é em estruturas para toldos e coberturas, mas avaliamos projetos especiais." },
  { bloco: "serralheria", q: "Fazem pergolado de alumínio?", a: "Sim! Fabricamos pergolados em alumínio com design moderno e cobertura sob medida. Projeto personalizado." },
  { bloco: "serralheria", q: "Fazem guarda-corpo metálico?", a: "Sim! Fabricamos guarda-corpos em aço inox e alumínio para varandas, escadas e mezaninos com acabamento profissional." },
  { bloco: "serralheria", q: "Fazem escada metálica?", a: "Sim! Fabricamos escadas metálicas retas, caracol e marinheiro com soldagem profissional e acabamento de qualidade." },
  { bloco: "serralheria", q: "Tem serviço de pintura eletrostática?", a: "Sim! Oferecemos pintura eletrostática para estruturas metálicas com acabamento durável e resistente à corrosão." },
  { bloco: "serralheria", q: "Fazem estrutura para painel solar?", a: "Sim! Fabricamos estruturas metálicas para suporte de painéis solares em telhados e solo. Projeto sob medida." },
];

const FaqPage = () => {
  const [activeBloco, setActiveBloco] = useState<string>("todos");
  const [search, setSearch] = useState("");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filtered = useMemo(() => {
    let items = FAQ_DATA;
    if (activeBloco !== "todos") {
      items = items.filter(f => f.bloco === activeBloco);
    }
    if (search.trim()) {
      const s = search.toLowerCase();
      items = items.filter(f => f.q.toLowerCase().includes(s) || f.a.toLowerCase().includes(s));
    }
    return items;
  }, [activeBloco, search]);

  const handleWhatsApp = () => {
    openWhatsapp("Olá! Tenho uma dúvida sobre toldos. Podem me ajudar?");
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQ_DATA.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a }
    }))
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Início", "item": "https://sultoldos.app.br/" },
      { "@type": "ListItem", "position": 2, "name": "Perguntas Frequentes", "item": "https://sultoldos.app.br/faq" }
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Sul Toldos",
    "url": "https://sultoldos.app.br",
    "telephone": ["+554135646943", "+5541998121324"],
    "address": { "@type": "PostalAddress", "addressLocality": "Curitiba", "addressRegion": "PR", "addressCountry": "BR" },
    "geo": { "@type": "GeoCoordinates", "latitude": "-25.4284", "longitude": "-49.2733" },
    "areaServed": "Curitiba e Região Metropolitana",
    "priceRange": "$$",
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "150", "bestRating": "5" }
  };

  return (
    <>
      <Helmet>
        <title>Perguntas Frequentes sobre Toldos em Curitiba | 155 Respostas | Sul Toldos</title>
        <meta name="description" content="155 perguntas e respostas sobre toldos em Curitiba: preços, tipos, instalação, manutenção, materiais, conserto e regiões atendidas. Tudo sobre toldos em lona, policarbonato e retráteis. Orçamento grátis!" />
        <meta name="keywords" content="toldos em curitiba precos, fabrica de toldos em curitiba, toldos colombo, toldos residenciais, toldos e coberturas, conserto de toldos em curitiba, toldos policarbonato curitiba, toldos retrateis curitiba, perguntas frequentes toldos" />
        <link rel="canonical" href="https://sultoldos.app.br/faq" />
        <meta property="og:title" content="155 Perguntas sobre Toldos em Curitiba | Sul Toldos" />
        <meta property="og:description" content="Tudo sobre toldos: preços, tipos, instalação, manutenção e conserto em Curitiba e região. Orçamento grátis!" />
        <meta property="og:url" content="https://sultoldos.app.br/faq" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="pt_BR" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <meta name="geo.region" content="BR-PR" />
        <meta name="geo.placename" content="Curitiba" />
        <script type="application/ld+json">{JSON.stringify({ "@graph": [faqSchema, breadcrumbSchema, localBusinessSchema] })}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <FloatingButtons />

        {/* Hero */}
        <section className="py-16 md:py-24 bg-card border-b border-border">
          <div className="container mx-auto px-4 text-center">
            <nav className="mb-6 text-base text-muted-foreground">
              <a href="/" className="hover:text-primary transition-colors">Início</a>
              <span className="mx-2">/</span>
              <span className="text-primary font-semibold">Perguntas Frequentes</span>
            </nav>
            <h1 className="text-3xl md:text-5xl font-black text-foreground mb-4 leading-tight">
              Perguntas Frequentes sobre <span className="text-primary">Toldos em Curitiba</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              155 respostas sobre tipos de toldos, preços, instalação, manutenção, materiais, conserto e regiões atendidas pela Sul Toldos em Curitiba e região metropolitana.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleWhatsApp}
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-xl text-lg font-bold transition-all hover:scale-105"
              >
                <MessageCircle className="w-6 h-6" />
                Tire Sua Dúvida no WhatsApp
              </button>
              <a
                href="tel:4135646943"
                className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 rounded-xl text-lg font-bold transition-all"
              >
                <Phone className="w-6 h-6" />
                (41) 3564-6943
              </a>
            </div>
          </div>
        </section>

        {/* Search + Filters */}
        <section className="py-8 bg-background sticky top-20 z-40 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="relative max-w-xl mx-auto mb-6">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Buscar pergunta..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-card border border-border text-foreground text-lg placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
              <button
                onClick={() => setActiveBloco("todos")}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${activeBloco === "todos" ? "bg-primary text-primary-foreground" : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary"}`}
              >
                Todos ({FAQ_DATA.length})
              </button>
              {BLOCOS.map(b => {
                const count = FAQ_DATA.filter(f => f.bloco === b.id).length;
                return (
                  <button
                    key={b.id}
                    onClick={() => setActiveBloco(b.id)}
                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${activeBloco === b.id ? "bg-primary text-primary-foreground" : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary"}`}
                  >
                    {b.label} ({count})
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ List */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <p className="text-muted-foreground mb-8 text-center text-lg">
              {filtered.length} pergunta{filtered.length !== 1 ? "s" : ""} encontrada{filtered.length !== 1 ? "s" : ""}
            </p>
            <div className="space-y-3">
              {filtered.map((faq, idx) => {
                const globalIdx = FAQ_DATA.indexOf(faq);
                const isOpen = openIndex === globalIdx;
                return (
                  <div key={globalIdx} className="border border-border rounded-xl bg-card overflow-hidden transition-all hover:border-primary/50">
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : globalIdx)}
                      className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                    >
                      <h3 className="text-base md:text-lg font-semibold text-foreground pr-4">{faq.q}</h3>
                      {isOpen ? <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />}
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-5 border-t border-border pt-4 animate-fade-in">
                        <p className="text-base text-muted-foreground leading-relaxed mb-4">{faq.a}</p>
                        <button
                          onClick={handleWhatsApp}
                          className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-bold transition-all hover:scale-105"
                        >
                          <MessageCircle className="w-4 h-4" />
                          Tirar Dúvida no WhatsApp
                        </button>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Bottom */}
        <section className="py-16 bg-card border-t border-border">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-4xl font-black text-foreground mb-4">
              Não encontrou sua resposta?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Fale diretamente com nossa equipe. Respondemos em minutos pelo WhatsApp. Orçamento 100% gratuito e sem compromisso para toldos em Curitiba e região.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleWhatsApp}
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-5 rounded-xl text-xl font-bold transition-all hover:scale-105 shadow-lg"
              >
                <MessageCircle className="w-7 h-7" />
                SOLICITAR ORÇAMENTO GRÁTIS
              </button>
              <a
                href="tel:4135646943"
                className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-10 py-5 rounded-xl text-xl font-bold transition-all"
              >
                <Phone className="w-7 h-7" />
                LIGAR AGORA
              </a>
            </div>
          </div>
        </section>

        <YouTubeVideo 
          title="Veja a Sul Toldos em Ação"
          subtitle="Conheça como fabricamos e instalamos toldos com qualidade e garantia em Curitiba e região metropolitana"
          location="Curitiba"
        />

        <Footer />
      </div>
    </>
  );
};

export default FaqPage;
