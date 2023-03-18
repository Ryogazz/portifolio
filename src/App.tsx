import "./App.css";
import About from "./components/about";
import Home from "./components/home";
import NavMenu from './components/menu';

function App() {
  return (
    <>
      <NavMenu />
      <Home />
      <About />
    </>
  );
}

export default App;
