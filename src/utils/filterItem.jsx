const filterItem = async (id) => {
    const data = await fetch(`http://localhost:8080/items/${id}`);
    const json = await data.json();
  return json.item;
};

export default filterItem;
