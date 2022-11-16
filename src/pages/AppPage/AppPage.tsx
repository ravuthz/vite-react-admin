import { Button } from 'antd';

import AppLayout from '../../layouts/AppLayout/AppLayout';

const AppPage = () => {
  return (
    <AppLayout style={{ textAlign: 'center' }}>
      <h1>App Page</h1>
      <p>Welcome to AppPage</p>
      <Button onClick={() => alert('hello')}>Hello</Button>
    </AppLayout>
  );
};

export default AppPage;
