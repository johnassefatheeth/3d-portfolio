import { Route, BrowserRouter as Router , Routes } from "react-router-dom";
import Navbar from "./components/Navbar";


function App() {
  return (
<main>

    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={'home'}/>
        <Route path="/about" element={'about'}/>
        <Route path="/project" element={'project'}/>
        <Route path="/contact " element={'contact'}/>

      </Routes>
    </Router>

</main>  )
}

export default App;
