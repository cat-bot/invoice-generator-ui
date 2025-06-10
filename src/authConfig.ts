import { Configuration, PopupRequest } from "@azure/msal-browser";

// Config object to be passed to Msal on creation
export const msalConfig: Configuration = {
    auth: {
        clientId: 'd7980a41-b541-4a73-a14f-a1c24a7d6df7', // This is the ONLY mandatory field that you need to supply.
        authority: 'https://login.microsoftonline.com/257c2e72-e660-4223-97d6-b2fb24e11781', // Replace the placeholder with your tenant info
        redirectUri: 'http://localhost:5173', // Points to window.location.origin. You must register this URI on Microsoft Entra admin center/App Registration.
        postLogoutRedirectUri: "http://localhost:5173",
    },
    cache: {
        cacheLocation: 'sessionStorage', // Configures cache location. "sessionStorage" is more secure, but "localStorage" gives you SSO between tabs.
        storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    },
    system: {
        allowPlatformBroker: false, // Disables WAM Broker
    },
};

// Add here scopes for id token to be used at MS Identity Platform endpoints.
export const loginRequest: PopupRequest = {
    scopes: ["User.Read"],
};
