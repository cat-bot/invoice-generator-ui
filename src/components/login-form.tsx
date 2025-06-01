import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Link } from "react-router";

import { useMsal } from '@azure/msal-react';
import { loginRequest } from '@/authConfig';

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {

  const { instance } = useMsal();

  const handleLoginRedirect = () => {
      instance.loginRedirect(loginRequest).catch((error) => console.log(error));
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-center">Sign in to your account</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-3">
                <Button variant="outline" className="w-full cursor-pointer">
                  Sign in with Google
                </Button>
              </div>
              <div className="flex flex-col gap-3">
                <Button variant="outline" className="w-full cursor-pointer" onClick={handleLoginRedirect}>
                  Sign in with Microsoft
                </Button>
              </div>
            </div>
            <div className="mt-6 text-center text-sm">
              Don&apos;t have an account?{" "}
              <Link to="/auth/register" className="underline underline-offset-4">Register</Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
