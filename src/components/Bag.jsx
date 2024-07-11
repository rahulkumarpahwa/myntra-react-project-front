import BagItems from "./BagItems.jsx";
import BagSummary from "./BagSummary.jsx";
import { useSelector } from "react-redux";

const Bag = () => {
  const cart = useSelector((store) => store.cart);
  console.log(cart);

  return (
    <div className="bag-page">
      {cart.length != 0 &&
        cart.map((item, index) => <BagItems key={index} item={item} />)}

      <BagSummary />
    </div>
  );
};

export default Bag;
