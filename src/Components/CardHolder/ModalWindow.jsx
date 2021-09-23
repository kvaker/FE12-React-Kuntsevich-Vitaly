import React, {useEffect, memo, useRef} from "react";

const ModalWindow = (props) => {
    return (
        <div className={"modal"}>
            {props.children}
            </div>
    )
}

export default memo(ModalWindow);