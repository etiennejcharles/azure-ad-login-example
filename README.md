This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) based of the article found here by [Daryl Lukas](https://twitter.com/daryllukas) you find a link to the article right [here](https://www.daryllukas.me/azure-ad-authentication-using-msal-and-nextjs-react/). 

This example was also completed with the help [Azure AD Examples](https://github.com/AzureAD/microsoft-authentication-library-for-js/tree/dev/samples/msal-react-samples/nextjs-sample)
## Getting Started

This example allows an Azure Active Directory user to login an via his credentials (for a tenant) app before accesing it.

In order for the example to work you need to include at the root of your project an `.env` file that contains your azure app id info. 

```bash
NEXT_PUBLIC_AZURE_AD_CLIENT_ID=client-id
NEXT_PUBLIC_AZURE_AD_TENANT_ID=tenant-id
```

Then you can run 

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) you should be automatically redirected to a microsoft login page. 


You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
