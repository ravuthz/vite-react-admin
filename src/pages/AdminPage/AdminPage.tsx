import { PageHeader, Typography } from 'antd';

import AdminLayout from '../../layouts/AdminLayout/AdminLayout';

const { Paragraph, Title, Text } = Typography;

const AdminPage = () => {
  return (
    <AdminLayout style={{ textAlign: 'center' }}>
      <PageHeader
        onBack={() => history.back()}
        title="AdminPage"
        subTitle="Welcome to AdminPage"
        style={{ border: '1px dashed gray' }}
      />
      <Title level={1} style={{ border: '1px dashed gray' }}>
        AdminPage
      </Title>
      <Paragraph style={{ border: '1px dotted gray' }}>Welcome to AdminPage</Paragraph>
      <Text style={{ border: '1px dotted gray' }}>Welcome to AdminPage</Text>
    </AdminLayout>
  );
};

export default AdminPage;
