const Bag = () => {
  return (
    <div className="bag-page">
      <div className="bag-items-container">
        <div className="bag-item-container">
          <div className="item-left-part">
            <img className="bag-item-img" src="../${image}" />
          </div>
          <div className="item-right-part">
            <div className="company">{"company"}</div>
            <div className="item-name">{"item_name"}</div>
            <div className="price-container">
              <span className="current-price">Rs {"current_price"}</span>
              <span className="original-price">Rs {"original_price"}</span>
              <span className="discount-percentage">
                ({"discount_percentage"}% OFF)
              </span>
            </div>
            <div className="return-period">
              <span className="return-period-days">{"return_period"} days</span>{" "}
              return available
            </div>
            <div className="delivery-details">
              Delivery by
              <span className="delivery-details-days">{"delivery_date"}</span>
            </div>
          </div>

          <div className="remove-from-cart">X</div>
        </div>
      </div>
      <div className="bag-summary">
        <div className="bag-details-container">
          <div className="price-header">PRICE DETAILS ({100} Items) </div>
          <div className="price-item">
            <span className="price-item-tag">Total MRP</span>
            <span className="price-item-value">Rs {1000}</span>
          </div>
          <div className="price-item">
            <span className="price-item-tag">Discount on MRP</span>
            <span className="price-item-value priceDetail-base-discount">
              - Rs {1000}
            </span>
          </div>
          <div className="price-item">
            <span className="price-item-tag">Convenience Fee</span>
            <span className="price-item-value">Rs {1000}</span>
          </div>
          <hr />
          <div className="price-footer">
            <span className="price-item-tag">Total Amount</span>
            <span className="price-item-value">Rs {100}</span>
          </div>
        </div>
        <button className="btn-place-order">
          <div className="css-xjhrni">PLACE ORDER</div>
        </button>
      </div>
    </div>
  );
};

export default Bag;
