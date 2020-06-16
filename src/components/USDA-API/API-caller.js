import apiUrls from "../../config/api-urls";

const nutritionApiUrl = apiUrls.nutritionUrl + process.env.REACT_APP_USDA_API_KEY;
const searchApiUrl = apiUrls.searchUrl + process.env.REACT_APP_USDA_API_KEY;

export const fetchNutritionInfo = async () => {

  const settings = {
    method: 'GET',
    headers: new Headers({
      "Accept": "application/json"
    })
  };

  return await fetch(nutritionApiUrl, settings)
  .then(response => response.json())
  .catch(e =>  e);
};

export const queryNutritionInfo = async (query) => {

  let body = {query: query,
    dataType: [
    "Foundation",
    "SR Legacy"
    ],
    pageSize: 25, //TODO: make this a dropdown option
    sortBy: "dataType.keyword", //TODO: make this a dropdown option
    sortOrder: "asc", //TODO: make this a dropdown option
  };

  const settings = {
    method: 'POST',
    headers: new Headers({
      "Accept": "application/json",
      "Content-Type": "application/json",
    }),
    body: JSON.stringify(body)
  };

  return await fetch(searchApiUrl, settings)
  .then(response => response.json())
  .catch(e =>  e);
};