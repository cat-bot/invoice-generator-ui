import "./Signout.css";
import { useMsal, useIsAuthenticated, AuthenticatedTemplate, UnauthenticatedTemplate } from '@azure/msal-react';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { MessageCircleWarning } from "lucide-react";

export default function Signout() {

  const { instance } = useMsal();
  const isAuthenticated = useIsAuthenticated();
  
  const handleLogoutRedirect = () => {
      instance.logoutRedirect().catch((error) => console.log(error));
  };
  
  // logout after 2 seconds
  isAuthenticated && setTimeout(handleLogoutRedirect, 2000);

  return (
    <>
      <section>
        <div className="flex flex-col items-center justify-center gap-6 bg-background px-6 py-10 md:py-16 bg-linear-65 from-grey-300 to-purple-100">
          <div className="w-full max-w-sm">
            <AuthenticatedTemplate>
              <h1 className="mx-auto max-w-4xl font-display text-3xl font-medium tracking-tight sm:text-5xl text-shadow-md text-slate-700">
              signing you ooot&nbsp;<span className="blink_me">_</span>
            </h1>
            </AuthenticatedTemplate>
            <UnauthenticatedTemplate>
              <Alert variant="default">
                <MessageCircleWarning />
                <AlertTitle>Heads up!</AlertTitle>
                <AlertDescription>
                  You're already signed out.
                </AlertDescription>
              </Alert>                 
            </UnauthenticatedTemplate>  
          </div>
        </div>
      </section>
    </>  
  );
}
