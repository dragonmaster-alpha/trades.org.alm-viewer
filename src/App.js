import './styles/main.scss';
import 'rsuite/dist/styles/rsuite-default.css';
import './styles/typography.scss'
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import NavBar from './components/common/navbar';
import { useState } from 'react';
import Hero from './components/hero';

const GET_SCRIPTS = gql`
query Scripts {
  getScripts {
      id
      name
      variants {
          definition
          description
          id
          name
      }
  }
}
`;


function App() {
  const [status,setLoading] = useState(true)
  const [content,setData] = useState(null)
  return (
    <Query query={GET_SCRIPTS}>
    {({ loading, error, data }) => {
      console.log("data",data)
      if (error) return `Error! ${error.message}`;
      if (data){
        setLoading(false)
        setData(data)
      } 

      return (
        <div >
          <NavBar/>
         
          <Hero data={content} loading={status}/>
        </div>
      );
    }}
  </Query>
  );
}

export default App;
