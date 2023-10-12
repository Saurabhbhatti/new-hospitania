<<<<<<< HEAD
import Carausal from "./Footer/Carausal";
import Footer from "./Footer/Footer";
import Shoppage from "./Shop-Pages/Shoppage";
import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom'
=======
import AboutUs from "./AboutUs/AboutUs";
import Footer from "./Footer/Footer";
import './AboutUs/About.css'
>>>>>>> Saurabh_B

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <Router>
            <Routes>
                <Route path='/' element={<Carausal/>}></Route>
                <Route path='/shoppage' element={<Shoppage/>}></Route>
            </Routes>
      </Router>
      {/* <Carausal/> */}

      {/* <Shoppage/> */}
      <Footer/>
      {/* <ShopHome/> */}
=======
      {/* <Footer/> */}
      <AboutUs/>
>>>>>>> Saurabh_B
    </div>
  );
}

export default App;
