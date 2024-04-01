import ImageOne from "./components/imageOne";
import ImageTwo from "./components/imageTwo";
import ImageThree from "./components/imageThree";
import TextBoxOne from "./components/TextBoxOne";
import Navbar from "./components/Navbar/Navbar";
import TextBoxTwo from "./components/TextBoxTwo";

function App() {
  return (
    <div className="snap-container">
      <Navbar />
      <ImageOne/>
      <ImageTwo/> 
      <TextBoxOne />
      <ImageThree/>
      <TextBoxTwo />
    </div>
  );
}

export default App;
