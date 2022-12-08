import Selector from './paginas/Selector';
import All from './paginas/All';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
    <Routes>
      <Route path="/" element={<All />} />
      <Route path="/Selector" element={<Selector />} />
    </Routes>
  </BrowserRouter>,
    </div>
  );
}

export default App;
