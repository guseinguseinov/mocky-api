import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import CustomHeader from "../Header/Header";
import axios from "../../lib/axios";
import './styles.css';
import { useEffect, useState } from "react";


function Home() {
    const [token, setToken] = useState(null);

    useEffect(() => {
        async function authenticateToken() {
            const { data } = await axios.get('/');
            setToken(data.data);
            localStorage.setItem("userToken", data.data);
        }

        authenticateToken();
    }, []);



    return (
        <>
            <div className="main">
                <CustomHeader />
                <h1>Mocky</h1>

                <div className="container">
                    <h2 className="subHeader">API Mocks for Free</h2>
                    <p>Don't wait for the backend to be ready,
                        <br /> generate custom API responses with Mocky
                        <br /> and start working on your application straightaway</p>
                </div>

                <div className="additionalInfo">
                    <div className="additionalInfo-main">
                        <h3>No signup</h3>
                        <h3>Start designing your mock</h3>
                        <Link className="new-mock" to="/mock/new">New Mock</Link>
                    </div>
                </div>

                <Footer />
            </div>
        </>
    )
}

export default Home;