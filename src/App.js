import './App.css';
import Header from './Header';
import Footer from './Footer';
import List from './List';
import {useApi} from './use-api'
import { useEffect } from 'react';

function App() {
  const {addItem, removeItem, collection} = useResource('customers'); 
  

  return (
    <section className="todoapp">
      <button onClick={reload}>reload</button>
      <Header title="TodoApp"/>
      { loading ? <h2>Loading...</h2> :<List items={collection} /> }
      <Footer count={data.length} />
    </section>
  );
}

export default App;
