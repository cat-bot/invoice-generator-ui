import Nav from '../components/Nav.tsx'
import Footer from '../components/Footer.tsx'
import { Outlet } from 'react-router';

function MainLayout() {

    return (
      <div className="font-inter antialiased">
        <Nav />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    );
  }
  
  export default MainLayout