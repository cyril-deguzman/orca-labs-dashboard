import DashboardLayout from './layout';
import type { ReactElement } from 'react';
import React from 'react';

const Dashboard = () => {
  return <div>MANAGEU USERS</div>;
};

Dashboard.getLayout = (page: ReactElement) => (
  <DashboardLayout>{page}</DashboardLayout>
);

export default Dashboard;
