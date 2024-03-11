import React from "react";
import {Outlet} from "react-router-dom";

export const GuestLayout: React.FC = () => {
    return (<>
            <Outlet/>
        </>);
}