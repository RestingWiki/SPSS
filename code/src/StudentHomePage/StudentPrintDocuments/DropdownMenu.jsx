import React, { useEffect } from 'react';
import $ from 'jquery'; // Import jQuery
import Popper from 'popper.js'; // Import Popper.js
import 'bootstrap/dist/css/bootstrap.min.css'; // Optional: Bootstrap for styling

const DropdownWithJQuery = ({ options, selectedOption, onOptionChange }) => {
    useEffect(() => {
        // Initialize the dropdown using jQuery and Popper.js
        $(document).ready(function () {
            $('[data-toggle="dropdown"]').dropdown();
        });
    }, []);

    return (
        <div className="dropdown">
            <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
            >
                {selectedOption || 'Select an option'}
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                {options.map((option, index) => (
                    <a
                        key={index}
                        className="dropdown-item"
                        href="#"
                        onClick={() => onOptionChange(option)}
                    >
                        {option}
                    </a>
                ))}
            </div>
        </div>
    );
};

export default DropdownWithJQuery;
