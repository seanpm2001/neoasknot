/** @type {import('./$types').PageLoad} */
export async function load({ params, parent }) {
  const root = await parent();
  return {
    nodeImport: import(`$content/children/coding/${params.slug}.yml`),
    rootTitle: root.nodeImport.default.title,
  };
}
