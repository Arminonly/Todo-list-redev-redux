import React from 'react';
import { Button } from 'antd';


const ExitBtn = ({showDrawer}) => {

  return (
    <Button
      style={{ width: '100%', marginBottom: 10 }}
      onClick={showDrawer}
      danger
    >
      Exit
    </Button>
  );
};

export default ExitBtn;
