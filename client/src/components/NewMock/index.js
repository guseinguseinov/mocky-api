import { Typography } from 'antd';
import NewMockForm from './NewMock';
import './styles.css';

const { Title } = Typography;


const NewMock = () => {
    return (
        <>
            <div>
                <Title>Design your mock</Title>
            </div>

            <div className='new-mock-container'>
                <NewMockForm />
            </div>
        </>
    );
};

export default NewMock;
