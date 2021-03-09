import {createContext} from 'react';

// ListContext return Provider component
const ListContext = createContext({
  items: []
})

export default ListContext;