'use client'
import React from "react";

const ActionsGroupe=({
     id,
     uuid,
   handleShowDetail,
   handleDisponibiliser,
   handleShowDocument,

})=>{


      
    return(
        <>
  
      <>
     <div className="bg-slate-800 w-[8.5rem] h-[5.5rem] ml-[-5rem] rounded-sm">
    <div className="w-full h-full flex flex-col space-y-2 my-1">
        <button
        
        className="w-full text-white hover:bg-slate-600" onClick={()=>handleShowDetail(id)}
      >
          detail 
        </button>
      </div>
    </div>
    <div>
    

     </div>
     </>
    

     </>
    )
}
export default ActionsGroupe