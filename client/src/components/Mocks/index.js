import Footer from "../Footer/Footer";
import CustomHeader from "../Header/Header";
import ProtectedRoute from "../ProtectedRoute";
import MyMocks from "./Mocks";
import './styles.css';

function Mocks() {
    return (
        <>
            <ProtectedRoute>
                <CustomHeader />
                <MyMocks />
                <Footer />
            </ProtectedRoute>
        </>
    )

}

export default Mocks;