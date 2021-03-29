import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.scss'
import App from './App';
import reportWebVitals from './reportWebVitals';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from 'react-apollo';

console.log(process.env.REACT_APP_GRAPHQL_HOST)

const client = new ApolloClient({
    uri: process.env.REACT_APP_GRAPHQL_HOST,
    headers : {
      "x-api-key" : process.env.REACT_APP_X_API_KEY
    }
  });

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
    <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
