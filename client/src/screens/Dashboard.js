import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";

export const Dashboard = () => {

    

    return (
        <>
            <Sidebar />
            <Outlet />
        </>
    )
}