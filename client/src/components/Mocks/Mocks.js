import axios from "../../lib/axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Table, Tag, Space, Button, Popover } from "antd";
import { FileSearchOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { timeAgo } from '../../lib/timeAgo';
import './styles.css';

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (_, text) => <Link to={"/mock/" + text.id}>{text.name}</Link>,
    },
    {
        title: 'Description',
        dataIndex: 'description',
        key: 'description',
        className: "description"
    },
    {
        title: 'Date',
        dataIndex: 'date',
        key: 'Date',
    },
    {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
        render: (_, { tags }) => (
            <>
                {tags.map((tag) => {
                    let color = tag.length > 5 ? 'geekblue' : 'green';

                    return (
                        <Tag color={color} key={tag}>
                            {tag}
                        </Tag>
                    );
                })}
            </>
        ),
    },
    {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
            <Space style={{ "display": "flex", "justifyContent": "space-between" }} size="middle">
                <a href={`${process.env.REACT_APP_BACKEND_URL}/mocky/get/` + record.mocksUrl}><Button> <FileSearchOutlined /></Button></a>
                <Link to={"/mock/" + record.id}><Button type="dashed"> <EditOutlined /></Button></Link>
                <Link to={"/mock/delete/" + record.id}><Button danger><DeleteOutlined /></Button></Link>
            </Space>
        ),
    },
];



function MyMocks() {

    let [mocks, setMocks] = useState([]);
    const [submitting, setSubmitting] = useState(false);

    useEffect(() => {
        async function getMocks() {
            setSubmitting(true);
            const { data } = await axios.get('mocky');
            setMocks(data.data);
            setSubmitting(false);
        }
        getMocks();
    }, []);


    return (
        <>
            <div className="container">
                <Table loading={submitting} columns={columns} dataSource={mocks.map(mock => {
                    let popoverText = !JSON.stringify(mock.httpResBody) ? "No Response Body" : JSON.stringify(mock.httpResBody);
                    return {
                        key: mock._id,
                        id: mock._id,
                        mocksUrl: mock.mocksUrl,
                        name: mock.name ? mock.name : mock._id,
                        description: <Popover placement="bottom" content={popoverText}><Button>Hover To See</Button></Popover>,
                        date: timeAgo.format(new Date(mock.createdAt)),
                        tags: [mock.httpCode, mock.charset, mock.resContentType],
                    }
                })}
                >

                </Table>

            </div>
        </>
    )

}

export default MyMocks;