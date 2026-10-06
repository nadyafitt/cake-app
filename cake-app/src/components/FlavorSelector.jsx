import { useCake } from "../context/CakeContext";

function FlavorSelector() {
  const { cake, updateCake, prices } = useCake();

  const flavors = ["Chocolate", "Vanilla", "Red Velvet"];

  return (
    <div className="option-group">
      <h2>Cake Flavor</h2>

      <div className="options">
        {flavors.map((flavor) => (
          <button
            key={flavor}
            className={cake.flavor === flavor ? "option selected" : "option"}
            onClick={() => updateCake("flavor", flavor)}
          >
            <span>{flavor}</span>
            <small>RM {prices.flavor[flavor]}</small>
          </button>
        ))}
      </div>
    </div>
  );
}

export default FlavorSelector;