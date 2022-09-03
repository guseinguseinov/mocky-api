import { Button, Form, Input, Select, OptGroup } from 'antd';
import React from 'react';

const NewMockForm = () => {
    return (
        <Form
            name="basic"
            initialValues={{
                remember: true,
            }}
            autoComplete="off"
        >
            <Form.Item
                label="HTTP Status"
                rules={[
                    {
                        required: true,
                        message: 'HTTP Status code required!',
                    },
                ]}
            >
                <Select>
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
                        {/* TODO FINISH THIS  */}
                        <Select.Option value="206">206 - Partial Content</Select.Option>
                        <Select.Option value="207">207 - Multi-Status</Select.Option>
                        <Select.Option value="208">208 - Already Reported</Select.Option>
                        <Select.Option value="226">226 - IM Used</Select.Option>
                    </Select.OptGroup>
                </Select>
            </Form.Item>
            <Form.Item
                label="Username"
                name="username"
                rules={[
                    {
                        required: true,
                        message: 'Please input your username!',
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                ]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}
            >
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};

export default NewMockForm;
