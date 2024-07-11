const ItemCard = ({ item }) => {

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
      <button className="btn-add-bag" onClick={()=>{console.log("Adding Item to bag")}}>
        Add To Bag
      </button>
    </div>
  );
};

export default ItemCard;
