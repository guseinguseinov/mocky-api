import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

import './styles.css';

function Home() {
    return (
        <>
            <Header />

            <h1>Mocky</h1>

            <div className="container">
                <div>
                    <h2 className="subHeader">API Mocks for Free</h2>
                    <p>Don't wait for the backend to be ready,
                        <br /> generate custom API responses with Mocky
                        <br /> and start working on your application straightaway</p>
                </div>
                <div>
                    <img src="mockexample.svg" />
                </div>
            </div>

            <div className="additionalInfo">
                <div className="additionalInfo-main">
                    <h3>No signup</h3>
                    <h3>Start designing your mock</h3>
                    <Link className="new-mock" to="/mock/new">New Mock</Link>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Home;