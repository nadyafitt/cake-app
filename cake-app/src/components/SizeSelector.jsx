import { useCake } from "../context/CakeContext";

function SizeSelector() {
  const { cake, updateCake, prices } = useCake();

  const sizes = ["6 inch", "8 inch", "10 inch"];

  return (
    <div className="option-group">
      <h2>Size</h2>

      <div className="options">
        {sizes.map((size) => (
          <button
            key={size}
            className={cake.size === size ? "option selected" : "option"}
            onClick={() => updateCake("size", size)}
          >
            <span>{size}</span>
            <small>
              {prices.size[size] === 0
                ? "Base price"
                : `+ RM ${prices.size[size]}`}
            </small>
          </button>
        ))}
      </div>
    </div>
  );
}

export default SizeSelector;