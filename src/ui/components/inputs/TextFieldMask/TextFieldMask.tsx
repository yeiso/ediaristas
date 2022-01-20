import React from "react";
import InputMask from 'react-input-mask';
import TextFieldStyled from 'ui/components/inputs/TextField/TextField';

const TextFieldMask = (props) => {
   return <InputMask>
    { () => { 
        return <TextFieldStyled {... props} />
    }}
    </InputMask>
}

export default TextFieldMask;