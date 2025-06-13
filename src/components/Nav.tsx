import { Link } from "react-router";
import { AuthenticatedTemplate, UnauthenticatedTemplate, useIsAuthenticated, useMsal } from '@azure/msal-react';
import Hamburger from "@/components/ui/hamburger";
import Avatar from "./ui/avatar";
import DefaultAvatar from "./ui/defaultavatar";
import { useEffect, useState } from "react";
import { InteractionStatus } from "@azure/msal-browser";

const Nav = () => {

  const isAuthenticated = useIsAuthenticated();
  const { instance, inProgress, accounts } = useMsal();
  const activeAccount = instance.getActiveAccount();
  const [avatarUrl, setAvatarUrl] = useState("");

  const navLinks = isAuthenticated ? 
  [ 
    { name: "Dashboard", href: "/dashboard" },
    { name: "Sign out", href: "/auth/signout" } 
  ] :
  [ 
    { name: "Sign in", href: "/auth/signin" } 
  ];

  useEffect(() => {

    if (isAuthenticated && !avatarUrl && inProgress === InteractionStatus.None) {

      const accessTokenRequest = {
        scopes: ["user.read"],
        account: accounts[0],
      };

      instance
        .acquireTokenSilent(accessTokenRequest)
        .then((accessTokenResponse) => {

          const accessToken = accessTokenResponse.accessToken;

          // Call your API with token
          const headers = new Headers();
          const bearer = "Bearer " + accessToken;
          headers.append("Authorization", bearer);
          const options = {
                method: "GET",
                headers: headers
          };

          const graphEndpoint = "https://graph.microsoft.com/v1.0/me/photo/$value" ;

          return fetch(graphEndpoint, options);
        })
        .then((response) => {
          if (!response.ok) {
           throw new Error('Network response was not ok');
          }        
          return response.blob();
        })
        .then((blob) => {
          const imageUrl = URL.createObjectURL(blob);
          setAvatarUrl(imageUrl);
        })
        .catch((error) => {
          // if (error instanceof InteractionRequiredAuthError) {
          //   instance
          //     .acquireTokenPopup(accessTokenRequest)
          //     .then(function (accessTokenResponse) {
          //       // Acquire token interactive success
          //       let accessToken = accessTokenResponse.accessToken;
          //       // Call your API with token
          //       callApi(accessToken).then((response) => {
          //         setApiData(response);
          //       });
          //     })
          //     .catch(function (error) {
          //       // Acquire token interactive failure
          //       console.log(error);
          //     });
          // }
          console.log(error);
        });
    }
  }, [instance, accounts, inProgress, avatarUrl, isAuthenticated]);

  return (
    <>   
      <header className="py-3 md:py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="relative z-50 flex justify-between">
            <div className="flex items-baseline md:gap-x-4">
              <Link to="/" className="font-mono p-3 text-2xl text-teal-400 hover:text-teal-500 duration-150">
                <span className="hidden md:inline">_invoicy_</span>
                <span className="inline md:hidden">_$_</span>
              </Link>
              <Link
                className="hidden md:inline rounded-full px-3 py-2 text-sm-base text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                to="#features">
                Features
              </Link>
            </div>
            <div className="flex items-center gap-x-4 md:gap-x-6">
              <div className="hidden sm:block">
                { navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="inline-block rounded-full px-3 py-2 text-sm-base text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              <div>
                <AuthenticatedTemplate>
                  <Avatar src={ avatarUrl } title= { activeAccount?.name  } />
                </AuthenticatedTemplate>
                <UnauthenticatedTemplate>
                  <Link to={ "/auth/signin" }>
                    <DefaultAvatar />    
                  </Link>                
                </UnauthenticatedTemplate>                
              </div>
              <div className="sm:hidden mr-2">
                <Hamburger sidebarLinks={navLinks} />
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Nav
