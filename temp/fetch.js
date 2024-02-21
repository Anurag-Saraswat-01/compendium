import axios from "axios";

// const url = "https://botw-compendium.herokuapp.com/api/v3/compendium/all";
const url =
  "https://botw-compendium.herokuapp.com/api/v3/compendium/category/equipment";
// const url = "https://botw-compendium.herokuapp.com/api/v3/regions/all";

axios
  .get(url)
  .then((res) => console.dir(res.data.data))
  .catch((err) => console.error(err));
