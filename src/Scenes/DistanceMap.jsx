import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Route } from "/src/Routing/Rout";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Progress from "../Components/Progress";

const StyledDistanceMap = styled.div`

`

const DistanceMap = (props) => {
    const dispatch = useDispatch();

    return (
        <StyledDistanceMap>
            {props.children}
            <section className={"DistanceMap"}>
                <div className={"Running Distance"}></div>
            </section>
            {/*<Progress/>*/}
        </StyledDistanceMap>
    )
}
export default DistanceMap