import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CXrU_C3N.mjs';
import { manifest } from './manifest_aktJv9AX.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/api/contact.astro.mjs');
const _page3 = () => import('./pages/atelier/contatti.astro.mjs');
const _page4 = () => import('./pages/atelier/edizioni.astro.mjs');
const _page5 = () => import('./pages/atelier/edizioni/_---slug_.astro.mjs');
const _page6 = () => import('./pages/atelier/pacchetti/_---slug_.astro.mjs');
const _page7 = () => import('./pages/atelier/prenotazioni/edizioni-fotografiche.astro.mjs');
const _page8 = () => import('./pages/atelier/prenotazioni/regalare-fotografie.astro.mjs');
const _page9 = () => import('./pages/atelier/prenotazioni/sessione-fotografica.astro.mjs');
const _page10 = () => import('./pages/atelier/sessioni-private.astro.mjs');
const _page11 = () => import('./pages/atelier/sessioni-private/_---slug_.astro.mjs');
const _page12 = () => import('./pages/atelier.astro.mjs');
const _page13 = () => import('./pages/blog/home.astro.mjs');
const _page14 = () => import('./pages/blog/posts/_---slug_.astro.mjs');
const _page15 = () => import('./pages/blog/tags/_tag_.astro.mjs');
const _page16 = () => import('./pages/blog/tags.astro.mjs');
const _page17 = () => import('./pages/blog.astro.mjs');
const _page18 = () => import('./pages/chi-sono.astro.mjs');
const _page19 = () => import('./pages/contatti.astro.mjs');
const _page20 = () => import('./pages/dove-lavoro.astro.mjs');
const _page21 = () => import('./pages/formazione-fotografica/contatti-formazione.astro.mjs');
const _page22 = () => import('./pages/formazione-fotografica/corsi-di-fotografia-roma-gratis.astro.mjs');
const _page23 = () => import('./pages/formazione-fotografica/impara-a-trasformare-fotografie-a-colori-in-bianco-nero-perfetti.astro.mjs');
const _page24 = () => import('./pages/formazione-fotografica/journal.astro.mjs');
const _page25 = () => import('./pages/formazione-fotografica/nuova-scuola-di-fotografia.astro.mjs');
const _page26 = () => import('./pages/formazione-fotografica/risorse-gratuite-per-fotografi/corso-gratuito-di-fotografia/corso-base-di-fotografia-lezione-1.astro.mjs');
const _page27 = () => import('./pages/formazione-fotografica/risorse-gratuite-per-fotografi/corso-gratuito-di-fotografia/corso-base-di-fotografia-lezione-10.astro.mjs');
const _page28 = () => import('./pages/formazione-fotografica/risorse-gratuite-per-fotografi/corso-gratuito-di-fotografia/corso-base-di-fotografia-lezione-2.astro.mjs');
const _page29 = () => import('./pages/formazione-fotografica/risorse-gratuite-per-fotografi/corso-gratuito-di-fotografia/corso-base-di-fotografia-lezione-3.astro.mjs');
const _page30 = () => import('./pages/formazione-fotografica/risorse-gratuite-per-fotografi/corso-gratuito-di-fotografia/corso-base-di-fotografia-lezione-4.astro.mjs');
const _page31 = () => import('./pages/formazione-fotografica/risorse-gratuite-per-fotografi/corso-gratuito-di-fotografia/corso-base-di-fotografia-lezione-5.astro.mjs');
const _page32 = () => import('./pages/formazione-fotografica/risorse-gratuite-per-fotografi/corso-gratuito-di-fotografia/corso-base-di-fotografia-lezione-6.astro.mjs');
const _page33 = () => import('./pages/formazione-fotografica/risorse-gratuite-per-fotografi/corso-gratuito-di-fotografia/corso-base-di-fotografia-lezione-7.astro.mjs');
const _page34 = () => import('./pages/formazione-fotografica/risorse-gratuite-per-fotografi/corso-gratuito-di-fotografia/corso-base-di-fotografia-lezione-8.astro.mjs');
const _page35 = () => import('./pages/formazione-fotografica/risorse-gratuite-per-fotografi/corso-gratuito-di-fotografia/corso-base-di-fotografia-lezione-9.astro.mjs');
const _page36 = () => import('./pages/formazione-fotografica/risorse-gratuite-per-fotografi/corso-gratuito-di-fotografia.astro.mjs');
const _page37 = () => import('./pages/formazione-fotografica/vuoi-imparare-a-fotografare-non-fare-questo-errore.astro.mjs');
const _page38 = () => import('./pages/formazione-fotografica/workshop-di-fotografia.astro.mjs');
const _page39 = () => import('./pages/formazione-fotografica.astro.mjs');
const _page40 = () => import('./pages/galleria/immagini/_---slug_.astro.mjs');
const _page41 = () => import('./pages/gallerie-fotografiche-veloci.astro.mjs');
const _page42 = () => import('./pages/grazie.astro.mjs');
const _page43 = () => import('./pages/le-migliori-gallerie-fotografiche.astro.mjs');
const _page44 = () => import('./pages/mappa.astro.mjs');
const _page45 = () => import('./pages/newsletter-fotografica.astro.mjs');
const _page46 = () => import('./pages/pagina-contatti-fotografo.astro.mjs');
const _page47 = () => import('./pages/portfolio.astro.mjs');
const _page48 = () => import('./pages/progetti/advertising-beauty.astro.mjs');
const _page49 = () => import('./pages/progetti/corporate-stage.astro.mjs');
const _page50 = () => import('./pages/progetti/fineart-analogue.astro.mjs');
const _page51 = () => import('./pages/progetti.astro.mjs');
const _page52 = () => import('./pages/rss.xml.astro.mjs');
const _page53 = () => import('./pages/servizi.astro.mjs');
const _page54 = () => import('./pages/servizi-galleria.astro.mjs');
const _page55 = () => import('./pages/team/home.astro.mjs');
const _page56 = () => import('./pages/team/_---slug_.astro.mjs');
const _page57 = () => import('./pages/index.astro.mjs');
const _page58 = () => import('./pages/_---slug_.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/api/contact.ts", _page2],
    ["src/pages/atelier/contatti.astro", _page3],
    ["src/pages/atelier/edizioni/index.astro", _page4],
    ["src/pages/atelier/edizioni/[...slug].astro", _page5],
    ["src/pages/atelier/pacchetti/[...slug].astro", _page6],
    ["src/pages/atelier/prenotazioni/edizioni-fotografiche.astro", _page7],
    ["src/pages/atelier/prenotazioni/regalare-fotografie.astro", _page8],
    ["src/pages/atelier/prenotazioni/sessione-fotografica.astro", _page9],
    ["src/pages/atelier/sessioni-private/index.astro", _page10],
    ["src/pages/atelier/sessioni-private/[...slug].astro", _page11],
    ["src/pages/atelier/index.astro", _page12],
    ["src/pages/blog/home.astro", _page13],
    ["src/pages/blog/posts/[...slug].astro", _page14],
    ["src/pages/blog/tags/[tag].astro", _page15],
    ["src/pages/blog/tags/index.astro", _page16],
    ["src/pages/blog/index.astro", _page17],
    ["src/pages/chi-sono.astro", _page18],
    ["src/pages/contatti.astro", _page19],
    ["src/pages/dove-lavoro.astro", _page20],
    ["src/pages/formazione-fotografica/contatti-formazione.astro", _page21],
    ["src/pages/formazione-fotografica/corsi-di-fotografia-roma-gratis.md", _page22],
    ["src/pages/formazione-fotografica/impara-a-trasformare-fotografie-a-colori-in-bianco-nero-perfetti.md", _page23],
    ["src/pages/formazione-fotografica/journal.astro", _page24],
    ["src/pages/formazione-fotografica/nuova-scuola-di-fotografia.md", _page25],
    ["src/pages/formazione-fotografica/risorse-gratuite-per-fotografi/corso-gratuito-di-fotografia/corso-base-di-fotografia-lezione-1.md", _page26],
    ["src/pages/formazione-fotografica/risorse-gratuite-per-fotografi/corso-gratuito-di-fotografia/corso-base-di-fotografia-lezione-10.md", _page27],
    ["src/pages/formazione-fotografica/risorse-gratuite-per-fotografi/corso-gratuito-di-fotografia/corso-base-di-fotografia-lezione-2.md", _page28],
    ["src/pages/formazione-fotografica/risorse-gratuite-per-fotografi/corso-gratuito-di-fotografia/corso-base-di-fotografia-lezione-3.md", _page29],
    ["src/pages/formazione-fotografica/risorse-gratuite-per-fotografi/corso-gratuito-di-fotografia/corso-base-di-fotografia-lezione-4.md", _page30],
    ["src/pages/formazione-fotografica/risorse-gratuite-per-fotografi/corso-gratuito-di-fotografia/corso-base-di-fotografia-lezione-5.md", _page31],
    ["src/pages/formazione-fotografica/risorse-gratuite-per-fotografi/corso-gratuito-di-fotografia/corso-base-di-fotografia-lezione-6.md", _page32],
    ["src/pages/formazione-fotografica/risorse-gratuite-per-fotografi/corso-gratuito-di-fotografia/corso-base-di-fotografia-lezione-7.md", _page33],
    ["src/pages/formazione-fotografica/risorse-gratuite-per-fotografi/corso-gratuito-di-fotografia/corso-base-di-fotografia-lezione-8.md", _page34],
    ["src/pages/formazione-fotografica/risorse-gratuite-per-fotografi/corso-gratuito-di-fotografia/corso-base-di-fotografia-lezione-9.md", _page35],
    ["src/pages/formazione-fotografica/risorse-gratuite-per-fotografi/corso-gratuito-di-fotografia/index.md", _page36],
    ["src/pages/formazione-fotografica/vuoi-imparare-a-fotografare-non-fare-questo-errore.md", _page37],
    ["src/pages/formazione-fotografica/workshop-di-fotografia.md", _page38],
    ["src/pages/formazione-fotografica/index.md", _page39],
    ["src/pages/galleria/immagini/[...slug].astro", _page40],
    ["src/pages/gallerie-fotografiche-veloci.md", _page41],
    ["src/pages/grazie.astro", _page42],
    ["src/pages/le-migliori-gallerie-fotografiche.md", _page43],
    ["src/pages/mappa.astro", _page44],
    ["src/pages/newsletter-fotografica.astro", _page45],
    ["src/pages/pagina-contatti-fotografo.astro", _page46],
    ["src/pages/portfolio.astro", _page47],
    ["src/pages/progetti/advertising-beauty.astro", _page48],
    ["src/pages/progetti/corporate-stage.astro", _page49],
    ["src/pages/progetti/fineart-analogue.astro", _page50],
    ["src/pages/progetti/index.astro", _page51],
    ["src/pages/rss.xml.js", _page52],
    ["src/pages/servizi.astro", _page53],
    ["src/pages/servizi-galleria.astro", _page54],
    ["src/pages/team/home.astro", _page55],
    ["src/pages/team/[...slug].astro", _page56],
    ["src/pages/index.astro", _page57],
    ["src/pages/[...slug].astro", _page58]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "c325a20a-ca93-49f0-b01d-8c69c6a90bc7",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
