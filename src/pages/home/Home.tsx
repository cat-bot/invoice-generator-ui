import Nav from '../../components/Nav.tsx'
import Footer from '../../components/Footer.tsx'

function Home() {

    return (
      <>
        <Nav />
        <main>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 pb-16 text-center lg:pt-22">
            <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">invoicing made simple</h1>
          </div>
          <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center lg:pt-32">
            <p>Paragraph 1</p>
            <p>Paragraph 2</p>
          </section>
        </main>
        <Footer />
      </>
    );
  }
  
  export default Home
  