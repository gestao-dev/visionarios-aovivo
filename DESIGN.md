# Sistema visual — Visionários ao Vivo 2026

Registro do que está decidido. Quem for mexer na página lê isto antes.
Os tokens vivem em `src/styles/global.css`; este arquivo diz **quando** usar cada um.

---

## Cor de texto

| Uso | Token | Valor |
|---|---|---|
| **Todo texto** — parágrafo, item de lista, rótulo, legenda, nota | `--paper` | `#f0f0f0` |
| Realce sólido dentro de frase | `--gold-lift` | `#e6cd91` |

**Regra dura:** a página tem **um único branco**. Texto é `#f0f0f0` — do
parágrafo de abertura à legenda de rodapé. Não existe tom de apoio, nem cinza
intermediário, nem "branco mais calmo".

Os dois antigos apoios, `--paper-dim` (`#c3c7d8`) e `--paper-faint`
(`#8990a8`), **foram aposentados e não voltam**. Eram cinza-azulados usados
para "acalmar" texto secundário, e sobre fundo escuro isso não lê como calma:
lê como texto lavado, como se estivesse meio apagado. Numa página de ticket
alto tudo que está escrito está lá porque precisa ser lido.

Quando um bloco precisa de menos peso, resolva com **tamanho, entrelinha,
maiúscula, entreletra ou espaço** — nunca rebaixando a cor. É assim que os
rótulos de seção e as legendas funcionam hoje: mesmo branco, corpo menor e
caixa alta espaçada.

O `#fff` puro também saiu: `#fff` e `#f0f0f0` na mesma página são dois brancos
sem nenhuma diferença perceptível, ou seja, inconsistência sem ganho. Tudo é
`--paper`.

**Efeito colateral aceito, na tabela "Do lado de cá × Do outro lado":** os dois
lados eram separados por cor (cinza de um lado, branco do outro). Agora estão
no mesmo branco, e a oposição passa a ser carregada só pelo ícone (muro ×
chave), pelo título de cada coluna, pela seta do meio e pelo gradiente dourado
nos títulos. Se um dia isso precisar de mais força, o caminho é **peso, fundo
ou tachado** — não voltar a apagar a coluna da esquerda.

## Ouro

`--gold #d7b356` → `--gold-flare #f4edd0`, o gradiente do arquivo do cliente,
sempre a 90°. Ele aparece em três lugares e só:

1. **Ação primária** (`.cta`) — fundo cheio, texto em `--navy`.
2. **Trecho de destaque em texto** (`.grad`) — palavra ou expressão dentro de
   um título, nunca um parágrafo inteiro.
3. **Luz e borda** — halos, filetes, a borda animada do sprint.

Ouro é metal, não é fundo chapado. Superfície grande em ouro só no botão.

## Bordas

**Toda borda da página** é `--edge-lit` = `#FAD49F` a **20%** (`#fad49f33`),
1px. Sem exceção nova sem decisão explícita.

Onde a imagem já traz a própria moldura — os cards de palestrante em PNG, que
vêm com canto arredondado e borda desenhada — **não se acrescenta borda em
CSS**. Duas molduras empilhadas produzem um contorno duplo.

## Superfície de caixa

```css
background: linear-gradient(180deg, #080b23, #04050f);
border: 1px solid var(--edge-lit);
```

É o mesmo fundo do bloco do sprint e das caixas de qualificação. Quando a caixa
pede um pouco de calor, entra o gradiente dourado por cima **a 5%**
(`#d7b3560d → #f4edd00d`), em diagonal para não ler chapado.

## Tipografia

- **Manrope** (variável, self-hosted em `public/fonts/manrope-var.woff2`) para
  tudo. É a única sans da página.
- **IvyPresto Display** italic, peso 300/400, via kit Adobe
  (`https://use.typekit.net/dbc3pfu.css`), classe `.hand`. Só para a palavra ou
  expressão que carrega emoção. Cai em Georgia italic quando o kit não carrega.
- **Toda headline de seção: 64px** no desktop (`clamp(2.1rem, 4.6vw, 4rem)`).
  A da hero é a única exceção — ela tem escala própria.
- **Nunca travessão (—)** em lugar nenhum da página. Use dois-pontos, vírgula
  ou ponto.

## Espaço e proximidade

O que pertence junto fica junto. Dentro de um bloco de abertura de seção o
espaço **cresce** conforme a relação afrouxa:

| Salto | Distância |
|---|---|
| rótulo → título | `0.77rem` (~12px) |
| título → linha de apoio | `1.25rem` (~20px) |
| linha de apoio → conteúdo | `clamp(1.7rem, 3.4vw, 2.6rem)` (~42px) |

O rótulo é do título, então encosta nele. O conteúdo é outra coisa, então
respira. Um bloco em que os três saltos são iguais não tem hierarquia — tem
lista.

Entre irmãos de uma grade (cards de palestrante, caixas de qualificação) o
respiro é curto de propósito, `clamp(0.42rem, 0.9vw, 0.8rem)`: são peças do
mesmo conjunto e a leitura é de conjunto, não de item isolado.

## Movimento

Um momento autoral por dobra, no máximo. Entrada sempre a partir de um estado
**já visível** — nada de `opacity: 0` esperando o scroll, porque se a animação
não roda o conteúdo some. As faixas cruzadas e a borda animada do sprint são os
momentos autorais da página; o resto se move pouco e devagar.

Tudo respeita `prefers-reduced-motion`.

## Armadilhas já pagas

Registradas porque custaram tempo e voltam fácil:

- `body { overflow-x: hidden }` transforma o `body` em contêiner de rolagem e
  **mata o `position: sticky`** do header. Use `html { overflow-x: clip }`.
- Item de grade tem `min-width: auto`. Com `white-space: nowrap` dentro, ele
  estoura a viewport no celular. `min-width: 0` no filho resolve.
- `.grad` é `inline-block`. Um `<br>` **dentro** dele cria uma caixa de duas
  linhas que alinha pela última linha e embaralha a ordem visual das palavras.
  Quebre **entre** dois `.grad`, não dentro de um.
- Altura em `%` resolve contra o pai. Numa coluna flex, dê um slot com
  `flex: 1` ao elemento antes de medir a barra em `%`.
- Filho com `z-index: -1` dentro de um pai sem `isolation: isolate` pinta
  **abaixo** da imagem do pai e desaparece.
