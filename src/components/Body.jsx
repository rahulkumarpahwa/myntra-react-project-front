import ItemCard from "./ItemCard";
// import useFetchItems from "../utils/useFetchItems";
import {useSelector} from "react-redux"

const Body = () => {
  // const items = useFetchItems();
  const items = useSelector((store)=>store.items)
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
