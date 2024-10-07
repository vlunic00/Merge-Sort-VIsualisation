import { useState } from "react";
import Bars from "./components/Bars";


function App() {

  const [unsortedArray, setUnsortedArray] = useState([1, 4, 2, 9, 5])

  return (
    <>
    <div className="w-[100%] h-[100vh] px-[5%]">
      <Bars arrayToSort = {unsortedArray}/>
    </div>
    </>
  );
}

export default App;
