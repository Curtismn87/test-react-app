import apiUrls from "../../config/api-urls";

const nutritionApiUrl = apiUrls.nutritionUrl + process.env.REACT_APP_USDA_API_KEY;

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