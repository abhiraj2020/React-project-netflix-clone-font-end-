import "./App.css"
import Banner from "./Components/Banner/Banner";
import Navbar from "./Components/Navbar/Navbar";
import RowPost from "./Components/RowPost/RowPost"
import { originals,action } from "./url";
function App() {

 

  return (
     <div className="app">
         <Navbar/> 
         <Banner/>
         <RowPost url={originals}title="originals"/> 
         <RowPost url={action} title= "action "isSmall/>             
      </div>
         );
}

export default App;