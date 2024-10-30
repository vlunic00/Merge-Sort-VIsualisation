import { useState } from "react"


function Bar({ value, activeList }){

    const [active, setActive] = useState(false);

    if(activeList.includes(value)){
        setActive(true);
    }

    return(
        <>
        <div className="h-[100%] w-[5%] flex-col flex-wrap content-end">
            <p className="text-center">{value}</p>
            <div className={`w-[100%] ${active ? "bg-green-600" : "bg-slate-600"}`} style={{ height: `${value * 20}px`}} />
        </div>
        </>
    )
}

export default Bar