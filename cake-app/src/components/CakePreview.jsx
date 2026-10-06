import { useCake } from "../context/CakeContext";

function CakePreview() {
  const { cake } = useCake();

  return (
    <div className="cake-card">
      <div className="cake-icon">🎂</div>

      <h2>Your Cake</h2>

      <div className="cake-details">
        <p>
          <strong>Flavor:</strong> {cake.flavor}
        </p>

        <p>
          <strong>Frosting:</strong> {cake.frosting}
        </p>

        <p>
          <strong>Size:</strong> {cake.size}
        </p>

        <p>
          <strong>Topping:</strong> {cake.topping}
        </p>
      </div>
    </div>
  );
}

export default CakePreview;