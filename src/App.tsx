import React, { useContext, useState } from "react";
import "./App.css";

interface BasketInterface {
  name: string;
  price: number;
}

interface BasketContextInterface {
  basket: BasketInterface[];
  setBasket: React.Dispatch<React.SetStateAction<BasketInterface[]>>;
}

export const BasketContext = React.createContext<BasketContextInterface>({
  basket: [],
  setBasket: () => {},
});

function App() {
  const [basket, setBasket] = useState<BasketInterface[]>([
    { name: "Ahmed", price: 20 },
  ]);
  const basketState = { basket, setBasket };
  return (
    <div className="App">
      <BasketContext.Provider value={basketState}>
        <ComponentA />
        <ComponentB />
      </BasketContext.Provider>
    </div>
  );
}

export default App;

const ComponentA = () => {
  const basketState = useContext(BasketContext);
  let { basket, setBasket } = basketState;
  return (
    <div>
      <div>{basket[0].name}</div>
      <div>{basket[0].price}</div>
    </div>
  );
};

const ComponentB = () => {
  const basketState = useContext(BasketContext);
  let { basket, setBasket } = basketState;
  return (
    <div>
      {basket.map((el, index) => {
        return (
          <div key={index}>
            <div>{el.name}</div>
            <div>{el.price}</div>
            <button onClick={() => setBasket([{ name: el.name, price: el.price+= 1 }])}>{el.price}</button>
          </div>
        );
      })}
    </div>
  );
};
