import React from "react";
import { render } from "react-dom";
import "./App.css";

const apiUrl =
  "https://api.nal.usda.gov/fdc/v1/foods/list?format=json&lt=f&sort=n&api_key=" + process.env.REACT_APP_USDA_API_KEY;

function App() {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    async function fetchData() {
      var data = await fetch(apiUrl).then((res) => {
        return res.json();
      });
      console.log(data);
      setItems(data);
    }
    fetchData();
  }, []);

  const usdaItems = items.map((item) => (
      <div className="food col-sm" key={item.fdcId}><p>{item.description}</p>
      <div key={item.foodCode}>{item.foodNutrients.map((nutrients) => (
        <div key={nutrients.number}>{nutrients.name}: {nutrients.amount}</div>
        ))}</div>
      </div>
  ));

  return <div className="container"><div className="row">{usdaItems}</div></div>;
}

render(<App />, document.getElementById("root"));

export default App;