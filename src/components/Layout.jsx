import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function Layout(){
    return(
        <>
        <div className="flex flex-col min-h-screen">
        <Header></Header>
        <main className="flex-grow">
        <Outlet></Outlet>
        </main>
        <Footer></Footer>
        </div>
        </>
    )
}

export default Layout