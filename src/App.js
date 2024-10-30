import { useState } from "react";
import Bar from "./components/Bar";


function App() {

  const [unsortedArray, setUnsortedArray] = useState([1, 4, 2, 9, 5])
  const [activeIndexes, setActiveIndexes] = useState([])
  
  const originalArray = [1, 4, 2, 9, 5];
  const [sortStatus, setStortStatus] = useState(false);


  function merge(arr, left, mid, right) {
    const n1 = mid - left + 1;
    const n2 = right - mid;

    const L = new Array(n1);
    const R = new Array(n2);

    for (let i = 0; i < n1; i++)
        L[i] = arr[left + i];
    for (let j = 0; j < n2; j++)
        R[j] = arr[mid + 1 + j];

    let i = 0, j = 0;
    let k = left;

    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            i++;
        } else {
            arr[k] = R[j];
            j++;
        }
        k++;
    }

    while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
    }

    while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;
    }
}

function mergeSort(arr, left, right) {
    if (left >= right)
        return;

    const mid = Math.floor(left + (right - left) / 2);
    for (let i = 0; i < mid; i++){
        setActiveIndexes(activeIndexes => [...activeIndexes, i])
    }
    //mergeSort(arr, left, mid);
    //mergeSort(arr, mid + 1, right);
    //merge(arr, left, mid, right);
}


  return (
    <>
    <div className="flex flex-wrap justify-center content-center w-[100%] h-[100vh] px-[5%]">
    <div className="flex flex-wrap h-[40%] w-[100%] gap-[1%] justify-center items-end">
            {unsortedArray.map((el, index) => (
                <Bar key={index} value={el} activeList={activeIndexes} />
            ))}
        </div>
    <div className="flex justify-center gap-10">
        <button className="mt-[10px] p-[10px] bg-lime-700 rounded-md text-white" onClick={() => {mergeSort(unsortedArray, 0, unsortedArray.length - 1); setStortStatus(true)}}>Sort</button>
        {sortStatus && <button className="mt-[10px] p-[10px] bg-lime-700 rounded-md text-white" onClick={() => {setUnsortedArray(originalArray); setStortStatus(false)}}>Unsort</button>}
    </div>
    </div>
    </>
  );
}

export default App;
