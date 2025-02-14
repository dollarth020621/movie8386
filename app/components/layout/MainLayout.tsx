import React from "react";
import MainHeader from "./MainHeader";
import MainFooter from "./MainFooter";

interface MainLayoutProps {
    children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({children}) => {
    return (
        <div className="min-h-screen flex flex-col bg-gray-100">
            <MainHeader/>
            {children}
            <MainFooter/>
        </div>
    );
};

export default MainLayout;
