import React, { useState, useMemo } from "react";
import "./CheckBox.css";

const CheckBox = (props) => {
    console.log("Inside CheckBox");

    const [style, setStyle] = useState(false);

    const [items, setItems] = useState([]);

    const handleShowItems = (event) => {
        // event.preventD
        //  console.log('handleShowItems')
        setStyle(!style);
        //console.log('handleShowItems end')
    };

    const handleOnCheckBoxClick = (event, lable) => {
        // console.log('event :', event.target.checked, 'lable :', lable)
        let copiedItems = items.slice();
        if (event.target.checked) copiedItems.push(lable);
        if (!event.target.checked) copiedItems.pop(lable);
        //  console.log('copiedItems ', copiedItems, 'items ', items)

        setItems(copiedItems);

        props.onChange(copiedItems);
    };

    const options = useMemo(() => props.options.map((option, index) => {

        // console.log('index', index, option)

        return (
            <li key={index}>
                <input
                    type="checkbox"

                    onClick={(event) => handleOnCheckBoxClick(event, option)}
                />
                {option.label}
            </li>
        );
    }), [props.options, handleOnCheckBoxClick]);


    return (
        <div id="list1" className="dropdown-check-list" onClick={(event) => { }}>
            <span className="anchor" onClick={handleShowItems}>
                Select Fruits
      </span>

            <ul className="items" style={{ display: style ? "block" : "none" }}>
                {
                    options}
            </ul>
        </div>
    );
};

export default CheckBox;
