export async function load(url, context, nextLoad) {
  const m = await nextLoad(url, context);
  if (m.format !== "module") return m;
  if (typeof m.source !== "string") {
    m.source = new TextDecoder().decode(m.source);
  }
  m.source = `console.log(import.meta.url); ${m.source}`;
  return m;
}
