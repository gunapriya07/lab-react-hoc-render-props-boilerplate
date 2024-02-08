import React from "react";
import HOC from "./Hoc";

const LikePost2=(props)=>{
    const{count,handlecount}=props;
    return(
        <div>
            <button  onClick={handlecount}>Like Post{count}</button>
            </div>
    )
}
export default HOC(LikePost2)