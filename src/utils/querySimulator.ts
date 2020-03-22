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
    date: new Date().toLocaleDateString(),
    previewImage: "/assets/SpiderSignal.jpeg",
    content: "Super pro discusion de la noticia",
    section: "reynosa"
  },
  {
    id: "2",
    author: "Turriza",
    title: "Simon",
    date: new Date().toLocaleDateString(),
    previewImage: "/assets/SpiderSignal.jpeg",
    content: "Vamos por COVID",
    section: "matamoros"
  },
  {
    id: "3",
    author: "Turriza",
    title: "Trump tiene coronavirus",
    date: new Date().toLocaleDateString(),
    previewImage: "/assets/SpiderSignal.jpeg",
    content: "Super pro covid",
    section: "valle-de-texas"
  },
  {
    id: "4",
    author: "Anonimo",
    title: "Titulo de mi noticia",
    date: new Date().toLocaleDateString(),
    previewImage: "/assets/SpiderSignal.jpeg",
    content: "La noticia mas hermosa",
    section: "reynosa"
  },
  {
    id: "5",
    author: "Nissim",
    title: "Best Titulo",
    date: new Date().toLocaleDateString(),
    previewImage: "/assets/SpiderSignal.jpeg",
    content: "Super pro discusion de la noticia",
    section: "reynosa"
  },
  {
    id: "6",
    author: "Turriza",
    title: "Simon",
    date: new Date().toLocaleDateString(),
    previewImage: "/assets/SpiderSignal.jpeg",
    content: "Vamos por COVID",
    section: "matamoros"
  },
  {
    id: "7",
    author: "Turriza",
    title: "Trump tiene coronavirus",
    date: new Date().toLocaleDateString(),
    previewImage: "/assets/SpiderSignal.jpeg",
    content: "Super pro covid",
    section: "valle-de-texas"
  },
  {
    id: "8",
    author: "Anonimo",
    title: "Titulo de mi noticia",
    date: new Date().toLocaleDateString(),
    previewImage: "/assets/SpiderSignal.jpeg",
    content: "La noticia mas hermosa",
    section: "reynosa"
  }
];

export async function getNewsForSection(
  sectionName: string
): Promise<Array<NewsArticleData>> {
  return NewsArticles.filter(
    data => data.section.toUpperCase() === sectionName.toUpperCase()
  );
}

export async function getNewsArticleWithId(
  articleID: string
): Promise<NewsArticleData> {
  return NewsArticles.find(data => data.id === articleID);
}

export async function getSectionArticleWithId(
  sectionName: string,
  articleId: string
): Promise<NewsArticleData> {
  return NewsArticles.find(
    data => data.id === articleId && data.section === sectionName
  );
}

export async function getTopArticles(
  sectionName?: string
): Promise<Array<NewsArticleData>> {
  if (sectionName) {
    return NewsArticles.slice(0, 5).filter(
      article => article.section === sectionName
    );
  }
  return NewsArticles.slice(0, 5);
}

export async function getRecentArticles(sectionName?: string) {
  if (sectionName) {
    return NewsArticles.sort((a, b) =>
      new Date(a.date) > new Date(b.date) ? -1 : 0
    ).filter(article => article.section === sectionName);
  }
  return NewsArticles.sort((a, b) =>
    new Date(a.date) > new Date(b.date) ? -1 : 0
  );
}

export async function getTopArticle(
  sectionName?: string
): Promise<NewsArticleData> {
  if (sectionName) {
    return NewsArticles.find(article => article.section === sectionName);
  }
  return NewsArticles[0];
}
