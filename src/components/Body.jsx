import ItemCard from "./ItemCard";
import { useState, useEffect } from "react";

const Body = () => {
  const [items, setItems] = useState([]);
  const fetchItems = async () => {
    const data = await fetch("http://localhost:8080/items");
    const json = await data.json();
    setItems(json.items);
  };
  useEffect(() => {
    fetchItems();
  }, []);
  return (
    <main>
      <div className="main_container">
        {items.length != 0 &&
          items.map((item) => <ItemCard key={item.id} item={item} />)}
      </div>
    </main>
  );
};

export default Body;
