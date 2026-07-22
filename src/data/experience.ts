export interface Experience {
  company: string;
  logo: string;
  period: string;
  description: readonly string[];
}

export const experiences = [
  {
    company: "Etnetera Core",
    logo: "images/etnetera-core-vertical.png",
    period: "2021 - 2024",
    description: [
      "Moje kariéra frontend vývojářky začala v Etnetera Core, jedné z předních českých technologických firem, do které jsem nastoupila s velkým nadšením.",
      "Měla jsem příležitost pracovat na různorodých projektech, které mi umožnily získat cenné zkušenosti a rozvinout své dovednosti.",
      "Vytvářela jsem responzivní uživatelská rozhraní, implementovala design, optimalizovala výkon a zajišťovala přístupnost pro všechny uživatele. Pracovala jsem s nejnovějšími technologiemi a nástroji, což mi pomohlo zlepšit technické dovednosti a naučit se nejlepší praktiky. Naučila jsem se také efektivně komunikovat a spolupracovat s týmem, což je klíčové pro úspěch projektů.",
      "Tato zkušenost mě utvrdila v tom, že vývoj webu je správná cesta. Díky této práci jsem získala pevné základy, které mi pomohly pokračovat v kariéře frontend vývojářky. Jsem vděčná za všechny příležitosti a výzvy, které mi tato pozice přinesla, a těším se na další kapitoly své profesní dráhy.",
    ],
  },
  {
    company: "BOOTIQ",
    logo: "images/BOOT!Q_primary_horizontal.png",
    period: "2024 - současnost",
    description: [
      "Od roku 2024 spolupracuji jako frontend developer s BOOTIQ a TALENTIQ, technologickými společnostmi zaměřenými na vývoj moderních digitálních řešení.",
      "Podílím se na vývoji komplexních webových aplikací se zaměřením na kvalitu kódu, škálovatelnost a výkon. Implementuji uživatelská rozhraní s důrazem na přehlednost, přístupnost a dobrý uživatelský zážitek.",
      "V rámci této spolupráce pracuji s moderními frontendovými technologiemi a osvědčenými postupy, které mi umožňují dále rozvíjet technické dovednosti a efektivně spolupracovat na velkých projektech.",
    ],
  },
] satisfies readonly Experience[];
