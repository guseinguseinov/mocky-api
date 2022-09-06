import axios from "../../lib/axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Table, Tag, Space, Button, Popover, Empty, message } from "antd";
import { timeAgo } from '../../lib/timeAgo';
import './style.css';



function DeleteMockPrimary() {

    const params = useParams();
    const navigate = useNavigate();
    let [mock, setMock] = useState([]);
    const [submitting, setSubmitting] = useState(false);

    async function deleteMock() {
        try {
            setSubmitting(true);
            console.log(mock.id);
            const deletedElem = await axios.delete(`mocky/delete/${mock.id}`);
        }
        catch (error) {
            if (error.response.data.message == 'Mock deleted successfully!') {
                message.info('Your mock API deleted');
                navigate('/my-mocks');
            } else {
                message.error("Somethin went wrong!");
            }
        }
        finally {
            setSubmitting(false);
        }
    }



    useEffect(() => {



        async function getSingleMock() {
            setSubmitting(true);
            const { data } = await axios.get(`mocky/${params.id}`);

            let httpResBody;
            if (data.data.httpResBody && data.data.resContentType == 'application/json') {
                httpResBody = JSON.stringify(data.data.httpResBody);
            } else {
                httpResBody = data.data.httpResBody ? JSON.stringify(data.data.httpResBody.content) : "";
            }

            setMock({
                name: data.data.name ? data.data.name : data.data._id,
                mocksUrl: data.data.mocksUrl,
                id: data.data._id,
                charset: data.data.charset,
                httpCode: data.data.httpCode,
                resContentType: data.data.resContentType,
                createdAt: timeAgo.format(new Date(data.data.createdAt)),
                httpHeader: data.data.httpHeader ? JSON.stringify(data.data.httpHeader) : '',
                httpResBody,
            });
            setSubmitting(false);
        }

        getSingleMock();

    }, []);


    return (
        <>
            <div className="delete-container">
                <p>Name: {mock.name}</p>
                <p>Created At: {mock.createdAt}</p>
                <p>id: {mock.id}</p>
                <p>HTTP Header: {mock.httpHeader}</p>
                <p>HTTP Response Body: {mock.httpResBody}</p>
                <p>Charset: {mock.charset}</p>
                <p>HTTP Code: {mock.httpCode}</p>
                <p>Response Content Type: {mock.resContentType}</p>

                <Button
                    loading={submitting}
                    block
                    type="danger"
                    onClick={deleteMock}
                >
                    Delete Mock
                </Button>

            </div>

        </>
    )
}

export default DeleteMockPrimary;