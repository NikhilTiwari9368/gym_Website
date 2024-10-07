import { Hero } from "./components/Hero/Hero";
import { Programs } from "./components/Programs/Programs.jsx";
import { Reasons } from "./components/Reasons/Reasons.jsx"
import {Plans} from "./components/Plans/Plans.jsx";
import { Testimonial } from "./components/Testimonals/Testimonial.jsx";
import { Join } from "./components/Join/Join.jsx";
import { Footer } from "./components/Footer/Footer.jsx";

import "./index.css";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      {/* Render both Hero and Programs on the same page */}
      <Hero />
      <Programs />
      <Reasons /> 
      <Plans /> 
      <Testimonial /> 
      <Join /> 
      <Footer /> 
    </div>
  );
};

export default App;
