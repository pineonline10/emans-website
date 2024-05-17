import ImageOne from "./components/imageOne";
import ImageTwo from "./components/imageTwo";
import ImageThree from "./components/imageThree";
import TextBoxOne from "./components/TextBoxOne";
import Navbar from "./components/Navbar/Navbar";
import TextBoxTwo from "./components/TextBoxTwo";
import TextBoxThree from "./components/TextBoxThree"
import TextBoxFour from "./components/TextBoxFour";

function App() {
  return (
    <div className="snap-container">
      <Navbar />
      <ImageOne/>
      <ImageTwo/> 
      <TextBoxOne />
      <ImageThree/>
      <TextBoxTwo />
      <TextBoxThree />
      <TextBoxFour />
    </div>
  );
}

export default App;
