import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { MyContextProvider } from "./hooks/useContext";
import Router from "./components/router/Router";
function App() {
  return (
    <BrowserRouter>
      <MyContextProvider>
        <Router />
      </MyContextProvider>
    </BrowserRouter>
  );
}

export default App;
