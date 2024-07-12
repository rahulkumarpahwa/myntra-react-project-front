import { Link } from "react-router-dom";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addInitialItems, filterItems } from "../store/itemsSlice";

const Header = () => {
  const inputElement = useRef();
  const dispatch = useDispatch();
  const items = useSelector((store) => store.items);
  const cart = useSelector((store) => store.cart);

  return (
    <header>
      <div className="logo_container">
        <Link to="/">
          <img
            className="myntra_home"
            src="images/myntra_logo.png"
            alt="Myntra Home"
          />
        </Link>
      </div>
      <nav className="nav_bar">
        <a href="#">Men</a>
        <a href="#">Women</a>
        <a href="#">Kids</a>
        <a href="#">Home & Living</a>
        <a href="#">Beauty</a>
        <a href="#">
          Studio <sup>New</sup>
        </a>
      </nav>
      <div className="search_bar">
        <span
          className="material-symbols-outlined search_icon"
          onClick={() => {
          
            const initialState = items;
              console.log("button clicked ", initialState);
            if (inputElement.current.value === "") {
              dispatch(addInitialItems(initialState));
            } else {
              const filteredItems = items.filter((item) =>
                item.company.includes(inputElement.current.value)
              );
              dispatch(filterItems(filteredItems));
            }
          }}
        >
          search
        </span>
        <input
          className="search_input text-center"
          placeholder="Search for products, brands and more"
          ref={inputElement}
        />
      </div>
      <div className="action_bar">
        <div className="action_container">
          <span className="material-symbols-outlined action_icon">person</span>
          <span className="action_name">Profile</span>
        </div>

        <div className="action_container">
          <span className="material-symbols-outlined action_icon">
            favorite
          </span>
          <span className="action_name">Wishlist</span>
        </div>

        <Link className="action_container" to="/bag">
          <span className="material-symbols-outlined action_icon">
            shopping_bag
          </span>
          <span className="action_name">Bag</span>
          <span className="bag-item-count">{cart.length}</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
