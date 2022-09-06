import CustomHeader from "../Header/Header";
import { Typography } from 'antd'
import Footer from "../Footer/Footer";
import ProtectedRoute from "../ProtectedRoute";
import DeleteMockPrimary from "./DeleteMockPrimary";

const { Title } = Typography;

function DeleteMock() {

    return (
        <>
            <ProtectedRoute>
                <CustomHeader />
                <div className='title'>
                    <Title >Delete Your Mock</Title>
                </div>

                <div className='new-mock-container'>
                    <DeleteMockPrimary />
                </div>
                <Footer />
            </ProtectedRoute>
        </>
    )
}

export default DeleteMock;