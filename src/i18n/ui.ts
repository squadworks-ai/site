export const langs = {
  'pt-br': 'Português',
  en: 'English',
} as const;

export type Lang = keyof typeof langs;

export const defaultLang: Lang = 'pt-br';

export const htmlLang: Record<Lang, string> = {
  'pt-br': 'pt-BR',
  en: 'en',
};

export const localePath: Record<Lang, string> = {
  'pt-br': '/',
  en: '/en/',
};

const ptBR = {
  meta: {
    title: 'Squadworks — Fábrica de software agêntica',
    description:
      'Entra um app. Sai um produto. Não importa como o seu app foi feito, ou se ainda é só uma ideia: sai em produção, seguro, testado e pronto para vender. Você aprova o plano e clica em publicar.',
    skip: 'Pular para o conteúdo',
  },
  nav: {
    problem: 'O problema',
    how: 'Como funciona',
    factory: 'A fábrica',
    example: 'Exemplo',
    cta: 'Começar',
    ctaShort: 'Começar',
    switchLabel: 'Switch to English',
    switchShort: 'EN',
    current: 'PT',
  },
  hero: {
    eyebrow: 'Fábrica de software agêntica',
    title: ['Entra um app.', 'Sai um produto.'],
    lead: 'Não importa como o seu app foi feito, ou se ele ainda é só uma ideia. Entra na esteira e sai em produção: seguro, testado e pronto para vender. Você aprova o plano e clica em publicar. A fábrica faz o resto.',
    cta: 'Tenho um app',
    secondary: 'Tenho uma ideia',
  },
  harness: {
    alt: 'Ilustração animada: um app entra na esteira, passa por diagnóstico, correção, testes, integrações e portão de produção, e sai publicado sem nenhum minuto humano da Squadworks.',
    bar: 'Esteira · Go-live · pedido 0041',
    example: 'Exemplo ilustrativo',
    stations: ['Entrada', 'Diagnóstico', 'Correção', 'Testes', 'Integrações', 'Portão', 'Produção'],
    nowPrefix: 'Estação',
    findingsIdle: 'Achados',
    findingsFound: '11 achados',
    findingsResolved: '11 de 11 resolvidos',
    findings: [
      { before: 'Tabela pedidos sem RLS', after: 'Política por usuário aplicada e testada', level: 'crit' },
      { before: 'Webhook de pagamento sem assinatura', after: 'Verificação de assinatura e retry idempotente', level: 'high' },
      { before: 'Chave de API no front', after: 'Segredo movido para o servidor', level: 'med' },
    ],
    more: '+ 8 achados, todos provados por execução',
    plan: 'Plano de Go-live · 11 correções · 5 integrações · escopo fechado',
    appLabel: 'Seu app',
    appName: 'loja-da-ana',
    appStack: 'React + Supabase',
    appNote: 'versão 1 · "parece pronto"',
    integrations: ['Pagamento', 'Notificações', 'Webhooks', 'Backups', 'Monitoramento'],
    appFoot: 'staging separado · segredos fora do código · CI bloqueando o que não passa',
    gateLabel: 'Portão de produção',
    checks: [
      ['Testes', '142 / 142'],
      ['Segurança', '0 críticos'],
      ['Revisão por agentes', 'aprovada'],
      ['Migração', 'reversível'],
      ['Canary 5%', 'sem erros'],
    ],
    humanMinutes: 'Minutos humanos da Squadworks',
    humanValue: '0',
    clicks: 'Seus dois cliques',
    accept: 'Aceitar plano',
    accepted: 'Plano aceito',
    publish: 'Publicar',
    published: 'Publicado',
    live: 'em produção · loja-da-ana.com.br',
  },
  problem: {
    eyebrow: '01 · O problema',
    title: 'Parece pronto. Quebra onde a demo não olha.',
    lead: 'As ferramentas de IA levam um app até oitenta por cento muito rápido. O restante é o que separa um protótipo de um produto no ar.',
    cards: [
      { tag: 'Autorização', title: 'Quem pode ver e alterar o quê', text: 'Telas protegidas, rotas abertas. Um link direto passa por cima do login.' },
      { tag: 'Dados', title: 'Regras do banco que vazam', text: 'Sem políticas por linha, um cliente lê os pedidos de outro.' },
      { tag: 'Pagamentos', title: 'Cobranças que falham em silêncio', text: 'Webhooks sem assinatura, estornos sem tratamento, pedido pago sem confirmação.' },
      { tag: 'Caminhos de erro', title: 'O que acontece quando dá errado', text: 'Ninguém pediu para tratar. Então ninguém tratou.' },
    ],
    bandTitle: 'E mesmo quando funciona, não fatura.',
    bandText:
      'Pix, cartão, boleto, nota fiscal, WhatsApp, marketplaces e delivery: o que o negócio brasileiro usa para vender não vem de fábrica nas ferramentas de fora. Sem isso, não existe venda no Brasil.',
    ecosystemLabel: 'O ecossistema brasileiro',
    ecosystem: ['Pix', 'Cartão', 'Boleto', 'Nota fiscal', 'WhatsApp', 'Mercado Livre', 'Shopee', 'iFood', 'Correios', 'Melhor Envio', 'LGPD'],
    ecosystemMore: 'E o que o seu negócio usar',
  },
  how: {
    eyebrow: '02 · Como funciona',
    title: 'Duas entradas. Uma esteira. Dois cliques seus.',
    doorsLabel: 'Por onde o seu projeto entra',
    doors: [
      {
        tag: 'Porta 1 · tenho uma ideia',
        title: 'Descoberta',
        quote: '“Quero um app de cardápio para o meu restaurante, integrado com o iFood.”',
        text: 'A squad entrevista você, transforma a conversa em especificação, corta o MVP e monta o plano por fases, com escopo fechado. Daí em diante, a mesma esteira.',
        foot: 'Seu clique: aceitar o plano',
      },
      {
        tag: 'Porta 2 · tenho um app',
        title: 'Diagnóstico',
        quote: '“Meu app parece pronto, mas não consigo colocar no ar.”',
        text: 'A squad lê o código sem alterar nada e prova cada achado executando. Você recebe o que falta para ir ao ar, por gravidade, e o plano fechado do Go-live.',
        foot: 'Seu clique: aceitar o plano',
      },
    ],
    outputsLabel: 'O que sai',
    outputs: [
      {
        tag: 'Escopo fechado',
        title: 'Go-live',
        text: 'Construção por fases ou correções, segurança, testes, as integrações que o seu negócio exige, staging separado e CI. O Portão de produção verifica tudo. Nada que não passa chega perto do ar.',
        foot: 'Seu clique: publicar',
        variant: 'dark',
      },
      {
        tag: 'Em breve',
        title: 'Manutenção',
        text: 'Monitoramento, incidentes e evoluções pequenas no plano mensal. Mudanças de baixo risco saem sozinhas pela esteira.',
        foot: 'Lista de espera',
        variant: 'soon',
      },
    ],
  },
  factory: {
    eyebrow: '03 · A fábrica',
    title: 'O harness verifica. Você decide.',
    lead: 'Existem cinco níveis de autonomia no desenvolvimento com IA. Quase todo mercado parou no terceiro. A Squadworks é construída para o quinto.',
    rungs: [
      { n: '01', title: 'Manual', text: 'A IA não entra no código.' },
      { n: '02', title: 'Copiar e colar', text: 'Trechos do chat, um a um.' },
      { n: '03', title: 'Agente supervisionado', text: 'O humano lê cada diff. É onde quase todos param.' },
      { n: '04', title: 'Specs e revisão', text: 'Agentes executam por horas. O humano confere se os testes passaram.' },
      { n: '05 · Squadworks', title: 'Fábrica', text: 'Testes, varredura, revisão por agentes, canary e rollback decidem. A métrica é minutos humanos por entrega.', hot: true },
    ],
    cards: [
      { title: 'Prova, não opinião', text: 'Todo achado do diagnóstico vem com a execução que o demonstra. Falso positivo não entra no plano.' },
      { title: 'Portão por classe de risco', text: 'Autenticação, permissões, pagamentos e migrações exigem o seu aceite. O resto passa pelo harness.' },
      { title: 'Escopo fechado antes de começar', text: 'Cada entrega tem escopo e custo definidos no plano que você aceita. Sem hora extra, sem surpresa no fim.' },
    ],
  },
  example: {
    eyebrow: '04 · O que você recebe',
    title: 'Relatório que prova. Correção que testa.',
    reportLabel: 'Diagnóstico · loja-da-ana',
    exampleTag: 'Exemplo',
    levels: { crit: 'Crítico', high: 'Alto', med: 'Médio' },
    proven: 'provado por execução ✓',
    findings: [
      { level: 'crit', title: 'Tabela pedidos sem RLS.', text: 'Um usuário autenticado lê pedidos de qualquer outro.' },
      { level: 'high', title: 'Webhook de pagamento sem verificação de assinatura.', text: 'Qualquer chamada marca o pedido como pago.' },
      { level: 'med', title: 'Chave de API no código do front.', text: 'Visível para qualquer visitante.' },
    ],
    reportFoot: '11 achados · 3 críticos · plano de Go-live anexo',
    prLabel: 'Pull request #14',
    prTitle: 'fix(pedidos): política RLS por usuário + teste de isolamento',
    prCode: `+ create policy "pedidos_do_dono" on pedidos
+   for select using (auth.uid() = user_id);

+ test("usuário B não lê pedido de A", async () => {
+   const r = await asUser(B).from("pedidos").select();
+   expect(r.data).toHaveLength(0);
+ });`,
    prChecks: ['142 testes', '0 críticos', 'revisão por agentes', 'canary ok'],
  },
  cta: {
    eyebrow: 'Comece hoje',
    title: 'Mande o link do app ou conte a ideia. Em poucos dias você sabe o que falta para ir ao ar.',
    app: 'Tenho um app',
    idea: 'Tenho uma ideia',
    email: 'contato@squadworks.com.br',
    subject: 'Quero começar com a Squadworks',
    subjectApp: 'Diagnóstico do meu app',
    subjectIdea: 'Tenho uma ideia de app',
  },
  footer: {
    copyright: '© 2026 Squadworks · squadworks.com.br',
    tagline: 'Fábrica de software agêntica',
    founded: 'Fundada em outubro de 2026',
    changelog: 'Mudanças',
  },
  changelog: {
    path: '/mudancas/',
    title: 'Mudanças — Squadworks',
    description: 'Registro público e datado do que a Squadworks publicou.',
    eyebrow: 'Mudanças',
    heading: 'O que mudou, com data.',
    lead: 'Registro público do que a Squadworks publicou, da mudança mais recente para a mais antiga.',
    note: 'Entram aqui só fatos públicos e verificáveis.',
    back: 'Voltar ao início',
  },
};

const en: typeof ptBR = {
  meta: {
    title: 'Squadworks — Agentic software factory',
    description:
      'An app goes in. A product comes out. No matter how your app was built, or whether it is still just an idea: it ships to production, secure, tested and ready to sell. You approve the plan and click publish.',
    skip: 'Skip to content',
  },
  nav: {
    problem: 'The problem',
    how: 'How it works',
    factory: 'The factory',
    example: 'Example',
    cta: 'Start',
    ctaShort: 'Start',
    switchLabel: 'Mudar para português',
    switchShort: 'PT',
    current: 'EN',
  },
  hero: {
    eyebrow: 'Agentic software factory',
    title: ['An app goes in.', 'A product comes out.'],
    lead: 'It does not matter how your app was built, or whether it is still just an idea. It goes down the line and comes out in production: secure, tested and ready to sell. You approve the plan and click publish. The factory does the rest.',
    cta: 'I have an app',
    secondary: 'I have an idea',
  },
  harness: {
    alt: 'Animated illustration: an app enters the line, goes through diagnostic, fixes, tests, integrations and the production gate, and ships with zero Squadworks human minutes.',
    bar: 'Line · Go-live · order 0041',
    example: 'Illustrative example',
    stations: ['Intake', 'Diagnostic', 'Fixes', 'Tests', 'Integrations', 'Gate', 'Production'],
    nowPrefix: 'Station',
    findingsIdle: 'Findings',
    findingsFound: '11 findings',
    findingsResolved: '11 of 11 resolved',
    findings: [
      { before: 'Orders table without RLS', after: 'Per-user policy applied and tested', level: 'crit' },
      { before: 'Payment webhook without signature', after: 'Signature check and idempotent retry', level: 'high' },
      { before: 'API key in the front end', after: 'Secret moved to the server', level: 'med' },
    ],
    more: '+ 8 findings, all proven by execution',
    plan: 'Go-live plan · 11 fixes · 5 integrations · fixed scope',
    appLabel: 'Your app',
    appName: 'loja-da-ana',
    appStack: 'React + Supabase',
    appNote: 'version 1 · "looks done"',
    integrations: ['Payments', 'Notifications', 'Webhooks', 'Backups', 'Monitoring'],
    appFoot: 'separate staging · secrets out of the code · CI blocks what fails',
    gateLabel: 'Production gate',
    checks: [
      ['Tests', '142 / 142'],
      ['Security', '0 critical'],
      ['Agent review', 'approved'],
      ['Migration', 'reversible'],
      ['Canary 5%', 'no errors'],
    ],
    humanMinutes: 'Squadworks human minutes',
    humanValue: '0',
    clicks: 'Your two clicks',
    accept: 'Accept plan',
    accepted: 'Plan accepted',
    publish: 'Publish',
    published: 'Published',
    live: 'live · loja-da-ana.com.br',
  },
  problem: {
    eyebrow: '01 · The problem',
    title: 'Looks done. Breaks where the demo never looks.',
    lead: 'AI tools get an app eighty percent of the way, fast. The rest is what separates a prototype from a product that is live.',
    cards: [
      { tag: 'Authorization', title: 'Who can see and change what', text: 'Protected screens, open routes. A direct link walks right past the login.' },
      { tag: 'Data', title: 'Database rules that leak', text: 'Without row-level policies, one customer reads another one’s orders.' },
      { tag: 'Payments', title: 'Charges that fail silently', text: 'Unsigned webhooks, unhandled refunds, paid orders never confirmed.' },
      { tag: 'Error paths', title: 'What happens when things go wrong', text: 'Nobody asked for it to be handled. So nobody handled it.' },
    ],
    bandTitle: 'And even when it works, it doesn’t bill.',
    bandText:
      'Pix, cards, boleto, invoicing, WhatsApp, marketplaces and delivery: what a Brazilian business uses to sell doesn’t come built in with tools from abroad. Without it, there is no selling in Brazil.',
    ecosystemLabel: 'The Brazilian ecosystem',
    ecosystem: ['Pix', 'Cards', 'Boleto', 'Invoicing', 'WhatsApp', 'Mercado Livre', 'Shopee', 'iFood', 'Correios', 'Melhor Envio', 'LGPD'],
    ecosystemMore: 'And whatever your business uses',
  },
  how: {
    eyebrow: '02 · How it works',
    title: 'Two entrances. One line. Two clicks from you.',
    doorsLabel: 'Where your project comes in',
    doors: [
      {
        tag: 'Door 1 · I have an idea',
        title: 'Discovery',
        quote: '“I want a menu app for my restaurant, integrated with iFood.”',
        text: 'The squad interviews you, turns the conversation into a spec, cuts the MVP and lays out the plan in phases, with a fixed scope. From there, the same line.',
        foot: 'Your click: accept the plan',
      },
      {
        tag: 'Door 2 · I have an app',
        title: 'Diagnostic',
        quote: '“My app looks done, but I can’t get it live.”',
        text: 'The squad reads the code without changing anything and proves every finding by running it. You get what is missing to go live, ranked by severity, plus a fixed-scope Go-live plan.',
        foot: 'Your click: accept the plan',
      },
    ],
    outputsLabel: 'What comes out',
    outputs: [
      {
        tag: 'Fixed scope',
        title: 'Go-live',
        text: 'Phased build or fixes, security, tests, the integrations your business needs, separate staging and CI. The production gate checks everything. Nothing that fails gets anywhere near live.',
        foot: 'Your click: publish',
        variant: 'dark',
      },
      {
        tag: 'Coming soon',
        title: 'Maintenance',
        text: 'Monitoring, incidents and small improvements on a monthly plan. Low-risk changes ship on their own down the line.',
        foot: 'Waitlist',
        variant: 'soon',
      },
    ],
  },
  factory: {
    eyebrow: '03 · The factory',
    title: 'The harness verifies. You decide.',
    lead: 'There are five levels of autonomy in AI-assisted development. Most of the market stopped at the third. Squadworks is built for the fifth.',
    rungs: [
      { n: '01', title: 'Manual', text: 'AI never touches the code.' },
      { n: '02', title: 'Copy and paste', text: 'Snippets from the chat, one at a time.' },
      { n: '03', title: 'Supervised agent', text: 'A human reads every diff. Where almost everyone stops.' },
      { n: '04', title: 'Specs and review', text: 'Agents run for hours. A human checks that the tests passed.' },
      { n: '05 · Squadworks', title: 'Factory', text: 'Tests, scans, agent review, canary and rollback decide. The metric is human minutes per delivery.', hot: true },
    ],
    cards: [
      { title: 'Proof, not opinion', text: 'Every diagnostic finding comes with the run that demonstrates it. False positives never make the plan.' },
      { title: 'Gates by risk class', text: 'Authentication, permissions, payments and migrations require your sign-off. Everything else goes through the harness.' },
      { title: 'Scope closed before work starts', text: 'Every delivery has its scope and cost set in the plan you accept. No overtime, no surprise at the end.' },
    ],
  },
  example: {
    eyebrow: '04 · What you get',
    title: 'A report that proves. A fix that tests.',
    reportLabel: 'Diagnostic · loja-da-ana',
    exampleTag: 'Example',
    levels: { crit: 'Critical', high: 'High', med: 'Medium' },
    proven: 'proven by execution ✓',
    findings: [
      { level: 'crit', title: 'Orders table without RLS.', text: 'Any signed-in user can read anyone else’s orders.' },
      { level: 'high', title: 'Payment webhook without signature verification.', text: 'Any request marks an order as paid.' },
      { level: 'med', title: 'API key in the front-end code.', text: 'Visible to any visitor.' },
    ],
    reportFoot: '11 findings · 3 critical · Go-live plan attached',
    prLabel: 'Pull request #14',
    prTitle: 'fix(orders): per-user RLS policy + isolation test',
    prCode: `+ create policy "orders_owner" on orders
+   for select using (auth.uid() = user_id);

+ test("user B cannot read A's order", async () => {
+   const r = await asUser(B).from("orders").select();
+   expect(r.data).toHaveLength(0);
+ });`,
    prChecks: ['142 tests', '0 critical', 'agent review', 'canary ok'],
  },
  cta: {
    eyebrow: 'Start today',
    title: 'Send the app link or tell us the idea. Within days you will know what is missing to go live.',
    app: 'I have an app',
    idea: 'I have an idea',
    email: 'contato@squadworks.com.br',
    subject: 'Getting started with Squadworks',
    subjectApp: 'Diagnostic for my app',
    subjectIdea: 'I have an app idea',
  },
  footer: {
    copyright: '© 2026 Squadworks · squadworks.com.br',
    tagline: 'Agentic software factory',
    founded: 'Founded October 2026',
    changelog: 'Changelog',
  },
  changelog: {
    path: '/en/changelog/',
    title: 'Changelog — Squadworks',
    description: 'A public, dated record of what Squadworks has published.',
    eyebrow: 'Changelog',
    heading: 'What changed, with dates.',
    lead: 'A public record of what Squadworks has published, most recent first.',
    note: 'Only public, verifiable facts go here.',
    back: 'Back to home',
  },
};

export const ui = { 'pt-br': ptBR, en } as const;

export function t(lang: Lang) {
  return ui[lang];
}

export function otherLang(lang: Lang): Lang {
  return lang === 'pt-br' ? 'en' : 'pt-br';
}

export function mailto(lang: Lang, kind: 'app' | 'idea' | 'any' = 'any') {
  const c = ui[lang].cta;
  const subject = kind === 'app' ? c.subjectApp : kind === 'idea' ? c.subjectIdea : c.subject;
  return `mailto:${c.email}?subject=${encodeURIComponent(subject)}`;
}

export function formatDate(iso: string, lang: Lang): string {
  const locale = htmlLang[lang];
  const [y, m, d] = iso.split('-').map(Number);
  const date = new Date(Date.UTC(y, (m || 1) - 1, d || 1, 12));
  const opts: Intl.DateTimeFormatOptions = d
    ? { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' }
    : { year: 'numeric', month: 'long', timeZone: 'UTC' };
  return new Intl.DateTimeFormat(locale, opts).format(date).replace(/\.$/, '');
}
