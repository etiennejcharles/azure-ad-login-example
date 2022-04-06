import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate, useIsAuthenticated, useMsal
} from '@azure/msal-react';
import { useEffect } from 'react';
import { LOGIN_REQUEST } from '../services/msal';


function WelcomeUser() {
  const { name } = useUser();
  return <p>Welcome, {name}</p>;
}

function useUser() {
  const { accounts } = useUser();
  const isAuthenticated = useIsAuthenticated();
  const name = accounts[0].name;
  return { name, isAuthenticated }
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
        // Do somethin with the tokenResponse, eventually call the API gateway
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
        {/* Show blank page for unthenthicated user for now */}
      </UnauthenticatedTemplate>
      <AuthenticatedTemplate>
        <p>This will only render if a user is signed-in.</p>
        <WelcomeUser />
      </AuthenticatedTemplate>
    </>
  );
}

