import { useCake } from "../context/CakeContext";

function FrostingSelector() {
  const { cake, updateCake, prices } = useCake();

  const frostings = ["Vanilla", "Chocolate", "Strawberry"];

  return (
    <div className="option-group">
      <h2>Frosting</h2>

      <div className="options">
        {frostings.map((frosting) => (
          <button
            key={frosting}
            className={
              cake.frosting === frosting ? "option selected" : "option"
            }
            onClick={() => updateCake("frosting", frosting)}
          >
            <span>{frosting}</span>
            <small>RM {prices.frosting[frosting]}</small>
          </button>
        ))}
      </div>
    </div>
  );
}

export default FrostingSelector;