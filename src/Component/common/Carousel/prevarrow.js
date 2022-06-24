import React from 'react'

const Prevarrow = (props) => {
    const { className, style, onClick } = props;
  return (
    <div
        className={className}
        style={{ ...style, 
        display: "flex", 
        background: "white", 
        justifyContent:"center", 
        alignItems: "centre" ,
        borderRadius: "50%" , 
        padding:"4px",
     }}
        onClick={onClick}>
    </div>
  )
}

export default Prevarrow;