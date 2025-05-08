import Footer from "./Footer";
import Nav from "./Nav";
import { Link } from "react-router";

export default function MyShittyError() {
    return (
        <>
            <Nav />
            <main>
                <section>
                    <div className="flex flex-col items-center justify-center gap-6 bg-background px-6 py-10 md:py-16 bg-red-100">
                        <div className="w-full max-w-sm text-center">
                            <h1 className="text-shadow-lg text-shadow-slate-700 mx-auto max-w-4xl text-7xl font-medium tracking-tight sm:text-7xl text-white">404</h1>
                            <p className="pt-4">¯\_(ツ)_/¯</p>
                            <p className="pt-4">Something went wrong</p>
                            <p>Try again later</p>
                            <p>Or contact support</p>
                            <p>Or just give up</p>
                            <p>Or head back <Link to="/" className="underline underline-offset-4">home</Link></p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
  