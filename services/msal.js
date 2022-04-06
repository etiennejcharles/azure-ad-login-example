import * as msal from "@azure/msal-browser";

const msalConfig = {
    auth: {
        clientId: process.env.NEXT_PUBLIC_AZURE_AD_CLIENT_ID,
        authority: `https://login.microsoftonline.com/${process.env.NEXT_PUBLIC_AZURE_AD_TENANT_ID}`,
        redirectUri: '/'
    }
};


const createAzureAccountMessage = 'you need to create personal azure accont to use this example, https://azure.microsoft.com/en-us/free/search/?&ef_id=EAIaIQobChMIg_PN7Mn_9gIVDVNyCh21xgfLEAAYASAAEgK37_D_BwE:G:s&OCID=AID2200277_SEM_EAIaIQobChMIg_PN7Mn_9gIVDVNyCh21xgfLEAAYASAAEgK37_D_BwE:G:s&gclid=EAIaIQobChMIg_PN7Mn_9gIVDVNyCh21xgfLEAAYASAAEgK37_D_BwE'
if (!process.env.NEXT_PUBLIC_AZURE_AD_CLIENT_ID) {
    throw new Error(`Please set the environment variable NEXT_PUBLIC_AZURE_AD_CLIENT_ID ${createAzureAccountMessage}`);
}
if (!process.env.NEXT_PUBLIC_AZURE_AD_TENANT_ID) {
  throw new Error(`Please set the environment variable NEXT_PUBLIC_AZURE_AD_TENANT_ID ${createAzureAccountMessage}`);
}
const msalInstance = new msal.PublicClientApplication(msalConfig);

export const LOGIN_REQUEST = {
  scopes: ["User.Read"]
};

export { msalInstance }