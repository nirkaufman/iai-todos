import {useRef, useEffect, useState} from 'react';

export function useApi(url) {
  const [data, setData] = useState([]);
  const [reload, setReload] = useState(false);
  const [loading, setLoading] = useState(false);

  const counter = useRef(0);
  const urlRef = useRef(url);

  useEffect(() => {
    fetch(urlRef.current)
      .then(results => results.json())
      .then(items => {
        if (counter.current > 0) {
          counter.current -= 1;
        }
        setData(items);
      })
    if (counter.current >= 0) {
      counter.current += 1;
    }
  }, [reload])

  useEffect(() => {
    if (counter.current === 0) {
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [counter.current])

  return { data, loading, reload: () => setReload(!reload) };
}