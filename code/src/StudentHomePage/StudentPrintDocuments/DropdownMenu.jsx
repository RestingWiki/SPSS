import React, { useState } from 'react';
import './StudentPrintDocument.css'; // Ensure to create and import the CSS file



const Dropdown = ({ options, selectedOption, onOptionChange }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option) => {
        onOptionChange(option);
        setIsOpen(false);
    };

    return (
        <div className="dropdown">
            <button className="dropdown-toggle" onClick={toggleDropdown}>
                {selectedOption || 'Select an option'}
            </button>
            {isOpen && (
                <div className="dropdown-menu">
                    {options.map((option, index) => (
                        <div key={index} className="dropdown-item" onClick={() => handleOptionClick(option)}>
                            {option}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Dropdown;
