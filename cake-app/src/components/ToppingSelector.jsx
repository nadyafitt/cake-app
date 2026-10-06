import { useCake } from "../context/CakeContext";

function ToppingSelector() {
  const { cake, updateCake, prices } = useCake();

  const toppings = ["None", "Strawberry", "Oreo", "Sprinkles"];

  return (
    <div className="option-group">
      <h2>Toppings</h2>

      <div className="options">
        {toppings.map((topping) => (
          <button
            key={topping}
            className={cake.topping === topping ? "option selected" : "option"}
            onClick={() => updateCake("topping", topping)}
          >
            <span>{topping}</span>
            <small>+ RM {prices.topping[topping]}</small>
          </button>
        ))}
      </div>
    </div>
  );
}

export default ToppingSelector;