import ItemCard from "./ItemCard";
import {useSelector} from "react-redux"

const Body = () => {
  const items = useSelector((store)=>store.items)
  return (
    <main>
      <div className="main_container">
        {items.length != 0 && items != undefined &&
          items.map((item) => <ItemCard key={item.id} item={item} />)}
      </div>
    </main>
  );
};

export default Body;
