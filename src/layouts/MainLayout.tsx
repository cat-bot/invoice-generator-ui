import Nav from '../components/Nav.tsx'
import Footer from '../components/Footer.tsx'
import { Outlet } from 'react-router';

function MainLayout() {

    return (
      <>
        <Nav />
        <main>
          <Outlet />
        </main>
        <Footer />
      </>
    );
  }
  
  export default MainLayout