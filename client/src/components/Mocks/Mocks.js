import axios from "../../lib/axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { List } from "antd";



function MyMocks() {

    const [mocks, setMocks] = useState([]);
    const [submitting, setSubmitting] = useState(false);

    useEffect(() => {
        async function getMocks() {
            setSubmitting(true)
            const { data } = await axios.get('mocky');
            setMocks(data.data);
            setSubmitting(false);
        }
        getMocks();
    }, []);

    // TODO FINISH IT WITH TABLE 

    return (
        <>
            <div className="container">
                <List
                    loading={submitting}
                    itemLayout="vertical"
                    dataSource={mocks}
                    renderItem={mock => (

                        <List.Item key={mock._id}>
                            <Link to={'/mock/' + mock._id}>{mock.mocksUrl}</Link>
                            <p>{mock.httpCode}, {mock.resContentType}, {mock.charset}</p>
                            <a href={"http://localhost:8080/mocky/get/" + mock.mocksUrl} target="_blank">Go to Api</a>
                        </List.Item>
                    )
                    }
                />
            </div>
        </>
    )

}

export default MyMocks;