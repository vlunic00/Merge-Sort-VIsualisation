import { useState } from "react"
import Bar from "./Bar"


function Bars({ arrayToSort }){

    const [workingArray, setWorkingArray] = useState(arrayToSort)

    return(
        <>
        <div className="flex flex-wrap h-[20%] w-[100%] gap-[1%] justify-center items-end">
            {workingArray.map((el, index) => (
                <Bar key={index} value={el} />
            ))}
        </div>
        </>
    )
}

export default Bars