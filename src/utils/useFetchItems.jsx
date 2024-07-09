import { useState, useEffect } from "react";

const useFetchItems = () => {
  const [items, setItems] = useState([]);
  const fetchItems = async () => {
    const data = await fetch("http://localhost:8080/items");
    const json = await data.json();
    setItems(json.items);
  };
  useEffect(() => {
    fetchItems();
  }, []);

  return items;
};

export default useFetchItems;
