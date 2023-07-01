import React from "react";

export const Title  = ({name}) =>{
    return(
        <div className="cf ph2-ns">
            <div className="fl w-100 pa2">
                <div className=" pv4"><h1 className={'section-title'} style={{marginTop: '2rem'}}>{name}</h1>
                </div>
            </div>
        </div>
    )
}
