// arreglo de links
// formato de 1 solo link

interface PaginaNoticia {
  name: string;
  link: string;
}

export const NoticiasUbicaciones: Array<PaginaNoticia> = [
  { name: "Reynosa", link: "reynosa" },
  { name: "Nuevo Laredo", link: "nuevo-laredo" },
  { name: "Miguel Alemán", link: "miguel-aleman" },
  { name: "Río Bravo", link: "rio-bravo" },
  { name: "Matamoros", link: "matamoros" },
  { name: "Ciudad Victoria", link: "ciudad-victoria" },
  { name: "Tampico", link: "tampico" },
  { name: "Valle de Texas", link: "valle-de-texas" }
];
