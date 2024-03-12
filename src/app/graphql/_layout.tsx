import { ReactNode } from "react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

type LayoutProps = {
  children: ReactNode;
};

// const client = new ApolloClient({
//   uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT!,
//   cache: new InMemoryCache(),
// });

const Layout = ({ children }: LayoutProps) => {
  return <div>{children}</div>;
};

export default Layout;
