import "./App.css";
import About from "./components/about";
import Contacts from './components/contacts';
import Home from "./components/home";
import NavMenu from './components/menu';
import Projects from './components/projects';
import Stacks from './components/stacks';

function App() {
  return (
    <>
      <NavMenu />
      <Home />
      <About />
      <Stacks />
      <Projects />
      <Contacts />
    </>
  );
}

export default App;
