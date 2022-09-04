import { Button, Form, Input, message, Select } from 'antd';
import axios from '../../lib/axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const { TextArea } = Input;

const headerPlaceHolder = `{
    "X-Foo-Bar": "Hello World"
}`

const responseBodyPlaceHolder = `{
  "identity": {
    "id": "b06cd03f-75d0-413a-b94b-35e155444d70",
    "login": "John Doe"
  },
  "permissions": {
    "roles": [
      "moderator"
    ]
  }
}`


const NewMockForm = () => {
    const navigate = useNavigate();
    const [submitting, setSubmitting] = useState(false);

    async function onFinish(values) {

        if (values.httpHeader) {
            try {
                let checkjson = JSON.parse(values.httpHeader)

            } catch (error) {
                return message.error('HTTP header must be Object')
            }
        }


        if (values.resContentType == 'application/json') {
            if (values.httpResBody) {
                try {
                    let checkjson = JSON.parse(values.httpResBody)
                } catch (error) {
                    return message.error('HTTP response body must be Object')
                }
            }
        }

        try {
            setSubmitting(true)
            const res = await axios.post('mocky/add', values)
            message.success("New mocky api generated!")
            // navigate('/my-mocks');
        } catch (error) {
            console.log(error.response.data.message);
            message.error(error.response.data.message);
        } finally {
            setSubmitting(false);
        }
    };

    const onFinishFailed = (errorInfo) => {
        // console.log('Failed:', errorInfo);
        message.error("Something went wrong");
    };

    return (
        <>
            <Form
                name="basic"
                layout="vertical"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                initialValues={{
                    remember: true,
                }}
                autoComplete="off"
            >
                <Form.Item
                    label="HTTP Status"
                    name="httpCode"
                    rules={[
                        {
                            required: true,
                            message: 'HTTP Status code required!',
                        },
                    ]}
                    extra="The HTTP Code of the HTTP response you'll receive."
                >
                    <Select
                        style={{
                            "maxWidth": '280px'
                        }}
                    >
                        <Select.OptGroup label="1xx INFORMATION RESPONSE">
                            <Select.Option value="100">100 - Continue</Select.Option>
                            <Select.Option value="101">101 - Switching Protocols</Select.Option>
                            <Select.Option value="102">102 - Processing</Select.Option>
                        </Select.OptGroup>
                        <Select.OptGroup label="2xx SUCCESS">
                            <Select.Option value="200">200 - Ok</Select.Option>
                            <Select.Option value="201">201 - Created</Select.Option>
                            <Select.Option value="202">202 - Accepted</Select.Option>
                            <Select.Option value="203">203 - Non-Authoritative Information</Select.Option>
                            <Select.Option value="204">204 - No Content</Select.Option>
                            <Select.Option value="205">205 - Reset Content</Select.Option>
                            <Select.Option value="206">206 - Partial Content</Select.Option>
                            <Select.Option value="207">207 - Multi-Status</Select.Option>
                            <Select.Option value="208">208 - Already Reported</Select.Option>
                            <Select.Option value="226">226 - IM Used</Select.Option>
                        </Select.OptGroup>
                        <Select.OptGroup label="3xx REDIRECTION">
                            <Select.Option value="300">300 - Multiple Choices</Select.Option>
                            <Select.Option value="301">301 - Moved Permanently</Select.Option>
                            <Select.Option value="302">302 - Found</Select.Option>
                            <Select.Option value="303">303 - See Other</Select.Option>
                            <Select.Option value="304">304 - Not Modified</Select.Option>
                            <Select.Option value="305">305 - Use Proxy</Select.Option>
                            <Select.Option value="306">306 - Switch Proxy</Select.Option>
                            <Select.Option value="307">307 - Temporary Redirect</Select.Option>
                            <Select.Option value="308">308 - Permanent Redirect</Select.Option>
                        </Select.OptGroup>
                        <Select.OptGroup label="4xx CLIENT ERRORS">
                            <Select.Option value="400">400 - Bad Request</Select.Option>
                            <Select.Option value="401">401 - Unauthorized</Select.Option>
                            <Select.Option value="402">402 - Payment Required</Select.Option>
                            <Select.Option value="403">403 - Forbidden</Select.Option>
                            <Select.Option value="404">404 - Not Found</Select.Option>
                            <Select.Option value="405">405 - Method Not Allowed</Select.Option>
                            <Select.Option value="406">406 - Not Acceptable</Select.Option>
                            <Select.Option value="407">407 - Proxy Authentication Required</Select.Option>
                            <Select.Option value="408">408 - Request Timeout</Select.Option>
                            <Select.Option value="409">409 - Conflict</Select.Option>
                            <Select.Option value="410">410 - Gone</Select.Option>
                            <Select.Option value="411">411 - Length Required</Select.Option>
                            <Select.Option value="412">412 - Precondition Failed</Select.Option>
                            <Select.Option value="413">413 - Request Entity Too Large</Select.Option>
                            <Select.Option value="414">414 - Request-URI Too Long</Select.Option>
                            <Select.Option value="415">415 - Unsupported Media Type</Select.Option>
                            <Select.Option value="416">416 - Requested Range Not Satisfiable</Select.Option>
                            <Select.Option value="417">417 - Expectation Failed</Select.Option>
                            <Select.Option value="418">418 - Im a teapot</Select.Option>
                            <Select.Option value="420">420 - Enhance Your Calm</Select.Option>
                            <Select.Option value="422">422 - Unprocessable Entity</Select.Option>
                            <Select.Option value="423">423 - Locked</Select.Option>
                            <Select.Option value="424">424 - Failed Dependency</Select.Option>
                            <Select.Option value="425">425 - Unordered Collection</Select.Option>
                            <Select.Option value="426">426 - Upgrade Required</Select.Option>
                            <Select.Option value="428">428 - Precondition Required</Select.Option>
                            <Select.Option value="429">429 - Too Many Requests</Select.Option>
                            <Select.Option value="431">431 - Request Header Fields Too Large</Select.Option>
                            <Select.Option value="444">444 - No Response</Select.Option>
                            <Select.Option value="449">449 - Retry With</Select.Option>
                            <Select.Option value="450">450 - Blocked by Windows Parental Controls</Select.Option>
                            <Select.Option value="499">499 - Client Closed Request</Select.Option>
                        </Select.OptGroup>
                        <Select.OptGroup label="5xx SERVER ERRORS">
                            <Select.Option value="500">500 - Internal Server Error</Select.Option>
                            <Select.Option value="501">501 - Not Implemented</Select.Option>
                            <Select.Option value="502">502 - Bad Gateway</Select.Option>
                            <Select.Option value="503">503 - Service Unavailable</Select.Option>
                            <Select.Option value="504">504 - Gateway Timeout</Select.Option>
                            <Select.Option value="505">505 - HTTP Version Not Supported</Select.Option>
                            <Select.Option value="506">506 - Variant Also Negotiates</Select.Option>
                            <Select.Option value="507">507 - Insufficient Storage</Select.Option>
                            <Select.Option value="509">509 - Bandwidth Limit Exceeded</Select.Option>
                            <Select.Option value="510">510 - Not Extended</Select.Option>
                        </Select.OptGroup>
                    </Select>
                </Form.Item>

                <Form.Item
                    label='Response Content Type'
                    name="resContentType"

                    rules={[
                        {
                            required: true,
                            message: 'Response Content Type required!',
                        },
                    ]}
                    extra="The Content-Type header that will be sent with the response."
                >
                    <Select
                        style={{
                            "maxWidth": '300px',
                        }}
                        showSearch
                        placeholder="Search to Select"
                        optionFilterProp="children"
                        filterOption={(input, option) => option.children.includes(input)}
                        filterSort={(optionA, optionB) =>
                            optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                        }
                    >
                        <Select.Option value="application/json">application/json</Select.Option>
                        <Select.Option value="application/x-www-form-urlencoded">application/x-www-form-urlencoded</Select.Option>
                        <Select.Option value="application/xhtml+xml">application/xhtml+xml</Select.Option>
                        <Select.Option value="application/xml">application/xml</Select.Option>
                        <Select.Option value="multipart/form-data">multipart/form-data</Select.Option>
                        <Select.Option value="text/css">text/css</Select.Option>
                        <Select.Option value="text/csv">text/csv</Select.Option>
                        <Select.Option value="text/html">text/html</Select.Option>
                        <Select.Option value="text/json">text/json</Select.Option>
                        <Select.Option value="text/plain">text/plain</Select.Option>
                        <Select.Option value="text/xml">text/xml</Select.Option>
                    </Select>

                </Form.Item>

                <Form.Item
                    label="Charset"
                    name="charset"
                    style={{
                        "maxWidth": "200px"
                    }}
                    rules={[
                        {
                            required: true,
                            message: 'Charset required!',
                        },
                    ]}
                    extra="The Charset used to encode/decode your payload."
                >
                    <Select
                        style={{
                            "maxWidth": "120px"
                        }}
                    >
                        <Select.Option value="UTF-8">UTF-8</Select.Option>
                        <Select.Option value="ISO-8859-1">ISO-8859-1</Select.Option>
                        <Select.Option value="UTF-16">UTF-16</Select.Option>

                    </Select>

                </Form.Item>

                <Form.Item
                    label="HTTP Headers"
                    name="httpHeader"
                    extra="Customize the HTTP headers sent in the response. Define the headers as a JSON object."
                    typeof="JSON"
                >
                    <TextArea rows={5} placeholder={headerPlaceHolder} ></TextArea>

                </Form.Item>

                <Form.Item
                    label="HTTP Response Body"
                    name="httpResBody"
                >
                    <TextArea rows={11} placeholder={responseBodyPlaceHolder} typeof="object"></TextArea>

                </Form.Item>

                <Form.Item>
                    <Button
                        loading={submitting}
                        block
                        type="primary"
                        htmlType="submit"
                    >
                        Generate my HTTP Response
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
};

export default NewMockForm;
