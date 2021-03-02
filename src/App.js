import './App.css';
import { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import List from './List';

function App() {
  const [list, setList] = useState([]);
  const [reload, setReload] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {    
    setLoading(true);
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(results => results.json())
      .then(items => setList(items))
      .finally(() => setLoading(false))
  }, [reload])

  useEffect(() => {
    console.log('list has changed')
  }, [list])

  function refresh() {
      setReload(!reload);
  }

  function addItem(item) {
    setList([...list, { title: item }]);
  }

  function removeItem(index) {
    list.splice(index, 1);
    setList([...list]);
  }

  function isLoading() {
    if(loading) {
      return <h2>Loading...</h2>;
    } else {
      return <List items={list} onRemoveItem={removeItem} />
    }
  }

  return (
    <section className="todoapp">
      <button onClick={refresh}>Reload</button>
      <Header title="TodoApp" onAddItem={addItem} />

      { isLoading() }

      <Footer count={list.length} />
    </section>
  );
}

export default App;
