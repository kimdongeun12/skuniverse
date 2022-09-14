import React from 'react';
import DropDownPicker from 'react-native-dropdown-picker';


const CustomPicker = ({ onChangeValue, placeholder }) => {
    return (
        <DropDownPicker
            placeholder = {placeholder}
            dropDownDirection = "BOTTOM"
        />
    );
}

export default CustomPicker;