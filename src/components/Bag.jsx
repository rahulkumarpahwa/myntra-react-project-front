import BagItems from "./BagItems.jsx";
import BagSummary from "./BagSummary.jsx";
import { useSelector } from "react-redux";

const Bag = () => {
  const cart = useSelector((store) => store.cart);
  const items = useSelector((store) => store.items);
  const filteredItems = items.filter((item) => cart.includes(item.id));
  console.log(filteredItems);

  return (
    <div className="flex items-center justify-center">
      {filteredItems.length === 0 ? (
        <div className="text-2xl font-bold m-8 p-16">No Items In Cart!</div>
      ) : (
        <div className="bag-page">
          {filteredItems.length != 0 &&
            filteredItems.map((item, index) => (
              <BagItems key={index} item={item} />
            ))}
          <BagSummary filteredItems={filteredItems} />
        </div>
      )}
    </div>
  );
};

export default Bag;
