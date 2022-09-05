import axios from "../../lib/axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Table, Tag, Space } from "antd";
import { FileSearchOutlined, EditOutlined } from '@ant-design/icons';
import { timeAgo } from '../../lib/timeAgo';


const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <Link to={"/mock/" + text}>{text}</Link>,
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
                <a href={"http://localhost:8080/mocky/get/" + record.name}><FileSearchOutlined /></a>
                <a><EditOutlined /></a>
                <a>Delete</a>
            </Space>
        ),
    },
];



function MyMocks() {

    let [mocks, setMocks] = useState([]);
    const [submitting, setSubmitting] = useState(false);

    useEffect(() => {
        async function getMocks() {
            setSubmitting(true)
            const { data } = await axios.get('mocky');
            console.log(data)
            setMocks(data.data);
            setSubmitting(false);

        }
        getMocks();
    }, []);

    // TODO FINISH IT WITH TABLE 

    return (
        <>
            <div className="container">
                <Table style={{ maxWidth: "1000px" }} loading={submitting} columns={columns} dataSource={mocks.map(mock => {
                    console.log(mock._id);
                    return {
                        key: mock._id,
                        name: mock.name ? mock.name : mock._id,
                        description: JSON.stringify(mock.httpResBody),
                        date: timeAgo.format(new Date(mock.createdAt)),
                        tags: [mock.httpCode, mock.charset, mock.resContentType],
                    }
                })} />
            </div>
        </>
    )

}

export default MyMocks;