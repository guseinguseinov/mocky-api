import { Typography } from 'antd';
import Footer from '../Footer/Footer';
import CustomHeader from '../Header/Header';
import ProtectedRoute from '../ProtectedRoute';
import NewMockForm from './NewMock';
import './styles.css';

const { Title } = Typography;


const NewMock = () => {
    return (
        <>
            <ProtectedRoute>
                <div>
                    <CustomHeader />
                    <div className='title'>
                        <Title>Design your mock</Title>
                    </div>

                    <div className='new-mock-container'>
                        <NewMockForm />
                    </div>

                    <Footer />
                </div>
            </ProtectedRoute>
        </>
    );
};

export default NewMock;
