export const getSuperheroData = async (id) => {
  const superheroData = await fetch(
    `https://akabab.github.io/superhero-api/api/id/${id}.json`
  );
  return superheroData.json();
};
