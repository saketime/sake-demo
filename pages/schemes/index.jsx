
import { Button, Card,Table, Tag, Space } from 'antd';
import axios from 'axios';
import { useRouter } from 'next/router';

const { Column } = Table;

const data = [
    {
      name: '3',
      db_name: 'Joe',
      type: 'Black',
      age: 32,
    },
  ];

export default function Schemes(props) {

    const router = useRouter();

  return (
        <Card>
            <Table dataSource={props.data["schemes"]}>
                <Column title="name" dataIndex="name" key="name" />
                <Column title="db_name" dataIndex="db_name" key="db_name" />
                <Column title="type" dataIndex="type" key="scheme_type" />
                <Column
                    title="Action"
                    key="action"
                    render={(text, record) => (
                        <Space size="middle" >
                            <a href="#" key="Edit" onClick={()=>router.push('/schemes/'+text["name"])}>Edit</a>
                            <a key="Delete">Delete</a>
                        </Space>
                    )}
                />
            </Table>
        </Card>
    )
}

export async function getStaticProps() {
    const res = await axios.get('http://localhost:5000/admin/v1/schemes')
    const schemes = res.data
    console.log(res.data)
    return {
        props: {
            data: schemes,
        },
    }
}