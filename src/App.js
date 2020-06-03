import React from "react";
import { render } from "react-dom";
import "./App.css";

const apiUrl =
  "http://api.nal.usda.gov/ndb/list?format=json&lt=f&sort=n&api_key=" + process.env.REACT_APP_USDA_API_KEY;

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
      <p class="food col-sm" key={item.id}>{item.id}</p>
  ));

  return <div class="container"><div class="row">{usdaItems}</div></div>;
}

render(<App />, document.getElementById("root"));

export default App;