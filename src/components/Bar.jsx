

function Bar({ value }){
    return(
        <>
        {console.log("done")}
        <div className="w-[5%] bg-slate-600" style={{ height: `${value * 10}%` }} />
        </>
    )
}

export default Bar