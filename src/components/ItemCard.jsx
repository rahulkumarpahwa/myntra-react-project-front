import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../store/cartSlice";
import toast from "react-hot-toast";

const ItemCard = ({ item }) => {
  const dispatch = useDispatch();
  const cart = useSelector((store) => store.cart);


  return (
    <div className="item-card">
      <img className="item-image" src={item.image} alt="" />
      <div className="rating">
        {item.rating.stars} ⭐ | {item.rating.count}k
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
        <span className="current-price">Rs {item.current_price}</span>
        <span className="original-price">Rs {item.original_price}</span>
        <span className="discount-percentage">
          ({item.discount_percentage}% OFF)
        </span>
      </div>
      <div className="flex gap-2">
        <button
          className="btn-add-bag"
          onClick={() => {
            dispatch(addItem(item.id));
            toast(`${item.item_name} Added to Cart!`, {
              duration: 1000,
              position: "top-center",
              className: "font-bold",
            });
          }}
        >
          {cart.includes(item.id) ? "Add More" : "Add To Bag"}
        </button>
        {cart.includes(item.id) && (
          <button
            className="btn-remove-bag"
            onClick={() => {
              dispatch(removeItem(item.id));
              toast(`${item.item_name} removed from Cart!`, {
                duration: 1000,
                position: "top-center",
                className: "font-bold",
              });
            }}
          >
            Remove
          </button>
        )}
      </div>
    </div>
  );
};

export default ItemCard;
