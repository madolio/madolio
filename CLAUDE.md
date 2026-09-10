# Madolio

Landing page da Madolio (serviço de criação de sites pra pequenos negócios). Vite + React + TypeScript + Tailwind v4. Deploy automático via Netlify a cada push em `main` (madolio.com.br).

## Diretrizes de design

O usuário já deu feedback de que o visual "hand-rolled Tailwind" (card arredondado + ícone em quadradinho colorido + badge em pill + faixa de CTA em gradiente liso) lê como "AI slop" — genérico demais. Ao adicionar/redesenhar seções:

- Não repetir a fórmula card+badge+gradiente-liso em toda seção nova. Variar a composição.
- Preferir componentes reais de bibliotecas (shadcn/ui, Aceternity UI, Magic UI, HeroUI) a inventar divs com classes soltas, quando fizer sentido para o projeto.
- Motion de verdade (GSAP, Motion) em vez de seções estáticas — mas ver a gotcha abaixo antes de usar GSAP com Tailwind.
- Para CTAs/faixas de destaque: preferir fundo com profundidade (glow radial, grid de pontos, etc.) em vez de gradiente linear liso — ver `src/components/CTA.tsx` para um exemplo já aplicado.

## Gotcha: GSAP + Tailwind `transition` quebra animações de entrada

Se um elemento é alvo direto de uma animação GSAP de opacity/transform (ex: `gsap.from(el.children, { opacity: 0, y, stagger, scrollTrigger })`), **não** coloque a classe `transition` (ou `duration-*`) genérica do Tailwind nesse mesmo elemento. A utility `transition` do Tailwind inclui `opacity` e `transform` na lista padrão de `transition-property`, e isso compete com o GSAP escrevendo essas mesmas propriedades — o GSAP reporta `onComplete` normalmente, mas o navegador nunca aplica o valor final, deixando o elemento com `opacity: 0` permanente.

Fix: escopar a transição explicitamente excluindo `opacity`, ex: `transition-[transform,box-shadow,border-color]`. Ver `src/components/Reveal.tsx` (o wrapper de scroll-reveal) e como `src/components/Benefits.tsx`/`src/pages/Projetos.tsx` escopam a transição dos cards.

Componente de entrada reutilizável: `src/components/Reveal.tsx` (usa `useGSAP` do `@gsap/react` — necessário para funcionar corretamente com o StrictMode do React; `useLayoutEffect` puro deixa a animação instável).
