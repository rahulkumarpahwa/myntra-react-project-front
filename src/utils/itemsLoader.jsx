export const itemsLoader = async () => {
  return await fetch("http://localhost:8080/items")
    .then((res) => res.json())
    .then((data) => {
      return data.items;
    });
};
