import React, { useState } from 'react';
import { Popover, Button, Input } from 'antd';
import { MessageTwoTone } from '@ant-design/icons';

const PopupChatbot: React.FC = () => {
  const [visible, setVisible] = useState(false);

  const handleVisibleChange = (newVisible: boolean) => {
    setVisible(newVisible);
  };

  return (
    <Popover
      content={
        <div className='w-[18rem] md:w-[20rem] h-[24rem]'>
          <div style={{ height: '340px', overflowY: 'auto', borderBottom: '1px solid #f0f0f0', marginBottom: '10px' }}>
            {/* Chat messages will go here */}
            <p>Welcome to Medynex! How can I assist you today?</p>
          </div>
          <Input.Search
            placeholder="Type your message..."
            enterButton="Send"
            onSearch={(value) => console.log(value)}
          />
        </div>
      }
      title="Chatbot"
      trigger="click"
      open={visible}
      onOpenChange={handleVisibleChange}
      placement="topRight"
    >
      <Button
        type="primary"
        shape="circle"
        className='fixed bottom-[50px] right-[22px] z-10 h-12 w-12'
      >
        <MessageTwoTone className='text-xl md:text-2xl'/>
      </Button>
    </Popover>
  );
};

export default PopupChatbot;
