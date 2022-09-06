import Footer from "../Footer/Footer";
import CustomHeader from "../Header/Header";
import ProtectedRoute from "../ProtectedRoute";
import Mocks from "./Mocks";
import { Typography } from 'antd';
const { Title } = Typography;

function EditMock() {
    return (
        <>
            <ProtectedRoute>
                <CustomHeader />
                <div className='title'>
                    <Title >Edit your mock</Title>
                </div>

                <div className='new-mock-container'>
                    <Mocks />
                </div>
                <Footer />
            </ProtectedRoute>
        </>
    )

}

export default EditMock;

