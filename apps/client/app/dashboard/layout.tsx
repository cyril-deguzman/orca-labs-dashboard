import SideNav from '../../components/side-nav';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen flex flex-row">
      <div className="min-w-[280px] w-[20%]">
        <SideNav />
      </div>
      <div className="p-10 w-[80%] bg-[#FBFCFD] dark:bg-inherit">
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
