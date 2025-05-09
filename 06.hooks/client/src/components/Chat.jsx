import { Avatar, Button, List, Skeleton } from 'antd';

const Chat = ({ message }) => {
    return (
        <List
            className='demo-loadmore-list'
            // loading={initLoading}
            itemLayout='horizontal'
            // loadMore={loadMore}
            dataSource={message}
            bordered={true}
            renderItem={(message) => (
                <List.Item
                    actions={[
                        <a key='list-loadmore-edit'>edit</a>,
                        <a key='list-loadmore-more'>more</a>
                    ]}
                >
                    <List.Item.Meta
                        // avatar={<Avatar src={message.avatar} />}
                        title={
                            <a href='https://ant.design'>{message.author}</a>
                        }
                        description={message.content}
                    />
                </List.Item>
            )}
        />
    );
};
export default Chat;
