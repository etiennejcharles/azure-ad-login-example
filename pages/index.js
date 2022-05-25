import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate, useIsAuthenticated, useMsal
} from '@azure/msal-react';
import { useEffect } from 'react';
import { LOGIN_REQUEST } from '../services/msal';


function WelcomeUser() {
  const {name} = useUser();
  return <p>Welcome, {name}</p>;
}



function useAutoRedirectionAuthentication() {
  const { instance } = useMsal();
  const isAuthenticated = useIsAuthenticated();
  useEffect(() => {
    async function initHandleRedirect() {
      const tokenResponse = await instance.handleRedirectPromise();
      if (!tokenResponse) {
        instance.loginRedirect(LOGIN_REQUEST);
      } else {
        // Do something with the tokenResponse, eventually call the API gateway
      }

    }
    if (!isAuthenticated) {
      initHandleRedirect();
    }
  }, []);
}

export default function Home() {
  // redirects user to login page if not authenticated
  useAutoRedirectionAuthentication();
  return (
    <>
      <UnauthenticatedTemplate>
        {/* Show blank page for unauthenticated user for now */}
      </UnauthenticatedTemplate>
      <AuthenticatedTemplate>
        <p>This will only render if a user is signed-in.</p>
        <WelcomeUser />
      </AuthenticatedTemplate>
    </>
  );
}


function useUser() {
  const { accounts } = useMsal();
  const name = accounts[0].name;
  return {name};
}