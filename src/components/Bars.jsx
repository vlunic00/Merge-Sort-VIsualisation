import { useState } from "react"
import Bar from "./Bar"


function Bars({ arrayToSort }){

    const [workingArray, setWorkingArray] = useState(arrayToSort)

    return(
        <>
        <div className="flex flex-wrap h-[100vh] w-[100%] gap-[1%] justify-center content-center">
            {workingArray.map((el) => (
                <Bar key={el} />
            ))}
        </div>
        </>
    )
}

export default Bars