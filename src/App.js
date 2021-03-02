import './App.css';
import { useState, useEffect, useRef } from 'react';
import Header from './Header';
import Footer from './Footer';
import List from './List';

function App() {
  const [list, setList] = useState([]);
  const [reload, setReload] = useState(false);
  const [loading, setLoading] = useState(false);
  const [limitReached, setLimitReached] = useState(false);

  const counter = useRef(0);

  // useEffect(() => {
  //   setLoading(true);
  //   fetch('https://jsonplaceholder.typicode.com/todos')
  //     .then(results => results.json())
  //     .then(items => setList(items))
  //     .finally(() => setLoading(false))
  // }, [reload])

  useEffect(() => {
    console.log('list has changed')
  }, [list])

  function refresh() {
    setReload(!reload);
  }

  // todo: After adding 5 items, you can;t add more
  function addItem(item) {      
    if(counter.current === 5) {
      setLimitReached(true);
      return alert('YOU REACHED YOUR LIMIT');
    }
    counter.current += 1;  
    setList([...list, { title: item }]);
  }

  function removeItem(index) {
    list.splice(index, 1);
    setList([...list]);
  }

  function isLoading() {
    if (loading) {
      return <h2>Loading...</h2>;
    } else {
      return <List items={list} onRemoveItem={removeItem} />
    }
  }

  return (
    <section className="todoapp">
      <button onClick={refresh}>reload</button>
      <Header title="TodoApp" 
              onAddItem={addItem} 
              limitReached={limitReached} />
      { isLoading()}
      <Footer count={list.length} />
    </section>
  );
}

export default App;
