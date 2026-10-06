import { useCake } from "../context/CakeContext";

function CakeSummary() {
  const { cake, total } = useCake();

  function handleOrder() {
    alert(
      `Your ${cake.flavor} cake has been ordered!\nTotal: RM ${total.toFixed(
        2
      )}`
    );
  }

  return (
    <div className="summary-card">
      <h2>🍰 Order Summary</h2>

      <div className="summary-item">
        <span>Flavor</span>
        <span>{cake.flavor}</span>
      </div>

      <div className="summary-item">
        <span>Frosting</span>
        <span>{cake.frosting}</span>
      </div>

      <div className="summary-item">
        <span>Size</span>
        <span>{cake.size}</span>
      </div>

      <div className="summary-item">
        <span>Topping</span>
        <span>{cake.topping}</span>
      </div>

      <div className="total">
        <span>Total</span>
        <span>RM {total.toFixed(2)}</span>
      </div>

      <button className="order-button" onClick={handleOrder}>
        Add to Order
      </button>
    </div>
  );
}

export default CakeSummary;