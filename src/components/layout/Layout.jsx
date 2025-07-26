
import { Outlet } from 'react-router-dom';
import Header from '../header/Header';
import Footer from '../footer/Footer';

const Layout = () => {
  return (
    <div className="pageLayout">
      <Header />
      <main className="contentWrapper">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
