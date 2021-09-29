import React from "react";
import { Link } from "react-router-dom";

const MainLayout = (props) => {
    return (
        <div className={"app"}>
            <div className={"header"}>
                Header
            </div>
            <div className={"contentWithNavbar"}>
                <div className={"navBar"}>
                    <Link to={"/cards"}>
                        Cards
                    </Link>
                </div>
            </div>
            <div className={"content"}>
                {props.children}
            </div>
            <div className={"header"}>
                Footer
            </div>
        </div>
    )
};

export default MainLayout