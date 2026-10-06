import "./App.css";
import { CakeProvider } from "./context/CakeContext";
import CakeCustomizer from "./components/CakeCustomizer";

function App() {
  return (
    <CakeProvider>
      <CakeCustomizer />
    </CakeProvider>
  );
}

export default App;