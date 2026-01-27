import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Tabbar from "./Tabbar";

export default function MainLayout() {
    return (
        <>
            <div className="app-container">
                <Tabbar />

                <div className="app-main-right-container">
                    <Header />
                    <div className="main-container">
                        <Outlet />
                    </div>
                    {/* <Footer /> */}
                </div>

            </div>
        </>
    )
};
