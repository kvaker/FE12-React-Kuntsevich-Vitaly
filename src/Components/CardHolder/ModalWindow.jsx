import React, {useEffect, memo, useRef} from "react";
import styled from 'styled-components';

const ModalWindow = (props) => {
    return (
        <div className={"Card modal"}>
            {props.children}
                   </div>
    )
}

export default memo(ModalWindow);