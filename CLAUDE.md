# Madolio

Landing page da Madolio (serviço de criação de sites pra pequenos negócios). Vite + React + TypeScript + Tailwind v4. Deploy automático via Netlify a cada push em `main` (madolio.com.br).

## Diretrizes de design

O usuário já deu feedback de que o visual "hand-rolled Tailwind" (card arredondado + ícone em quadradinho colorido + badge em pill + faixa de CTA em gradiente liso) lê como "AI slop" — genérico demais. Ao adicionar/redesenhar seções:

- Não repetir a fórmula card+badge+gradiente-liso em toda seção nova. Variar a composição.
- Preferir componentes reais de bibliotecas (shadcn/ui, Aceternity UI, Magic UI, HeroUI) a inventar divs com classes soltas, quando fizer sentido para o projeto.
- Motion de verdade (GSAP, Motion) em vez de seções estáticas — mas ver a gotcha abaixo antes de usar GSAP com Tailwind.

Redesign de set/2026 (2ª passada, pós-catálogo `design-resources`): trocou Sora/Inter + azul corporativo + CTA em gradiente+glow pelo seguinte, para fugir de vez do kit genérico de SaaS:

- **Tipografia:** Fraunces (serifada, com eixo óptico/peso variável) para títulos + Inter pro corpo — combinação editorial, não o par sans+sans de dashboard.
- **Paleta:** tons de papel/tinta (`--color-paper` #FAF7F0, `--color-ink` quase preto mas quente) em vez de branco puro + cinza frio; accent azul-violeta (`--color-accent` #3446C9), não terracota nem azul de SaaS genérico.
- **Momento principal:** `src/components/SketchToSite.tsx` — a janela de navegador do Hero começa como rascunho desenhado à mão (linhas soltas, tortas) e se resolve num site colorido de verdade, com um cursor "publicando" no fim. Único motion "não pedido" do site — não espalhar fade-in a esmo em outras seções (Reveal já cobre isso com stagger sutil).
- `src/components/Reveal.tsx` (usado em várias páginas) agora respeita `prefers-reduced-motion` via `gsap.matchMedia` — qualquer novo componente de motion deve seguir o mesmo padrão (ver gotcha abaixo).
- **SiteMock:** virou um "recorte de papel" — borda grossa (`border-2 border-ink`) com sombra dura deslocada (`shadow-[6px_6px_0_0_...]`) em vez do `shadow-xl` suave genérico.
- **Botões:** pill (`rounded-full`) em ambos os projetos-irmãos, mas cores/tom diferentes — o Madolio é o lado "pessoal/artesanal" da dupla; o `nbj-systems` (ver CLAUDE.md dele) é o lado "técnico/industrial" (Archivo, botões retos, diagrama de engenharia). Não convergir os dois visuais.
- Contato/CTA virou parte do rodapé (`Footer.tsx`, fundo `ink`), sem `CTA.tsx` separado — mesmo padrão adotado no `nbj-systems`.
- Existe um arquivo solto em `public/Gemini_Generated_Image_do52gjdo52gjdo52.jfif` não referenciado em nenhum componente — parece resquício de um teste anterior. Não foi removido por não ter sido criado nesta sessão; confirmar com o usuário antes de apagar.

## Gotcha: GSAP + Tailwind `transition` quebra animações de entrada

Se um elemento é alvo direto de uma animação GSAP de opacity/transform (ex: `gsap.from(el.children, { opacity: 0, y, stagger, scrollTrigger })`), **não** coloque a classe `transition` (ou `duration-*`) genérica do Tailwind nesse mesmo elemento. A utility `transition` do Tailwind inclui `opacity` e `transform` na lista padrão de `transition-property`, e isso compete com o GSAP escrevendo essas mesmas propriedades — o GSAP reporta `onComplete` normalmente, mas o navegador nunca aplica o valor final, deixando o elemento com `opacity: 0` permanente.

Fix: escopar a transição explicitamente excluindo `opacity`, ex: `transition-[transform,box-shadow,border-color]`. Ver `src/components/Reveal.tsx` (o wrapper de scroll-reveal) e como `src/components/Benefits.tsx`/`src/pages/Projetos.tsx` escopam a transição dos cards.

Componente de entrada reutilizável: `src/components/Reveal.tsx` (usa `useGSAP` do `@gsap/react` — necessário para funcionar corretamente com o StrictMode do React; `useLayoutEffect` puro deixa a animação instável).
