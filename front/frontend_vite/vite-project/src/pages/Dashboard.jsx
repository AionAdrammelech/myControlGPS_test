import { useNavigate } from "react-router-dom";
import { getToken } from "../services/AuthService/tokenRetrievalService";

function Dashboard(){
    const navigate = useNavigate();
    const user = getToken();
    if (!user ) {
        navigate("/login")
    }
    return (
        <>
            <p>DASHBOARD</p>
        </>
    );
}
export default Dashboard;