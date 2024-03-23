import React from "react";
import {Outlet} from "react-router-dom";
import {HeaderSite} from "@/components/HeaderSite.tsx";

export const MainLayout: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen w-full items-stretch overflow-hidden bg-gray-100">
            <HeaderSite/>
            <Outlet/>
        </div>
    );
}