export const fetchData = async (page: string) => {
  const baseURL = `https://rickandmortyapi.com/api/character/?page=${page}`;
  const response = await (await fetch(baseURL)).json();
  return response;
};

export const fetchByCharacterName = async (query: string, page: string) => {
  try {
    const baseURL = `https://rickandmortyapi.com/api/character/?name=${query}&page=${page}`;
    const response = await fetch(baseURL);
    return response.status === 200 ? await response.json() : null;
  } catch (err) {}
};
