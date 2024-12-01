import React, { useState } from 'react';
import './StudentPrintDocument.css'; // Ensure to create and import the CSS file


const Counter = () => {
    const [pcount, setCount] = useState(1); // Set initial count to 1

    const PPageCount = (e) => {
        setCount(parseInt(e.target.value, 10));
    };

    return (
        <input
        type="number"
        className="form-control"
        id="pageCountInput"
        value={pcount}
        min="1"
        onChange={PPageCount}
        />
    );
};

export default Counter;
