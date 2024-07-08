import image from "../assets/images/1.jpg"

const Body = () =>{
return (
  <main>
    <div className="main_container">


      <div className="item-card">
        <img className="item-image" src={image} alt="" />
        <div className="rating">
          {2} ⭐ | {1000}k
        </div>
        <div className="company-name">{"The Delhi"}</div>
        <div className="item-name">{"Dekho ZARA"}</div>
        <div className="price">
          <span className="current-price">Rs {100}</span>
          <span className="original-price">Rs {200}</span>
          <span className="discount-percentage">({100}% OFF)</span>
        </div>
        <button
          className="btn-add-bag"
        >
          Add To Bag
        </button>
      </div>

      
    </div>
  </main>
);
};

export default Body