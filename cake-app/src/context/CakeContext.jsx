import { createContext, useContext, useState } from "react";

const CakeContext = createContext(null);

const initialCake = {
  flavor: "Chocolate",
  frosting: "Vanilla",
  size: "6 inch",
  topping: "Strawberry",
};

const prices = {
  flavor: {
    Chocolate: 20,
    Vanilla: 18,
    "Red Velvet": 25,
  },

  frosting: {
    Vanilla: 5,
    Chocolate: 7,
    Strawberry: 8,
  },

  size: {
    "6 inch": 0,
    "8 inch": 10,
    "10 inch": 20,
  },

  topping: {
    None: 0,
    Strawberry: 5,
    Oreo: 6,
    Sprinkles: 3,
  },
};

export function CakeProvider({ children }) {
  const [cake, setCake] = useState(initialCake);

  function updateCake(type, value) {
    setCake((currentCake) => ({
      ...currentCake,
      [type]: value,
    }));
  }

  const total =
    prices.flavor[cake.flavor] +
    prices.frosting[cake.frosting] +
    prices.size[cake.size] +
    prices.topping[cake.topping];

  return (
    <CakeContext.Provider
      value={{
        cake,
        updateCake,
        total,
        prices,
      }}
    >
      {children}
    </CakeContext.Provider>
  );
}

export function useCake() {
  const context = useContext(CakeContext);

  if (!context) {
    throw new Error("useCake must be used inside CakeProvider");
  }

  return context;
}