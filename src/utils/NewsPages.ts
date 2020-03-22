// arreglo de links
// formato de 1 solo link

interface PaginaNoticia {
  name: string;
  link: string;
}

export const NoticiasUbicaciones: Array<PaginaNoticia> = [
  { name: "Reynosa", link: "/noticia/reynosa" },
  { name: "Nuevo Laredo", link: "/noticia/nuevo-laredo" },
  { name: "Miguel Alemán", link: "/noticia/miguel-aleman" },
  { name: "Río Bravo", link: "/noticia/rio-bravo" },
  { name: "Matamoros", link: "/noticia/matamoros" },
  { name: "Ciudad Victoria", link: "/noticia/ciudad-victoria" },
  { name: "Tampico", link: "/noticia/tampico" },
  { name: "Valle de Texas", link: "/noticia/valle-de-texas" }
];
