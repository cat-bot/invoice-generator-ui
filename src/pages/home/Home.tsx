import Nav from '../../components/Nav.tsx'
import Footer from '../../components/Footer.tsx'

function Home() {

    return (
      <>
        <Nav />
        <main>
          <div className="w-full p-2 lg:w-5xl lg:p-4 m-auto bg-teal-100">
            <h1>My app</h1>
            <p>Paragraph 1</p>
            <p>Paragraph 2</p>
          </div>
        </main>
        <Footer />
      </>
    );
  }
  
  export default Home
  