import { BrowserRouter , Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import Staking from "./Staking";
function App() {
  return (
    <>
   
   <BrowserRouter>
    <Routes>
      
      <Route path='/' element={<Nav/>}  />
      <Route path='/Staking' element={<Staking/>}  />
      {/* <Route path='/lottery' element={<Lottery/>}  /> */}
  
    </Routes>

    </BrowserRouter>


    </>
  );
}

export default App;
