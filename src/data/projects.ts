export interface Project {
  title: string;
  description: readonly string[];
  image: string;
  imageAlt: string;
  imagePosition: "left" | "right";
  overlayLabel: string;
  overlayModifier:
    | "frontendistka"
    | "inmobil"
    | "kacafoti"
    | "detskyterapeut"
    | "katerinahoffman";
  url?: string;
}

export const projects = [
  {
    title: "Frontendistka.cz",
    description: [
      "Můj první projekt nebyl nijak složitý. Chtěla jsem vytvořit jednoduchou osobní stránku, která by sloužila jako moje portfolio.",
      "Využila jsem HTML, CSS a špetku JavaScriptu. Stránka má jednoduchý design a obsahuje několik sekcí.",
    ],
    image: "/images/frontendistka.webp",
    imageAlt: "Frontendistka.cz",
    imagePosition: "right",
    overlayLabel: "Frontendistka",
    overlayModifier: "frontendistka",
    url: "https://www.frontendistka.cz",
  },
  {
    title: "In-mobil.cz",
    description: [
      "Můj další krok mě přivedl k vytvoření profesionální stránky pro in-mobil.cz, což je specializovaná platforma zaměřená na prodej a servis mobilních zařízení. Cílem bylo vytvořit moderní, přehlednou a uživatelsky přívětivou webovou stránku, která by přilákala zákazníky a zprostředkovala jim všechny potřebné informace.",
      "Při vývoji jsem použila HTML, CSS, JavaScript a Google Map API.",
    ],
    image: "/images/in-mobil.webp",
    imageAlt: "In-mobil.cz",
    imagePosition: "left",
    overlayLabel: "In-Mobil",
    overlayModifier: "inmobil",
    url: "http://www.in-mobil.cz",
  },
  {
    title: "Káčafotí.cz",
    description: [
      "Tento projekt byl pro mě obzvlášť důležitý, protože šlo o osobní stránku, která by sloužila jako online galerie pro moje fotografie. Chtěla jsem vytvořit místo, kde bych mohla sdílet svou vášeň pro fotografování s ostatními.",
      "K vývoji stránky jsem použila React s Next.js, Typescript a mnoho javascriptových balíčů.",
      "Fotografický blog jsem později začlenila do své nové osobní stránky katerinahoffman.cz, proto už původní doména není dostupná.",
    ],
    image: "/images/kacafoti.webp",
    imageAlt: "Káčafotí.cz",
    imagePosition: "right",
    overlayLabel: "Káča fotí",
    overlayModifier: "kacafoti",
  },
  {
    title: "Dětskýterapeut.cz",
    description: [
      "Webová prezentace pro dětskou psycholožku zaměřená na přehlednost, důvěryhodnost a přívětivý vizuální styl.",
      "Stránka je navržená s důrazem na jednoduchou orientaci, přístupnost a srozumitelnou strukturu informací pro rodiče i děti.",
      "Využila jsem HTML, SCSS a moderní postupy pro tvorbu responzivního a udržitelného řešení.",
    ],
    image: "/images/detskyterapeut.webp",
    imageAlt: "Dětskýterapeut.cz",
    imagePosition: "left",
    overlayLabel: "Dětský terapeut",
    overlayModifier: "detskyterapeut",
    url: "https://www.detskyterapeut.cz",
  },
  {
    title: "KateřinaHoffman.cz",
    description: [
      "Osobní web zaměřený na prezentaci a prodej mých fotografií a obrazů. Cílem bylo vytvořit vizuálně výraznou, ale zároveň přehlednou galerii, která nechá vyniknout samotnou tvorbu.",
      "Stránka propojuje autorskou fotografii, obrazy a online prezentaci v jednotném stylu s důrazem na atmosféru, jednoduchou orientaci a čisté zpracování.",
      "K vývoji jsem použila React, Next.js, TypeScript a moderní frontendové postupy pro tvorbu responzivního řešení.",
    ],
    image: "/images/katerinahoffmanart.webp",
    imageAlt: "KateřinaHoffman.cz",
    imagePosition: "right",
    overlayLabel: "Kateřina Hoffman",
    overlayModifier: "katerinahoffman",
    url: "https://www.katerinahoffman.cz",
  },
] satisfies readonly Project[];
