//////////////////////////////////////////////////////////////////////////////////////
//////////// ESTO SE MANEJA POR LA DB QUE AHORA AUN NO EXISTE ////////////////////////
//////////////////////////////////////////////////////////////////////////////////////

export async function getNewsSections() {
  return [
    "reynosa",
    "nuevo-laredo",
    "miguel-aleman",
    "rio-bravo",
    "matamoros",
    "ciudad-victoria",
    "tampico",
    "valle-de-texas"
  ];
}

export interface NewsArticleData {
  title: string;
  author: string;
  date: string;
  content: string;
  section: string;
  id: string;
  previewImage: string;
}

const NewsArticles: Array<NewsArticleData> = [
  {
    id: "1",
    author: "Nissim",
    title: "Best Titulo",
    date: new Date().toLocaleTimeString(),
    previewImage: "/assets/SpiderSignal.jpeg",
    content: "Super pro discusion de la noticia",
    section: "reynosa"
  },
  {
    id: "2",
    author: "Turriza",
    title: "Simon",
    date: new Date().toLocaleTimeString(),
    previewImage: "/assets/SpiderSignal.jpeg",
    content: "Vamos por COVID",
    section: "matamoros"
  },
  {
    id: "3",
    author: "Turriza",
    title: "Trump tiene coronavirus",
    date: new Date().toLocaleTimeString(),
    previewImage: "/assets/SpiderSignal.jpeg",
    content: "Super pro covid",
    section: "valle-de-texas"
  },
  {
    id: "4",
    author: "Anonimo",
    title: "Titulo de mi noticia",
    date: new Date().toLocaleTimeString(),
    previewImage: "/assets/SpiderSignal.jpeg",
    content: "La noticia mas hermosa",
    section: "reynosa"
  }
];

export async function getNewsForSection(sectionName: string) {
  return NewsArticles.filter(
    data => data.section.toUpperCase() === sectionName.toUpperCase()
  );
}
