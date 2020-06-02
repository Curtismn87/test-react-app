import React from "react";
import { render } from "react-dom";
import "./App.css";

const apiUrl =
  "http://api.nal.usda.gov/ndb/list?format=json&lt=f&sort=n&api_key=***REMOVED***";

function App() {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    async function fetchData() {
      var data = await fetch(apiUrl).then((res) => {
        return res.json();
      });

      setItems(data.list.item);
    }
    fetchData();
  }, []);

  const usdaItems = items.map((item) => (
    <div class="card" key={item.id}>
      <div class="card-body">{item.name}</div>
    </div>
  ));

  return <div class="container">{usdaItems};</div>;
}

render(<App />, document.getElementById("root"));

export default App;