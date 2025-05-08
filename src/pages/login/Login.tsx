import { LoginForm } from "@/components/login-form"
import Nav from '../../components/Nav.tsx'
import Footer from '../../components/Footer.tsx'

export default function Login() {
  return (
    <>
      <Nav />
      <main>
        <div className="flex h-80 flex-col items-center justify-center gap-6 bg-background px-6 py-10">
          <div className="w-full max-w-sm">
            <LoginForm />
          </div>
        </div>
      </main>
      <Footer />
    </>  
  );
}
