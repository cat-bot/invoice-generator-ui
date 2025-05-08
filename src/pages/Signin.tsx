import { LoginForm } from "@/components/login-form"

export default function Signin() {
  return (
    <>
      <section>
        <div className="flex flex-col items-center justify-center gap-6 bg-background px-6 py-10 md:py-16 bg-emerald-50">
          <div className="w-full max-w-sm">
            <LoginForm />
          </div>
        </div>
      </section>
    </>  
  );
}
