import React from 'react';
import {
  Layout,
  Card,
  Statistic,
  Row,
  Col,
  Table,
  Typography,
} from 'antd';

const { Header, Content } = Layout;
const { Title } = Typography;

const dataSource = [
  {
    key: '1',
    name: 'John Doe',
    role: 'Moderator',
    status: 'Active',
  },
  {
    key: '2',
    name: 'Jane Smith',
    role: 'Editor',
    status: 'Pending',
  },
];

const columns = [
  {
    title: 'Nombre',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Rol',
    dataIndex: 'role',
    key: 'role',
  },
  {
    title: 'Estado',
    dataIndex: 'status',
    key: 'status',
  },
];

const AdminDashboard: React.FC = () => {
  return (
    <Layout style={{ paddingInline: 110, background: '#fff' }}>
      <Layout style={{ background: '#fff'}}>
        <Header style={{ background: '#fff', padding: 0, paddingLeft: 24 }}>
          <Title level={3}>Panel de Administración</Title>
        </Header>

        <Content style={{ margin: '24px 16px', padding: 24, background: '#fff' }}>
          <Row gutter={[16, 16]}>
            <Col span={8}>
              <Card>
                <Statistic title="Usuarios activos" value={112} />
              </Card>
            </Col>
            <Col span={8}>
              <Card>
                <Statistic title="Nuevos registros" value={23} />
              </Card>
            </Col>
            <Col span={8}>
              <Card>
                <Statistic title="Reportes abiertos" value={5} />
              </Card>
            </Col>
          </Row>

          <Title level={4} style={{ marginTop: 32 }}>Últimos usuarios</Title>
          <Table dataSource={dataSource} columns={columns} pagination={false} />
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminDashboard;
