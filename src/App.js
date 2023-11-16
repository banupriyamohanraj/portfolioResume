import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Resume from "./Components/Resume/Resume";
import Skills from "./Components/Skills/Skills";
import Project from "./Components/Project/Project";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Content from "./Components/content/Content";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Router>
      <div id="wrapper">
        <ToastContainer />
        <Navbar />
        <Profile />
        <Resume />
        <Skills />
        <Project />

        <Contact />
        <Footer />

        <Routes>
          <Route path="/url" component={Content} exact={true}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
