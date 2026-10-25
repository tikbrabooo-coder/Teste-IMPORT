export const CHECKOUT_URLS = { ESSENCIAL: 'https://app.zuptos.com.br/checkout/3964ebc0548af57e', COMPLETO: 'https://app.zuptos.com.br/checkout/58864c8277caafae', OFERTA_UPSELL: 'https://app.zuptos.com.br/checkout/e8d0547d33daa9bd' };
const METACOG_IMAGE = 'https://raw.githubusercontent.com/tikbrabooo-coder/Teste-IMPORT/main/Mapas%20de%20Metacogni%C3%A7%C3%A3o%20Infogr%C3%A1fica.png';

export const CAROUSEL_ITEMS = [
  {id:1,title:'Padrões de Pensamento',imageSrc:METACOG_IMAGE,alt:'Mapa visual de padrões de pensamento'},
  {id:2,title:'Autoavaliação Cognitiva',imageSrc:METACOG_IMAGE,alt:'Mapa visual de autoavaliação cognitiva'},
  {id:3,title:'Clareza Mental',imageSrc:METACOG_IMAGE,alt:'Mapa visual para clareza mental'},
  {id:4,title:'Tomada de Decisões',imageSrc:METACOG_IMAGE,alt:'Mapa visual para apoiar decisões'},
  {id:5,title:'Organização de Ideias',imageSrc:METACOG_IMAGE,alt:'Mapa visual de organização de ideias'}
];

export const BONUS_ITEMS = [
  {id:1,title:'Checklist de Autoavaliação Cognitiva',imageSrc:METACOG_IMAGE,alt:'Material de autoavaliação cognitiva',description:'Observe seus hábitos mentais e identifique padrões que merecem atenção.'},
  {id:2,title:'30 Mapas para Destravar Decisões',imageSrc:METACOG_IMAGE,alt:'Mapas para organizar decisões',description:'Organize possibilidades, compare caminhos e escolha com mais clareza.'},
  {id:3,title:'Mapa dos Padrões de Pensamento',imageSrc:METACOG_IMAGE,alt:'Mapa de padrões de pensamento',description:'Reconheça pensamentos recorrentes e reflita sobre como influenciam suas escolhas.'},
  {id:4,title:'Kit de Clareza Mental e Organização de Ideias',imageSrc:METACOG_IMAGE,alt:'Kit de clareza mental',description:'Estruture ideias e transforme pensamentos dispersos em um plano visual.'},
  {id:5,title:'Manual para Questionar as Próprias Conclusões',imageSrc:METACOG_IMAGE,alt:'Manual para refletir sobre conclusões',description:'Use perguntas guiadas para examinar interpretações e conclusões com mais cuidado.'}
];

export const PRICING_PLANS = [
  {id:'plano-essencial',title:'Material Essencial',subtitle:'+150 Mapas Mentais de Metacognição',items:[{label:'+150 Mapas Mentais de Metacognição'},{label:'Mapas organizados por tema'},{label:'Conteúdo visual para consulta e revisão'},{label:'Acesso digital imediato'}],price:'R$ 10,00',priceNote:'Pagamento único. Sem mensalidade.',ctaId:'cta-oferta-basica',ctaHref:CHECKOUT_URLS.ESSENCIAL,ctaLabel:'Quero comprar',ctaVariant:'muted'},
  {id:'plano-completo',featured:true,badge:'Mais Escolhido',title:'Plano Completo',mockupImage:METACOG_IMAGE,mockupAlt:'Mockup do Plano Completo de Metacognição',items:[{label:'+150 Mapas Mentais de Metacognição'},{label:'Checklist de Autoavaliação Cognitiva'},{label:'30 Mapas para Destravar Decisões'},{label:'Mapa dos Padrões de Pensamento'},{label:'Kit de Clareza Mental e Organização de Ideias'},{label:'Manual para Questionar as Próprias Conclusões'},{label:'Caderno de Exercícios de Metacognição'},{label:'Guia Visual do Córtex Pré-Frontal'}],price:'R$ 27,00',priceNote:'Pagamento único. Sem mensalidade.',ctaId:'cta-pacote-completo',ctaHref:CHECKOUT_URLS.COMPLETO,ctaLabel:'Quero comprar',footnote:'Compra única • Acesso imediato • Garantia de 30 dias'}
];
export const MODAL_INCLUSIONS = ['+150 Mapas Mentais de Metacognição','Checklist de Autoavaliação Cognitiva','30 Mapas para Destravar Decisões','Mapa dos Padrões de Pensamento','Kit de Clareza Mental e Organização de Ideias','Manual para Questionar as Próprias Conclusões','Caderno de Exercícios de Metacognição','Guia Visual do Córtex Pré-Frontal'];

export const FAQS = [
  {question:'O material é físico ou digital?',answer:'O material é 100% digital. Você recebe acesso ao conteúdo e pode consultar os mapas no celular, tablet ou computador.'},
  {question:'O que existe dentro dos +150 mapas?',answer:'Os materiais abordam padrões de pensamento, autoavaliação cognitiva, clareza mental, tomada de decisões, organização de ideias e reflexão sobre os próprios processos de aprendizagem.'},
  {question:'O que vem no Plano Completo?',answer:'O Plano Completo inclui os +150 Mapas Mentais de Metacognição e sete materiais práticos: Checklist de Autoavaliação Cognitiva, 30 Mapas para Destravar Decisões, Mapa dos Padrões de Pensamento, Kit de Clareza Mental e Organização de Ideias, Manual para Questionar as Próprias Conclusões, Caderno de Exercícios de Metacognição e Guia Visual do Córtex Pré-Frontal.'},
  {question:'Os mapas substituem um curso completo?',answer:'Não. A proposta é funcionar como uma biblioteca visual de estudo e reflexão, ajudando a organizar conceitos para consulta e revisão.'},
  {question:'Posso usar os mapas para revisar antes de uma prova?',answer:'Sim. A estrutura foi pensada para consulta e revisão, facilitando a retomada de padrões, comparações e pontos importantes.'},
  {question:'Como recebo o acesso ao material?',answer:'Após a confirmação do pagamento, o acesso é liberado digitalmente conforme as instruções da plataforma de compra.'},
  {question:'Como funciona a garantia de 30 dias?',answer:'Você tem 30 dias para conhecer o material. Dentro das condições da plataforma de pagamento, poderá solicitar o reembolso caso o conteúdo não atenda às suas expectativas.'}
];

export const RECENT_PURCHASES = [{nome:'Pessoa estudando metacognição',cidade:'São Paulo, SP'},{nome:'Estudante de Psicologia',cidade:'Belo Horizonte, MG'},{nome:'Pessoa buscando clareza mental',cidade:'Curitiba, PR'},{nome:'Profissional em desenvolvimento pessoal',cidade:'Recife, PE'},{nome:'Estudante de Psicologia',cidade:'Porto Alegre, RS'}];

const ATTRIBUTION_KEY='mmse_attribution_params'; const ONE_DAY_MS=86400000;
export const getAttributionParams=()=>{if(typeof window==='undefined')return new URLSearchParams();try{const raw=window.sessionStorage.getItem(ATTRIBUTION_KEY)||window.localStorage.getItem(ATTRIBUTION_KEY);if(!raw)return new URLSearchParams();const data=JSON.parse(raw);if(!data?.query||!data?.capturedAt||Date.now()-data.capturedAt>ONE_DAY_MS)return new URLSearchParams();return new URLSearchParams(data.query)}catch{return new URLSearchParams()}};
export const captureAttribution=()=>{if(typeof window==='undefined')return;try{const params=new URLSearchParams(window.location.search);if([...params.keys()].length===0)return;const current=getAttributionParams();params.forEach((val,key)=>{if(val)current.set(key,val)});const payload=JSON.stringify({query:current.toString(),capturedAt:Date.now()});window.sessionStorage.setItem(ATTRIBUTION_KEY,payload);window.localStorage.setItem(ATTRIBUTION_KEY,payload)}catch{}};
export const appendAttribution=(url:string)=>{if(typeof window==='undefined'||(!url.startsWith('http://')&&!url.startsWith('https://')))return url;try{captureAttribution();const target=new URL(url);const stored=getAttributionParams();const current=new URLSearchParams(window.location.search);stored.forEach((val,key)=>{if(val&&!target.searchParams.has(key))target.searchParams.set(key,val)});current.forEach((val,key)=>{if(val)target.searchParams.set(key,val)});return target.toString()}catch{return url}};
export const trackCheckout=({contentName,value,currency='BRL'}:{contentName:string;value?:number;currency?:string})=>{if(typeof window==='undefined')return;const fbq=(window as any).fbq;if(typeof fbq!=='function')return;const payload:any={content_name:contentName,content_type:'product',currency};if(typeof value==='number')payload.value=value;try{fbq('track','InitiateCheckout',payload)}catch{}};
