export let bykes = [];

export const getAll = () => {
  return bykes;
}

export const getById = (id) => {
  return bykes.find(b => b.id === id) || null;
}

export const create = (byke) => {
  bykes.push(byke);
}

export const update = (id, byke) => {
  const foundByke = getById(id);
  Object.assign(foundByke, byke);
  return foundByke;
}

export const remove = (id) => {
  bykes = bykes.filter(b => b.id !== id);
}
