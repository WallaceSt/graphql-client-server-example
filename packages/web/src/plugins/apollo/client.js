import {
  ApolloClient,
  InMemoryCache,
  ApolloLink,
  Observable,
} from "@apollo/client";

const cache = new InMemoryCache();
const loggerLink = new ApolloLink((operation, forward) => {
  new Observable((observer) => {
    const subscription = forward(operation).subscribe({
      next: (result) => {
        console.log("Log", result);
        observer.next(result);
      },
      error: observer.error.bind(observer),
      complete: observer.complete.bind(observer),
    });
    return () => subscription.unsubscribe();
  });
});

const client = new ApolloClient({
    uri: "http://localhost:8000/graphql",
    loggerLink,
  cache,
  connectToDevTools: true,
});

export default client;
