# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro. Chosen by the user when offered static HTML/CSS, Astro, or Next.js. Static output,
component reuse across the two planned surfaces, and SEO/performance headroom were the
deciding factors.

## Users

Owners of Brazilian accounting practices (donos de escritório contábil). The copy screens
explicitly against students and beginners. They are technically competent but
under-equipped at management: the practice does not run without them, and that has already
exhausted them. Audience is warm — traffic arrives from the organizers' existing base, not
from cold acquisition. Language is Brazilian Portuguese.

## Product Purpose

Sell attendance to **Visionários ao Vivo 2026**, a two-day in-person event on 29–30 October
2026 in São Paulo. First edition. Presented by Contadores Visionários.

Two surfaces are planned. This project starts with the first:

1. **Capture page** (`/`) — recruits into the "Lista do Lote Zero" via a name/email/WhatsApp
   form, then routes to a WhatsApp group. Success is a completed form *and* a group join;
   the group is where the offer actually opens.
2. **Sales page** (`/lp`) — an extension of the capture page, sells the ticket. Not yet in
   scope.

Lote Zero opens **22/08**, runs 48 hours, at the lowest price of the event, with a physical
bonus for those who buy in that window. Members of the list are notified before the public.

## Positioning

"Método Aceleração Visionária", exclusive to the event: four phases built on one another —
Mentalidade & Modelo, Equipe & Estrutura, Sistemas/Tech & IA, Receita & Faturamento — each
delivering a ready-to-apply tool. The claim is compression: "2 dias, 6 meses de estruturação
resolvidos." Brazil's reforma tributária runs as a cross-cutting theme across both days.
Attendees leave with a 60-day sprint aimed at entering 2027 structured.

## Operating Context

Launch page: paid and organic traffic, mobile-heavy, arriving in bursts around announcement
moments. A live countdown to the event runs on the page. Conversion completes off-site in
WhatsApp, so the handoff to the group is part of the funnel, not a footer detail.

## Capabilities and Constraints

- Form fields: `nome` (text), `email` (email), `telefone` (tel). Submission endpoint is not
  wired in the current build — **undecided**, must be established before launch.
- Post-submit success state exists, followed by an automatic redirect to the WhatsApp group
  after ~5s: `https://chat.whatsapp.com/BCamRxuJtST6SW8OSo4dMb`
- Countdown to 29/10/2026 is live and must keep working.
- Performance is a stated requirement: this is a launch page under paid traffic.

## Brand Commitments

- **The copy is immutable.** The user has explicitly forbidden any change to the existing
  wording. It is reproduced verbatim; only the visual treatment changes.
- Name: Visionários ao Vivo 2026, presented by Contadores Visionários.
- Binding visual constraints volunteered by the user (recorded, not expanded here):
  petrol blue + gold identity, dark page throughout, gold reserved for highlights and never
  used as a background; typefaces Geist and IvyOra Display Italic Light, the latter as a
  support face for headline emphasis, sometimes paired within one headline.
- The incumbent page is explicitly an **anti-reference**: the user describes it as generic
  and soulless. Inspection confirms it runs on default framework styling (Inter/Poppins with
  stock Tailwind greys), so it carries no identity worth preserving.

## Evidence on Hand

Real assets recovered from the current page (embedded, extracted to `scratchpad/assets/`):

- Hero photograph — a full room, attendees in white with phone lights raised. 1600×1067.
  **Two defects, both unresolved:** it is watermarked "Maestria ao Vivo" and the stage
  backdrop inside the frame reads the same, i.e. it is another event's brand; and the copy
  sells a *1ª Edição* while the image is captioned "edição anterior".
- Portrait, Viviane Araújo — 420×420, workable only at small sizes.
- Portrait, Marcos Paulo — 177×177, too small for any premium treatment.
- A trailer video exists (1:1, emotional/teaser). Not yet supplied.

Named people and roles, confirmed: **Viviane Araújo**, Fundadora da Soluzzi · Mentora;
**Marcos Paulo**, Contadores Visionários. Further speakers are deliberately unannounced and
revealed weekly, first to the list.

**Absent and not to be invented:** testimonials, attendee counts, ticket prices, venue name
or address, agenda times, past-edition results, credentials, and sponsor logos. None of
these exist on the current page and none may be fabricated.

## Product Principles

1. **The list is the product on this surface.** The event is sold later; here, success is a
   name captured and a WhatsApp group joined. Every element serves that single act.
2. **Scarcity is factual, not decorative.** Limited seats, a 48-hour window, a closed room,
   a first edition — these are real constraints and carry the urgency on their own. No
   invented counters or fake stock.
3. **Sell the crossing, not the curriculum.** The copy is built on a wall with two sides;
   the transformation, not the agenda, is the argument.
4. **Screen the audience honestly.** The copy actively excludes students and beginners.
   Qualification is part of the pitch and must not be softened.
5. **Speed is conversion.** Paid traffic on mobile connections; anything that delays first
   paint costs registrations.

## Accessibility & Inclusion

No product-specific standard was established. Baseline still applies: the page is dark with
gold accents, so contrast on gold-on-dark text and on form fields must be verified rather
than assumed.
