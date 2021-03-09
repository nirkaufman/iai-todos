## Home Assignment

### Goal: Implement a custom React hook and use it to complete the application

1. create a hook function `useCollection`.
2. The function should be used as follows:

```javascript 
  function App () {
    const {items, addItem, removeItem, reloadItems, isLoading} = useCollection('https://link-to-todos')
  } 

```

3. The hook function should use internally:
 - `useState`, `useEffect`, and `useRef`

4. The function should use the provided url to fetch otems from API. The
5. The function should expose functions to update the items, and reload
