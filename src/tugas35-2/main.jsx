import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import { ApolloProvider } from "@apollo/client/react";

const client = new ApolloClient({
    link: new HttpLink({
        uri: "https://graphql-pokemon2.vercel.app/",
    }),
    cache: new InMemoryCache(),
});

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
    </StrictMode>
);