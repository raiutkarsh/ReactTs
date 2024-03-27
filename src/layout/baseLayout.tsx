import React, {ReactNode} from "react";
import LeftNav from "./leftNav";
import {BrowserRouter, Routes} from "react-router-dom";
import './BaseLayout.scss'
import Header from "./Header";
import Main from "./Main";
const BaseLayout = () => {
    const routeParams = [
        {
            label:"Home",
            route:"home"
        },{
            label:"About",
            route:"about"
        }
    ]
    return (
        <div>
            {/* Common header */}
            <Header />
            {/* Content area */}
            <div className="layout">
                <BrowserRouter>
                <LeftNav items={routeParams} />
                </BrowserRouter>
                <div className="content">
                    <Header />
                    <Main />
                </div>
            </div>
            <div style={{display:"flex"}}>
                <div className="leftNav">

                </div>
            </div>

            {/* Common footer */}
            <footer>
                I am footer
                {/* Add footer content */}
            </footer>
        </div>
    );
};

export default BaseLayout;