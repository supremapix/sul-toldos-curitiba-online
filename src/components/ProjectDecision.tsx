const examples: Record<string,[string,string]>={
 garagem:['A vaga ainda permite abrir as portas?','Marque o percurso do portão e da manobra, não só o tamanho do carro. Informe onde é possível apoiar a cobertura sem bloquear passagem e para onde a água pode escoar.'],
 vidro:['Como equilibrar transparência e manutenção?','Observe quais ambientes dependem da entrada de luz e como a parte superior será acessada para limpeza. Peça que a proposta informe o vidro especificado para a cobertura, os apoios previstos e a condução da chuva.'],
 policarbonato:['Como manter a luz sem aumentar o incômodo do sol?','Fotografe a área em dois horários e explique se prefere transparência ou luz mais difusa. Na proposta, compare o tipo de chapa, o acabamento das bordas e como as placas poderão ser substituídas.'],
 troca:['Precisa trocar uma chapa ou revisar o conjunto?','Fotografe a mancha, a fissura ou o ponto de vazamento sem subir na cobertura. Informe quando aparece e peça que a proposta separe a condição da chapa, a vedação e a estrutura existente.'],
 zinco:['O que comparar numa cobertura metálica?','Peça que o orçamento descreva a chapa, os arremates e a condução da água. Se houver um cômodo de permanência ao lado, explique a preocupação com ruído e calor antes de escolher a composição.'],
 retratil:['Quando vale recolher o toldo?','Registre os horários de sol e a direção da exposição. Compare o espaço quando o toldo está aberto e recolhido e peça orientação escrita sobre vento, chuva e conservação do modelo.'],
 cortina:['A proteção precisa vir da lateral?','Indique por onde entra vento ou chuva e onde a passagem precisa ficar livre. Compare o efeito de um fechamento lateral na ventilação, na visibilidade e no manejo diário.'],
 loja:['Como proteger a entrada sem atrapalhar quem passa?','Meça a área da porta e fotografe a circulação de clientes com a fachada em uso. Informe letreiros, portões, acessos e restrições do imóvel para não comparar propostas que cobrem áreas diferentes.'],
 lona:['O tecido é a única peça que precisa mudar?','Fotografe de longe a cobertura inteira e, de um ponto seguro, as áreas de desgaste. Compare reposição de tecido com revisão de armação, fixações, operação e acabamento.'],
 varanda:['Onde a proteção faz diferença no dia a dia?','Conte em que horas usa a varanda e se o principal incômodo é sol alto, claridade lateral ou respingos. O pedido pode então distinguir cobertura superior de proteção lateral.'],
 conserto:['O que informar sobre uma falha?','Diga se o problema é rasgo, ruído, dificuldade de abrir ou vazamento e quando apareceu. Não force o mecanismo nem suba na cobertura para diagnosticar a peça.']
};
const norm=(s: string)=>s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
function projectDecision(path: string, local=''): [string,string] {
 const p=norm(path); const slug=p.split('/').filter(Boolean).at(-1)||''; 
 if(/^\/(bairro|cidade)\//.test(p)&&local){
   const descriptions: Record<string,[string,string]>={
     caiua:['A cobertura precisa compartilhar espaço com o portão?','Se o projeto no Caiuá for para a garagem, fotografe o portão fechado e totalmente aberto, inclusive onde o trilho ou folha passa. Se faltar luz dentro da casa, mostre também as janelas ligadas à vaga.'],
     tatuquara:['Onde está o problema: fachada, vaga ou varanda?','No Tatuquara, mande foto da entrada do imóvel e outra da área que quer proteger. Se a cobertura ficar perto da divisa, indique a saída atual da água, em vez de decidir o material apenas pela aparência.'],
     'sitio-cercado':['A solução é para a vaga ou para o acesso à casa?','No Sítio Cercado, indique se precisa proteger a vaga, o trecho que leva à porta ou ambos. Mostre a posição de portas, janelas e fechamento lateral para que o orçamento descreva cada área.'],
     'agua-verde':['A cobertura muda a aparência externa do imóvel?','Se for sacada, entrada ou vaga de edifício no Água Verde, informe as regras do condomínio antes do orçamento. Para comércio, mostre também letreiros, portas e como o público circula.'],
     batel:['O toldo interfere na fachada existente?','Se for em uma loja no Batel, acompanhe as fotos com as posições do letreiro, das luminárias e das portas. Diga por onde entram clientes e entregas e se o atendimento deve continuar durante a instalação.'],
     pinheirinho:['A instalação é nova ou substitui uma cobertura?','Para uma substituição no Pinheirinho, fotografe a estrutura e indique o motivo da troca. Peça que a proposta separe o que pode ser reaproveitado, o que precisa ser revisado e como será o descarte.'],
     'sao-jose-dos-pinhais':['Como preparar a avaliação em São José dos Pinhais?','Envie bairro, endereço, fotos e objetivo antes de marcar a visita. Se houver controle de acesso, doca ou garagem comum, informe essas condições e confirme visita e deslocamento no atendimento.'],
     araucaria:['A cobertura é de residência ou atende operação comercial?','Em Araucária, diga se a área é utilizada para estacionar, movimentar mercadorias ou receber clientes. A imagem da área e o horário de uso ajudam a comparar soluções sem misturar exigências distintas.'],
   };
   return descriptions[slug.replace(/\.html$/,'')]||['O que mostrar no pedido de cobertura em '+local+'?', 'Envie uma foto ampla do imóvel em '+local+' e identifique a passagem que deve permanecer livre. Uma segunda foto do encontro com parede ou telhado ajuda a separar a proteção superior da lateral. Se o espaço for alugado ou comum, informe quem autoriza a instalação e confirme as condições da visita.'];
 }
 for(const [re,k] of [[/trocar|troca-chapa/,'troca'],[/garagem/,'garagem'],[/vidro/,'vidro'],[/policarbonato/,'policarbonato'],[/zinco/,'zinco'],[/retr[aá]|articulado/,'retratil'],[/cortin|lateral/,'cortina'],[/comercia|fachada/,'loja'],[/conserto/,'conserto'],[/lona/,'lona'],[/varanda|pergola|residencia/,'varanda']] as [RegExp,string][])if(re.test(p))return examples[k];
 if(/contato/.test(p))return ['Quais dados facilitam um primeiro orçamento?','Envie município e bairro, fotos a partir do piso, medidas aproximadas e função pretendida. Identifique a circulação e as restrições de acesso antes de enviar; a medição final é uma etapa separada.'];
 if(/realizados/.test(p))return ['O que observar nas fotos de referência?','Compare não só o material, mas também a relação entre cobertura, portão, iluminação e passagem. Uma foto de referência não confirma que o material ou a estrutura se aplica ao seu imóvel.'];
 if(/bairro|regio/.test(p))return ['Como organizar a visita por endereço?','Informe bairro e município juntos, pois nomes podem se repetir. Diga o tipo de imóvel e se há restrições de acesso ou autorização do condomínio; confirme as condições da visita antes de agendar.'];
 if(/guia|blog/.test(p))return ['Como usar estes guias no orçamento?','Escolha a leitura pelo problema que quer resolver, anote os pontos a conferir e compare propostas com a mesma área, material e escopo. Pergunte o que está previsto para montagem, escoamento e manutenção.'];
 return ['Qual problema você quer resolver primeiro?','Para sombra ajustável, compare toldos retráteis. Para manter uma passagem coberta em tempo de chuva, avalie estrutura fixa e condução da água. Se a prioridade é a vaga, fotografe o portão aberto e explique o espaço de manobra.'];
}

import { Link, useLocation } from "react-router-dom";
import { getLocalPlaceName } from "./LocalHistoryGuide";

const portalTopics: Record<string,[string,string]> = {
 "/": ["Quando escolher cobertura fixa, toldo retrátil ou proteção lateral?", "Se a passagem precisa ficar protegida sem que você precise abrir um toldo, comece pela cobertura fixa. Se o sol muda durante o dia e é importante regulá-lo, compare modelos retráteis. Para uma varanda já coberta que recebe respingos de lado, avalie uma proteção lateral."],
 "/faq": ["Duas propostas são comparáveis?", "Confira se descrevem a mesma área de cobertura, a instalação, a retirada de eventual peça antiga e a drenagem. Peça ao responsável que escreva as condições de manutenção e o que não está incluído."],
 "/mapa-do-site": ["Qual página ajuda a planejar a visita?", "Escolha o bairro ou município do imóvel, anote a finalidade do projeto e confirme como será feito o atendimento naquela localidade. A página local é um guia, não o endereço de uma filial."],
 "/atendimento-em-quadrinhos": ["Depois dos quadrinhos: o que conferir na entrega?", "Peça ao responsável uma demonstração de abertura e fechamento, quando aplicável, e saiba como agir se houver vento forte ou dificuldade de operação. Confirme as orientações e os canais para eventuais ajustes."],
};
export default function ProjectDecision(){
 const {pathname}=useLocation();
 const path=pathname.replace(/\/$/,'')||'/';
 const match=path.match(/^\/(bairro|cidade)\/([^/]+)$/);
 const name=match?getLocalPlaceName(match[1] as 'bairro'|'cidade',match[2]):undefined;
 const data=portalTopics[path]||(name?projectDecision(path,name):undefined);
 if(!data)return null;
 return <section className="sul-guide not-prose" aria-labelledby="guia-escolha-titulo">
   <p className="sul-eyebrow">ANTES DO ORÇAMENTO</p>
   <h2 id="guia-escolha-titulo">{data[0]}</h2>
   <p className="sul-lead" style={{marginTop:16,maxWidth:840}}>{data[1]}</p>
   <p style={{marginTop:16}}><Link to={path==='/atendimento-em-quadrinhos'?'/#empresas':'/atendimento-em-quadrinhos'} className="underline">{path==='/atendimento-em-quadrinhos'?'Conferir quem atende':'Ver as etapas do atendimento em quadrinhos'}</Link></p>
 </section>;
}
