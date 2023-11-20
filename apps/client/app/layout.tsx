import './global.css';
import { ThemeProvider } from '../components/theme-provider';
import SideNav from '../components/side-nav';

export const metadata = {
  title: 'Orca Labs',
  description: 'Inventory and User Dashboard',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
