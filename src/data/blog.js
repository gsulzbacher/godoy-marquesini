export const POR_PAGINA = 6;

export function paginar(posts, pagina, porPagina = POR_PAGINA) {
  const total = Math.max(1, Math.ceil(posts.length / porPagina));
  const p = Math.min(Math.max(pagina, 1), total);
  return { total, pagina: p, itens: posts.slice((p - 1) * porPagina, p * porPagina) };
}
