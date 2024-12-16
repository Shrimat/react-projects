import React, { useState } from "react";
import data from "./data";

function Accordian() {
    const [selected, setSelected] = useState(null);

    const handleClick = (id) => {
        if (id === selected) {
            setSelected(null);
        } else {
            setSelected(id);
        }
    }
    
    return (
        <div className="wrapper">
            <div className="accordian">
                {data && data.length > 0 ? (
                    data.map((item) => (
                        <div className="item">
                            <div onClick={() => handleClick(item.id)} className="title">
                                <h3>{item.question}</h3>
                                <span>+</span>
                            </div>
                            {
                                selected === item.id ? <div className="content">{item.answer}</div> : null
                            }
                        </div>
                    ))
                ) : (
                    <div>No data found.</div>
                )}
            </div>
        </div>
    );
}

export default Accordian;
