import Header from "./Components/Header/header";
import Home from "./Components/Home/home";
import AboutUs from "./Components/AboutUs/aboutus";
import ContactUs from "./Components/ContactUs/contactus";
import Friends from "./Components/Friends/friends";
import Footer from "./Components/Footer/footer";
import './index.css'
function App() {
  return (
    <div className="App">
     <Header/>
     <Home/>
     <AboutUs/>
     <Friends/>
     <ContactUs/>
     <Footer/>  
    </div>
  );
}

export default App;