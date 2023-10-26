import { createContext, useContext, useState } from "react";
import "./App.css";

const AppContext = createContext(null);

function App() {
  const [name, setName] = useState("Front Beginners");

  return (
    <AppContext.Provider value={{ name, setName }}>
      <div>{name}</div>
      <ChildrenOne changeName={setName} />
    </AppContext.Provider>
  );
}

function ChildrenOne() {
  return <ChildrenTwo />;
}

function ChildrenTwo() {
  const { setName } = useContext(AppContext);

  return <button onClick={() => setName("Dimas Capelari")}>Mude o nome</button>;
}

export default App;
