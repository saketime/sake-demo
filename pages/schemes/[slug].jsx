
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Router, { useRouter } from 'next/router';


import { Button, Card, Table, Input, Form, Space,Select } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

const Scheme = (props) => {

    const [form] = Form.useForm();
    // const [person, setPerson] = useState({})
    // const [ field, setField ] = useFields([]);

    const onFormLayoutChange = (e) => {
        // setComponentSize(size);
        // console.log(e)    
    };

    const onFinish = values => {
        console.log('Received values of form:', values);
    };
    const handleChange = (e, key) => {

        // console.log(e)

        let fields = form.getFieldValue(['fields'])
        console.log(fields)

        form.setFieldsValue({'fields':fields.slice() })
        // form.setFieldsValue({ sights: [] });
    };



    const getRelation = (field, restField, name, fieldKey) => {
        console.log(field)
        // form.setFieldValue
        // switch(field["type"]){
        //     case "int":
        //         console.log(11111)
        //         return(
        //         <Form.Item
        //             {...restField}
        //             fieldKey={[fieldKey, 'last']}
        //             rules={[{ required: true, message: 'Missing last name' }]}
        //         >
        //             <Input placeholder="Last Name" />
        //         </Form.Item>
        //         )
        //     default:
        //          return (<></>)
        // }
    }

    return (
        <Card>
            <Form
                // labelCol={{ span: 4 }}
                // wrapperCol={{ span: 14 }}
                form={form}
                layout="horizontal"
                // initialValues={{ size: "componentSize" }}
                onValuesChange={onFormLayoutChange}
                onFinish={onFinish}
            >
                <Form.Item 
                    label="Name"
                    name={['name']}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name={['db_name']}
                    label="DBName"
                >
                    <Input />
                </Form.Item>
                <Form.Item label="Type">
                    <Select>
                        <Select.Option value="user">user</Select.Option>
                        <Select.Option value="system">system</Select.Option>
                    </Select>
                </Form.Item>
                <Form.List name="fields" >
                    {(fields, { add, remove }) => (
                        <>
                            {fields.map(({ key, name, fieldKey, ...restField }) => (
                                <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                                    <Form.Item
                                        name={[name, 'first']}
                                        fieldKey={[fieldKey, 'first']}
                                        rules={[{ required: true, message: 'Missing first name' }]}
                                    >
                                        <Input placeholder="First Name" />
                                    </Form.Item>
                                    <Form.Item
                                        {...restField}
                                        name={[name, 'last']}
                                        fieldKey={[fieldKey, 'last']}
                                        rules={[{ required: true, message: 'Missing last name' }]}
                                    >
                                        <Input placeholder="Last Name" />
                                    </Form.Item>
                                    <Form.Item
                                        {...restField}
                                        name={[name, 'type']}
                                        fieldKey={[fieldKey, 'type']}
                                        rules={[{ required: true, message: 'Missing sight' }]}
                                        >
                                        <Select style={{ width: 130 }} onChange={(e)=>handleChange(e, key)}>
                                            <Select.Option value="int">int</Select.Option>
                                            <Select.Option value="text">text</Select.Option>
                                        </Select>
                                    </Form.Item>
                                    <Form.Item shouldUpdate={(prevValues, curValues) => prevValues.additional !== curValues.additional}>
                                    {
                                        console.log(form.getFieldValue(['fields', name]))
                                    }
                                    {
                                       form.getFieldValue(['fields', name, "type"])
                                    }
                                    {/* {
                                        getRelation(form.getFieldValue(['fields', name]), restField, name, fieldKey)
                                    } */}

                                    </Form.Item>
                                    <MinusCircleOutlined onClick={() => remove(name)} />
                                </Space>
                            ))}
                            <Form.Item>
                                <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                    Add field
                                </Button>
                            </Form.Item>
                        </>
                    )}
                </Form.List>
                {/* <Form.Item>
                    <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                        Add field
                    </Button>
                </Form.Item> */}
                <Form.Item>
                    <Button type="primary" htmlType="submit">Submit</Button>
                </Form.Item>
            </Form>
        </Card>
    )
}


// export async function getServerSideProps(context) {
//     const schemeName = context.query["slug"]

//     const res = await axios.get('http://localhost:5000/admin/v1/schemes/'+schemeName)
//     console.log(res.data)

//     return {
//         props: {
//             scheme: res.data.scheme,
//         },
//     }
// }


export default Scheme;