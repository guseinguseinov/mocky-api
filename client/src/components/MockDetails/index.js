import Footer from "../Footer/Footer";
import CustomHeader from "../Header/Header";
import ProtectedRoute from "../ProtectedRoute";
import Mocks from "./Mocks";

function Mockdetails() {
    <>
        <ProtectedRoute>
            <CustomHeader />
            <div>
                <Mocks />
            </div>
            <Footer />
        </ProtectedRoute>
    </>

}

export default Mockdetails;

