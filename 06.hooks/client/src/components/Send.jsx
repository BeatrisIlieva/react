import { Input, Button, message } from 'antd';
import { SendOutlined } from '@ant-design/icons';
import useForm from '../hooks/useForm';

const url = 'http://localhost:3030/jsonstore/messages';

export default function Send() {
    const [messageApi, contextHolder] = message.useMessage();

    const formSubmit = async (values) => {
        await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                author: 'John',
                content: values.message
            })
        });
    };

    const { values, changeHandler, submitHandler } = useForm(
        {
            message: ''
        },
        formSubmit
    );

    messageApi.open({
        type: 'success',
        content: 'Message sent successfully'
    });

    return (
        <>
            {contextHolder}
            <form onSubmit={submitHandler}>
                <Input
                    name='message'
                    size='large'
                    placeholder='large size'
                    prefix={<SendOutlined />}
                    value={values.message}
                    onChange={changeHandler}
                />
                <Button type='primary' htmlType='submit'>
                    Primary Button
                </Button>
            </form>
        </>
    );
}
