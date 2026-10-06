import CakePreview from "./CakePreview";
import FlavorSelector from "./FlavorSelector";
import FrostingSelector from "./FrostingSelector";
import SizeSelector from "./SizeSelector";
import ToppingSelector from "./ToppingSelector";
import CakeSummary from "./CakeSummary";

function CakeCustomizer() {
  return (
    <main className="container">
      <header className="header">
        <h1>🎂 Cake Customizer</h1>
        <p>Build your perfect cake!</p>
      </header>

      <div className="cake-layout">
        <section className="preview-section">
          <CakePreview />
        </section>

        <section className="options-section">
          <FlavorSelector />
          <FrostingSelector />
          <SizeSelector />
          <ToppingSelector />
        </section>

        <section className="summary-section">
          <CakeSummary />
        </section>
      </div>
    </main>
  );
}

export default CakeCustomizer;