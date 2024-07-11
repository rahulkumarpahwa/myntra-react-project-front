import toast from "react-hot-toast"
const bagSummary = ({ filteredItems }) => {
  const totalItems = filteredItems.length;
  let totalMRP = 0;
  let discount = 0;
  const convenience = 99;
  filteredItems.forEach((item) => {
    totalMRP += item.original_price;
    discount += Math.round(
      (item.original_price * item.discount_percentage) / 100
    );
  });

  let totalAmount = totalMRP - discount + convenience;

  return (
    <div className="bag-summary">
      <div className="bag-details-container">
        <div className="price-header">PRICE DETAILS ({totalItems} Items) </div>
        <div className="price-item">
          <span className="price-item-tag">Total MRP</span>
          <span className="price-item-value">Rs {totalMRP}</span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Discount on MRP</span>
          <span className="price-item-value priceDetail-base-discount">
            - Rs {discount}
          </span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Convenience Fee</span>
          <span className="price-item-value">
            Rs {totalMRP === 0 ? 0 : convenience}
          </span>
        </div>
        <hr />
        <div className="price-footer">
          <span className="price-item-tag">Total Amount</span>
          <span className="price-item-value">Rs {totalAmount}</span>
        </div>
      </div>
      <button className="btn-place-order">
        <div
          className="css-xjhrni"
          onClick={() =>
            toast("🎊Order Placed!🎊", {
              duration: 1000,
              position: "top-center",
              className: "font-bold",
            })
          }
        >
          PLACE ORDER
        </div>
      </button>
    </div>
  );
};
export default bagSummary;
