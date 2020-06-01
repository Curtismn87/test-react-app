import React from 'react';
import { render } from "react-dom";
import './App.css';

const apiUrl = "http://api.nal.usda.gov/ndb/list?format=json&lt=f&sort=n&api_key=***REMOVED***";

function App() {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    async function fetchData() {
      var data = await fetch(apiUrl).then(res => {
        return res.json();
      });
      //console.log(data);
      setItems(data);
      console.log(data);

// This function successfully iterates through the object, just need to do it cleaner
function nestedLoop(obj) {
    const res = {};
    function recurse(obj, current) {
        for (const key in obj) {
            let value = obj[key];
            if(value !== undefined) {
                if (value && typeof value === 'object') {
                    recurse(value, key);
                    console.log("This is key: " + key)
                } else {
                    console.log("This is value: " + value)
                    res[key] = value;
                }
            }
        }
    }
    recurse(obj);
    return res;
};
nestedLoop(data);


    }
    fetchData();
  }, []);

  return (
    <div class="container">
    // Need to iterate through here somehow
    // Most likely use above function and add these divs instead of console.log
      {Object.keys(items).map(item => (
        <div class="card" key={item}>
          <div class="card-body">This is item {item}</div>
        </div>
      ))}
      ;
    </div>
  );
}

render(<App />, document.getElementById("root"));

export default App;
