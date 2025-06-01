import { LoginForm } from "@/components/login-form"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { MessageCircleWarning } from "lucide-react";
import { AuthenticatedTemplate, UnauthenticatedTemplate } from '@azure/msal-react';

export default function Signin() {
  return (
    <>
      <section>
        <div className="flex flex-col items-center justify-center gap-6 bg-background px-6 py-10 md:py-16 bg-linear-65 from-grey-300 to-teal-100">
          <div className="w-full max-w-sm">
            <AuthenticatedTemplate>
              <Alert variant="default">
                <MessageCircleWarning />
                <AlertTitle>Heads up!</AlertTitle>
                <AlertDescription>
                  You're already signed in.
                </AlertDescription>
              </Alert>
            </AuthenticatedTemplate>
            <UnauthenticatedTemplate>
              <LoginForm />                 
            </UnauthenticatedTemplate>  
          </div>
        </div>
      </section>
    </>  
  );
}
