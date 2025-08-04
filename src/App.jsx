import About from "./components/About";
import BookAppointment from "./components/BookAppointment";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Textimonials from "./components/Textimonials";
import Tips from "./components/Tips";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Services />
      <About />
      <Tips />
      <BookAppointment />
      <Textimonials />
    </div>
  );
}

export default App;
