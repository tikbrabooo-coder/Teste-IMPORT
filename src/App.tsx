import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { ArrowDown, ArrowRight, Check, ChevronDown, ShieldCheck, Sparkles, Star, Trophy, LockKeyhole, X } from 'lucide-react';

const ASSET = 'https://rainbow-brioche-d5ce72.netlify.app/images/';
const HERO_SOURCE = 'https://raw.githubusercontent.com/tikbrabooo-coder/Teste-IMPORT/main/Mapas%20de%20Metacogni%C3%A7%C3%A3o%20Infogr%C3%A1fica.png';
const optimizeImage = (source: string, width: number, quality: 60 | 70 | 75 = 70) =>
  `/_vercel/image?url=${encodeURIComponent(source)}&w=${width}&q=${quality}`;
const HERO_MOCKUP = HERO_SOURCE;
const img = (name: string, width = 768) => optimizeImage(ASSET + encodeURIComponent(name), width, 70);
const CHECKOUTS = { ESSENCIAL: 'https://app.zuptos.com.br/checkout/597422a2be19f26c', COMPLETO: 'https://app.zuptos.com.br/checkout/dc9508e2442481d9', UPSELL: 'https://app.zuptos.com.br/checkout/40d7bf7e99b9c963' };

/** Repasse ao checkout os parâmetros de campanha recebidos pela página de vendas. */
const checkoutHref = (checkoutUrl: string) => {
  if (typeof window === 'undefined') return checkoutUrl;

  const incomingParams = new URLSearchParams(window.location.search);
  const trackingParams = [...incomingParams.entries()].filter(([key, value]) =>
    /^(utm_[a-z0-9_]+|fbclid|gclid|gbraid|wbraid|ttclid|twclid|msclkid|xcod|sck|src|sub[_-]?id[_-]?\d*|sub\d+|aff[_-]?sub[_-]?\d*|click[_-]?id|li_fat_id|epik|rdt_cid|sc_cid)$/i.test(key) && value.trim() !== ''
  );

  if (trackingParams.length === 0) return checkoutUrl;

  const destination = new URL(checkoutUrl);
  trackingParams.forEach(([key, value]) => {
    if (!destination.searchParams.has(key)) destination.searchParams.set(key, value);
  });

  return destination.toString();
};
const bonuses = [
  {title:'Checklist de Autoavaliação Cognitiva',description:'Observe seus hábitos mentais e identifique padrões que merecem atenção.',image:'https://raw.githubusercontent.com/tikbrabooo-coder/Teste-IMPORT/main/Checklist%20de%20Autoavalia%C3%A7%C3%A3o%20Cognitiva.png'},
  {title:'30 Mapas para Destravar Decisões',description:'Organize possibilidades, compare caminhos e escolha com mais clareza.',image:'https://raw.githubusercontent.com/tikbrabooo-coder/Teste-IMPORT/main/30%20Mapas%20para%20Destravar%20Decis%C3%B5es.png'},
  {title:'Mapa dos Padrões de Pensamento',description:'Reconheça pensamentos recorrentes e reflita sobre como influenciam suas escolhas.',image:'https://raw.githubusercontent.com/tikbrabooo-coder/Teste-IMPORT/main/Mapa%20Neon%20dos%20Padr%C3%B5es%20de%20Pensamento.png'},
  {title:'Kit de Clareza Mental e Organização de Ideias',description:'Estruture ideias e transforme pensamentos dispersos em um plano visual.',image:'https://raw.githubusercontent.com/tikbrabooo-coder/Teste-IMPORT/main/Kit%20de%20Clareza%20Mental%203D.png'},
  {title:'Manual para Questionar as Próprias Conclusões',description:'Use perguntas guiadas para examinar interpretações e conclusões com mais cuidado.',image:'https://raw.githubusercontent.com/tikbrabooo-coder/Teste-IMPORT/main/Manual%20Para%20Questionar%20Conclus%C3%B5es%20%281%29.png'}
];
const navigateToCheckout=(event:React.MouseEvent<HTMLAnchorElement>,checkoutUrl:string)=>{event.preventDefault();const link=event.currentTarget;if(link.dataset.checkoutPending==="true")return;link.dataset.checkoutPending="true";link.setAttribute('aria-busy','true');window.setTimeout(()=>window.location.assign(checkoutUrl),300)};
const Button=({href,children,muted=false,onClick}:{href?:string;children:React.ReactNode;muted?:boolean;onClick?:()=>void})=>{const isCheckout=Boolean(href&&(href.includes('payfast.greenn.com.br/redirect/')||href.includes('app.zuptos.com.br/checkout/')));const className=`inline-flex w-full items-center justify-center gap-2 rounded-2xl px-6 py-4 text-center font-extrabold uppercase transition ${isCheckout?'go-to-checkout ':''}${muted?'border border-slate-300 bg-white text-slate-900 hover:bg-slate-50':'bg-emerald-600 text-white shadow-pink-cta hover:bg-emerald-700'}`;const inner=<><span>{children}</span><ArrowRight className="h-5 w-5"/></>;if(isCheckout&&href)return <a href={href} onClick={event=>navigateToCheckout(event,href)} className={className}>{inner}</a>;return <a href={href||'#'} onClick={onClick?e=>{e.preventDefault();onClick()}:undefined} className={className}>{inner}</a>};
function Hero(){return <><aside className="hero-offer-banner w-full bg-[#E53935] px-3 py-2 text-center text-xs font-bold text-white sm:text-sm"><span className="hero-offer-text">Oferta por tempo limitado disponível apenas hoje</span></aside><section id="hero-section" className="bg-[#071329] px-4 pb-12 pt-9 text-slate-100 sm:pb-20 sm:pt-12"><div className="mx-auto max-w-[1229px] text-center"><h1 className="metacognition-headline mx-auto w-full px-1 text-center">
  <span className="headline-main headline-line-one"><span className="headline-number">+150</span><span>Mapas</span></span>
  <span className="headline-main headline-line-two">Mentais</span>
  <span className="headline-script">de Metacognição</span>
</h1><a href="#ofertas" className="hero-mockup-link mx-auto mt-3 block w-full sm:mt-5"><img src={HERO_MOCKUP} alt="Mockup +150 Mapas de Metacognição" width={1024} height={1024} fetchPriority="high" loading="eager" decoding="async" className="hero-mockup-image mx-auto block h-auto w-full object-contain"/></a><p className="mx-auto mt-7 max-w-2xl text-base font-medium leading-relaxed text-slate-600 sm:text-xl">Entenda seus padrões de pensamento, reconheça hábitos automáticos e aprenda a tomar decisões mais conscientes com mapas mentais visuais e fáceis de revisar.</p><div className="mx-auto mt-5 max-w-xl"><Button href="#ofertas" onClick={()=>document.getElementById("ofertas")?.scrollIntoView({behavior:"smooth",block:"start"})}>QUERO MEUS MAPAS</Button></div><div className="hero-assurance-strip" aria-label="Garantias da compra"><div className="hero-assurance-item"><ShieldCheck className="hero-assurance-icon hero-assurance-shield" aria-hidden="true"/><span>Compra<br/>Segura</span></div><div className="hero-assurance-item"><Trophy className="hero-assurance-icon hero-assurance-trophy" aria-hidden="true"/><span>Satisfação<br/>Garantida</span></div><div className="hero-assurance-item"><LockKeyhole className="hero-assurance-icon hero-assurance-lock" aria-hidden="true"/><span>Privacidade<br/>Protegida</span></div></div></div></section></>}
function MapsSection(){
  const previewMaps = [
    {file:"Creating_metacognition_mind_map_2K_20261026003658.jpg",alt:"Mapa mental de metacognição — exemplo 1"},
    {file:"Metacognition_mind_map_creation_…_2K_20261026003713.jpg",alt:"Mapa mental de metacognição — exemplo 2"},
    {file:"Creating_metacognition_mind_map_2K_20261026003725.jpg",alt:"Mapa mental de metacognição — exemplo 3"},
    {file:"Metacognition_mind_map_prompt_ge…_2K_20261026003729.jpg",alt:"Mapa mental de metacognição — exemplo 4"},
    {file:"Scientific_mind_maps_metacogniti…_2K_20261026003733.jpg",alt:"Mapa mental de metacognição — exemplo 5"}
  ];
  const previewImageUrl = (file:string) => `https://raw.githubusercontent.com/tikbrabooo-coder/Teste-IMPORT/main/${encodeURIComponent(file)}`;
  const renderMapGroup = (duplicate:boolean) => (
    <div className="maps-auto-group" aria-hidden={duplicate}>
      {previewMaps.map((map) => (
        <article className="maps-preview-card" key={duplicate ? `duplicate-${map.file}` : map.file}>
          <div className="maps-preview-image">
            <img src={previewImageUrl(map.file)} alt={duplicate ? "" : map.alt} loading={duplicate ? "lazy" : "eager"} decoding="async"/>
          </div>
        </article>
      ))}
    </div>
  );
  return <section id="mapas-preview" className="perf-section bg-[#F7FAFF] px-4 py-12 sm:py-16">
    <div className="mx-auto max-w-6xl">
      <h2 className="mb-8 text-center text-2xl font-black text-slate-900 sm:text-4xl">VEJA NA PRÁTICA <span className="text-[#8CCFFF]">UM POUCO DO MATERIAL</span></h2>
      <div className="maps-auto-viewport" aria-label="Carrossel automático com cinco exemplos dos mapas mentais">
        <div className="maps-auto-track">
          {renderMapGroup(false)}
          {renderMapGroup(true)}
        </div>
      </div>
      
    </div>
  </section>;
}
function PainSolutions(){
  const items = [
    {
      pain: "Muito conteúdo espalhado",
      solution: "Reúna os conceitos em mapas visuais organizados por assunto."
    },
    {
      pain: "Relações difíceis de lembrar",
      solution: "Visualize conexões entre pensamentos, emoções e decisões."
    },
    {
      pain: "Revisão que toma tempo",
      solution: "Retome os pontos principais com apoio visual antes de estudar ou praticar."
    }
  ];
  return <section id="pain-solutions" className="pain-solutions-section px-4 py-12 sm:py-16">
    <div className="mx-auto max-w-6xl">
      <div className="pain-solutions-heading">
        <p className="section-kicker section-kicker-centered"><Sparkles className="h-4 w-4"/>ESTUDE COM MAIS CLAREZA</p>
        <h2>Alguns desafios são comuns.<br/><span>Seu estudo pode ser mais visual.</span></h2>
        <p>Os mapas mentais ajudam a organizar informações e facilitam a consulta durante a revisão.</p>
      </div>
      <div className="pain-solutions-grid">
        {items.map((item,index)=><article className="pain-solution-card" key={item.pain}>
          <div className="pain-solution-top">
            <span className="pain-solution-number">0{index+1}</span>
            <span className="pain-solution-label">NA PRÁTICA</span>
          </div>
          <div className="pain-solution-state pain-solution-wrong">
            <div className="pain-solution-state-label"><X className="h-4 w-4"/><span>ERRADO</span></div>
            <h3>{item.pain}</h3>
          </div>
          <div className="pain-solution-divider" aria-hidden="true"><span/><ArrowDown className="h-4 w-4"/><span/></div>
          <div className="pain-solution-state pain-solution-right">
            <div className="pain-solution-state-label"><Check className="h-4 w-4"/><span>CERTO</span></div>
            <p>{item.solution}</p>
          </div>
        </article>)}
      </div>
    </div>
  </section>;
}

function Bonuses(){
  const [bonusProgress, setBonusProgress] = useState(0);
  const handleBonusScroll = (event: React.UIEvent<HTMLDivElement>) => {
    const element = event.currentTarget;
    const maxScroll = element.scrollWidth - element.clientWidth;
    setBonusProgress(maxScroll > 0 ? (element.scrollLeft / maxScroll) * 100 : 0);
  };
  return <section id="bonus-section" className="perf-section px-4 py-12 sm:py-16">
    <div className="mx-auto max-w-6xl">
      <div className="bonus-heading mb-7 text-center">
        <h2 className="bonus-title"><span className="bonus-title-line">E você ainda recebe</span><span className="bonus-title-line">um pacote com <span className="bonus-title-highlight">5 BÔNUS</span></span></h2>
        <p className="bonus-swipe-hint"><span aria-hidden="true">←</span> DESLIZE PARA O LADO PARA VER MAIS <span aria-hidden="true">→</span></p>
      </div>
      <div className="bonus-carousel-viewport" aria-label="Carrossel de cinco bônus" onScroll={handleBonusScroll}>
        <div className="bonus-carousel-track">
          {bonuses.map(({title,description,image}, index) => (
            <article key={title} className="bonus-card">
              <div className="bonus-card-image">
                <img src={image} alt={title} width={720} height={720} loading="lazy" decoding="async"/>
              </div>
              <div className="bonus-card-copy">
                <h3>{title}</h3>
                <p className="bonus-card-description">{description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
      <div className="bonus-progress-track" role="progressbar" aria-label="Progresso do carrossel de bônus" aria-valuemin={0} aria-valuemax={100} aria-valuenow={Math.round(bonusProgress)}>
        <span style={{width: Math.max(16, bonusProgress) + '%'}}/>
      </div>
    </div>
  </section>;
}
function Pricing({onUpgrade}:{onUpgrade:()=>void}){
  const featuresEssential = [
    '+150 Mapas Mentais de Metacognição',
    'Mapas organizados por tema',
    'Conteúdo visual para consulta e revisão',
    'Acesso digital imediato'
  ];
  const featuresComplete = [
    '+150 Mapas Mentais de Metacognição',
    'Checklist de Autoavaliação Cognitiva',
    '30 Mapas para Destravar Decisões',
    'Mapa dos Padrões de Pensamento',
    'Kit de Clareza Mental e Organização de Ideias',
    'Manual para Questionar as Próprias Conclusões',
    'Caderno de Exercícios de Metacognição',
    'Guia Visual do Córtex Pré-Frontal'
  ];
  const Card=({complete}:{complete:boolean})=>{
    const features=complete?featuresComplete:featuresEssential;
    return <article className="pricing-card font-sans relative flex h-full flex-col rounded-3xl bg-white p-6 sm:p-8">
      {complete&&<span className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-blue-600 px-4 py-1.5 text-xs font-black uppercase text-white shadow-md"><Star className="mr-1 inline h-3.5 w-3.5 fill-current"/>MAIS ESCOLHIDO</span>}
      <h3 className="text-2xl font-black sm:text-3xl">{complete?'Plano Completo':'Material Essencial'}</h3>
      {!complete&&<p className="pricing-subtitle mt-1 text-xs font-black uppercase tracking-wide">+150 MAPAS MENTAIS DE METACOGNIÇÃO</p>}
      {complete&&<img src={HERO_MOCKUP} alt="Plano Completo com +150 Mapas Mentais de Metacognição" width={1024} height={1024} className="mx-auto mt-5 w-full max-w-[330px] object-contain" loading="lazy" decoding="async" fetchPriority="low"/>}
      <ul className="mt-7 flex-1 space-y-3">
        {features.map((feature,i)=><li key={feature} className="flex items-center gap-3 text-sm font-bold sm:text-base"><Check className="h-5 w-5 shrink-0 text-blue-600"/><span>{feature}</span></li>)}
      </ul>
      <div className="mt-8 border-t border-slate-100 pt-6 text-center">
        <p className="pricing-price-original">{complete?'R$ 67,00':'R$ 37,00'}</p>
        <p className={'pricing-price-current ' + (complete?'pricing-price-premium':'pricing-price-essential')}>{complete?'R$ 27,00':'R$ 10,00'}</p>
        {complete&&<div className="premium-value-note-wrap"><p className="premium-value-note">Com apenas <span>R$ 17 a mais</span>, destrave o acervo completo de mapas + 7 materiais práticos para desenvolver sua clareza mental e autoavaliação.</p></div>}
        <p className="mt-1 text-xs font-semibold text-slate-500 sm:text-sm">Pagamento único. Sem mensalidade.</p>
        <div className="mt-6">{complete?<Button href={checkoutHref(CHECKOUTS.COMPLETO)}>QUERO COMPRAR</Button>:<><Button muted onClick={onUpgrade}>QUERO O PLANO ESSENCIAL</Button><div className="pricing-promo-nudge mt-3 flex items-center justify-center gap-1.5 text-xs font-black sm:text-sm">CONFIRA ABAIXO👇</div></>}</div>
        {complete&&<p className="mt-3 text-center text-xs font-semibold text-slate-500">Compra única • Acesso imediato • Garantia de 30 dias</p>}
      </div>
    </article>;
  };
  return <section id="ofertas" className="perf-section bg-[#F0F4FA] px-4 py-14 sm:py-20">
    <div className="mx-auto max-w-6xl">
      <h2 className="text-center text-2xl font-black text-slate-900 sm:text-4xl">ESCOLHA A MELHOR <span className="text-blue-600">OPÇÃO PARA VOCÊ</span></h2>
      <div className="mt-8 grid items-stretch gap-8 lg:grid-cols-2"><Card complete={false}/><Card complete/></div>
    </div>
  </section>;
}
function Guarantee(){return <section id="garantia" className="perf-section bg-[#050914] px-4 py-10 sm:py-14"><div className="guarantee-inner mx-auto grid max-w-5xl items-center gap-7 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-8"><div className="guarantee-seal flex justify-center" style={{display:"flex",alignItems:"center",justifyContent:"center",width:220,height:220,minWidth:220,minHeight:220,margin:"0 auto",padding:10,boxSizing:"border-box",background:"#FFFFFF",border:"2px solid #D9B45B",borderRadius:"50%",boxShadow:"0 8px 24px rgba(0,0,0,.22)"}}><img src="https://raw.githubusercontent.com/tikbrabooo-coder/Teste-IMPORT/main/Selo%20Dourado%20de%20Garantia%2030%20Dias.png?v=20261026" alt="Selo dourado de garantia de 30 dias" width={320} height={320} className="block h-full w-full object-contain opacity-100" style={{display:"block",width:"100%",height:"100%",padding:4,objectFit:"contain",opacity:1,visibility:"visible",filter:"none",background:"#FFFFFF",borderRadius:"50%"}} loading="eager" decoding="async" fetchPriority="high" onError={event=>{const image=event.currentTarget;const step=Number(image.dataset.fallbackStep||"0");const fallbacks=["https://raw.githubusercontent.com/tikbrabooo-coder/Teste-IMPORT/main/Selo30dias.webp?v=20261026","https://raw.githubusercontent.com/tikbrabooo-coder/Teste-IMPORT/main/Selo%20Dourado%20de%20Garantia%2030%20Dias.png?v=20261026"];if(step<fallbacks.length){image.dataset.fallbackStep=String(step+1);image.src=fallbacks[step];}}}/></div><div className="guarantee-copy"><h2 className="text-2xl font-black tracking-tight sm:text-3xl">VOCÊ TEM <span>30 DIAS</span> DE GARANTIA INCONDICIONAL</h2><p className="guarantee-description">Após realizar a compra, você poderá acessar, baixar e explorar todos os +150 Mapas Mentais de Metacognição e todos os bônus. Se por qualquer motivo você achar que o material não atende às suas expectativas, basta solicitar o reembolso integral dentro de 30 dias com apenas 1 clique.</p></div></div></section>}
function FAQ(){
  const[open,setOpen]=useState<number|null>(0);
  const items=[
    {question:'O material é físico ou digital?',answer:'O material é 100% digital. Você recebe o acesso aos arquivos para consultar pelo celular, tablet ou computador, sem esperar por entrega física.'},
    {question:'O que vem no Plano Completo?',answer:'O Plano Completo inclui os +150 Mapas Mentais de Metacognição e sete materiais práticos: Checklist de Autoavaliação Cognitiva, 30 Mapas para Destravar Decisões, Mapa dos Padrões de Pensamento, Kit de Clareza Mental e Organização de Ideias, Manual para Questionar as Próprias Conclusões, Caderno de Exercícios de Metacognição e Guia Visual do Córtex Pré-Frontal.'},
    {question:'Qual é a diferença entre o Plano Essencial e o Plano Completo?',answer:'O Plano Essencial reúne os +150 Mapas Mentais de Metacognição organizados por tema. O Plano Completo inclui todo esse acervo mais sete materiais práticos para aprofundar a autoavaliação cognitiva, a clareza mental e a tomada de decisões.'},
    {question:'Quais temas os mapas de metacognição abordam?',answer:'O conteúdo ajuda a refletir sobre padrões de pensamento, autoavaliação cognitiva, clareza mental, tomada de decisões, organização de ideias e os próprios processos de aprendizagem.'},
    {question:'Posso estudar pelo celular?',answer:'Sim. O material é digital e pode ser consultado pelo celular, tablet ou computador.'},
    {question:'Como recebo o acesso ao material?',answer:'Após a confirmação do pagamento, você recebe as instruções de acesso digital conforme a plataforma de compra.'},
    {question:'Como funciona a garantia de 30 dias?',answer:'Você tem 30 dias para conhecer o material. Caso ele não atenda às suas expectativas, poderá solicitar o reembolso dentro das condições da plataforma de pagamento.'}
  ];
  return <section id="faq" className="bg-[#F3F7FC] px-4 py-12 sm:py-16">
    <div className="mx-auto max-w-3xl">
      <h2 className="faq-heading">Perguntas<br/><span>frequentes</span></h2>
      <div className="mx-auto mt-8 max-w-2xl border-t border-slate-300">
        {items.map((item,i)=><div key={item.question} className="faq-row border-b border-slate-300">
          <button type="button" onClick={()=>setOpen(open===i?null:i)} className="faq-question relative flex w-full items-start justify-between gap-4 py-5 pr-9 pl-0 text-left font-extrabold text-slate-900" aria-expanded={open===i}>
            <span>{item.question}</span>
            <span aria-hidden="true" className="faq-plus">{open===i?'−':'+'}</span>
          </button>
          <div className={'grid transition-all duration-300 ' + (open===i?'grid-rows-[1fr] opacity-100':'grid-rows-[0fr] opacity-0')}>
            <div className="min-h-0 overflow-hidden pb-5 text-sm leading-relaxed text-slate-600">{item.answer}</div>
          </div>
        </div>)}
      </div>
      <div className="mx-auto mt-8 max-w-md"><Button href="#ofertas">QUERO VER AS OFERTAS</Button></div>
    </div>
  </section>;
}
function Footer(){return <footer className="bg-slate-950 px-4 py-8 text-center text-sm text-slate-400">© 2026 • +150 Mapas Mentais de Metacognição</footer>}
function UpgradeModal({open,onClose}:{open:boolean;onClose:()=>void}){
  if(!open)return null;
  const modal=<div className="fixed inset-0 z-[2147483647] flex items-center justify-center bg-slate-950/75 p-4" role="dialog" aria-modal="true" aria-label="Oferta especial do Plano Completo">
    <div className="relative max-h-[82vh] w-full max-w-sm overflow-y-auto rounded-[22px] bg-white p-4 shadow-2xl sm:max-h-[88vh] sm:p-7">
      <button type="button" onClick={onClose} aria-label="Fechar oferta" className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200"><X className="h-5 w-5"/></button>
      <div className="pt-1 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-50"><Sparkles className="h-6 w-6 text-blue-600"/></div>
        <p className="mt-3 text-[11px] font-black uppercase tracking-[0.14em] text-blue-700">Oferta especial</p>
        <h2 className="mt-1.5 text-[21px] font-black leading-tight text-slate-900 sm:text-3xl">Leve o Plano Completo por R$ 19,90</h2>
        <p className="mt-2 text-xs font-semibold leading-relaxed text-slate-600 sm:text-base">Aproveite e leve o Plano Completo por <span className="font-black text-blue-700">R$ 7,10 a menos</span> que o valor normal de R$ 27,00.</p>
      </div>
      <div className="mt-4 rounded-2xl bg-[#F0F4FA] p-3.5 sm:mt-5 sm:p-4">
        <p className="text-center text-xs font-black text-slate-900 sm:text-sm">Você recebe no Plano Completo:</p>
        <div className="mt-3 grid grid-cols-2 gap-x-3 gap-y-2">
          {['+150 Mapas Mentais de Metacognição','Checklist de Autoavaliação Cognitiva','30 Mapas para Destravar Decisões','Mapa dos Padrões de Pensamento','Kit de Clareza Mental','Manual para Questionar Conclusões','Caderno de Exercícios de Metacognição','Guia Visual do Córtex Pré-Frontal'].map(item=><p key={item} className="flex items-start gap-1.5 text-[12px] font-semibold leading-tight text-slate-700 sm:text-sm"><Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-600"/><span>{item}</span></p>)}
        </div>
      </div>
      <div className="mt-4 sm:mt-5"><Button href={checkoutHref(CHECKOUTS.UPSELL)}>QUERO ADQUIRIR PLANO COMPLETO POR 19,90</Button></div>
      <a href={checkoutHref(CHECKOUTS.ESSENCIAL)} onClick={event=>navigateToCheckout(event,checkoutHref(CHECKOUTS.ESSENCIAL))} className="go-to-checkout mt-3 block w-full rounded-xl py-2 text-center text-xs font-black text-slate-600 transition hover:text-blue-600">NÃO, QUERO LEVAR O PLANO DE R$ 9,90</a>
    </div>
  </div>;
  return typeof document!=='undefined'?createPortal(modal,document.body):null
}
export default function App(){const[upgradeOpen,setUpgradeOpen]=useState(false);useEffect(()=>{window.scrollTo(0,0)},[]);return <main className="dark-tech-shell min-h-screen overflow-x-hidden"><Hero/><MapsSection/><Bonuses/><Pricing onUpgrade={()=>setUpgradeOpen(true)}/><Guarantee/><FAQ/><Footer/><UpgradeModal open={upgradeOpen} onClose={()=>setUpgradeOpen(false)}/></main>}
