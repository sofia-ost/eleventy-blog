const fetch = require("node-fetch");

module.exports = async function () {
  const url = "https://61fa604d92093f0017ad977c.mockapi.io/posts_list";

  const result = await fetch(url)
    .then((response) => response.json())
    // .then((data) => console.log(data))
    .catch((error) => console.log(error));

  return result;
};
