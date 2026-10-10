# Squadworks — site

Landing page da Squadworks em Astro 7 + Tailwind 4, saída estática, em português (`/`) e inglês (`/en/`).

## Rodar localmente

```sh
npm install
npm run dev        # http://localhost:4321
npm run build      # gera dist/
npm run preview    # serve dist/ em http://127.0.0.1:4321
```

## Onde mexer

| O quê | Onde |
| --- | --- |
| Todo o texto, nas duas línguas | `src/i18n/ui.ts` |
| Cores, fontes, botões, cartões | `src/styles/global.css` |
| Cabeçalho, hero, seções, rodapé | `src/components/*.astro` |
| Animação da esteira | `src/components/Harness.astro` (marcação, CSS e a linha do tempo em JS) |
| Meta tags, Open Graph, hreflang, detecção de idioma | `src/layouts/Base.astro` |
| Imagens de compartilhamento | `public/og.png`, `public/og-en.png` (1200×630) |
| Favicon e ícone Apple | `public/favicon.svg`, `public/apple-touch-icon.png` |

As imagens de compartilhamento: `node scripts/og.mjs` gera uma versão rápida com sharp, mas o librsvg ignora as fontes embutidas (Archivo e Plex). As PNGs finais foram feitas renderizando um HTML com as mesmas fontes no Chrome, capturando em 1512×794 e reduzindo para 1200×630 com sharp. Para regenerar com fontes exatas, repita esse caminho; o título em inglês precisou de 84px para caber em duas linhas.

## Conteúdo

- Todo o texto, nas duas línguas, fica em `src/i18n/ui.ts`. O objeto `en` tem o mesmo formato de `ptBR`; toda mudança de texto vale para os dois.
- O registro público de mudanças (`/mudancas` e `/en/changelog`) é alimentado por `src/data/changelog.ts`. Só entram fatos públicos e verificáveis, com data.
- Os dados da organização usados nos metadados (JSON-LD) ficam em `src/data/org.ts`.

## Deploy

Saída estática: qualquer host que sirva `dist/` funciona. O site de produção roda na Vercel; para publicar, dentro de `site/`:

```sh
npm run build && npx vercel deploy --prod --yes
```

Depois conferir https://squadworks.com.br e https://squadworks.com.br/en/.
