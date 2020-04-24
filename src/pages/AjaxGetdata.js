import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
function AjaxGetdata () {
  const [data, setData] = useState({ hits: [] });
  const [query, setQuery] = useState('redux');
  const [url, setUrl] = useState(
    'https://hn.algolia.com/api/v1/search?query=redux',
  );
  const [isLoading, setIsLoading] = useState(false);
  const fetchData = useCallback(async () => {
    setIsLoading(true);
    const result = await axios(url);
    setData(result.data);
    setIsLoading(false);
  }, [url]);
  useEffect(() => {
    fetchData();
  }, [url, query, fetchData]);
  return (
    <div style={{ border: '1px solid blue', padding: '20px', height: '500px', float: 'left' }}>
      <h3>ajax例子</h3>
      <input
        type="text"
        value={query}
        onChange={event => setQuery(event.target.value)}
      />
      <button
        type="button"
        onClick={() =>
          setUrl(`https://hn.algolia.com/api/v1/search?query=${query}`)
        }
      >
        Search
    </button>
      {
        isLoading ? (
          <div> Loading ...</div>
        ) : (
            <ul>
              {
                data.hits.map(item => (
                  <li key={item.objectID} >
                    <a href={item.url} > {item.title}</a>
                  </li>
                ))
              }
            </ul >
          )
      }
    </div>
  );
}
export default AjaxGetdata;
