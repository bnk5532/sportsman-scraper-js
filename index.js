const PORT = 8000;
const axios = require("axios");
const cheerio = require("cheerio");
const { response } = require("express");
const express = require("express");

const app = express();
const url =
  "https://www.sportsmans.com/shooting-gear-gun-supplies/handguns/c/cat139633";

axios(url).then((response) => {
  const html = response.data;
  const $ = cheerio.load(html);
  const article = [];

  $(".details", html).each(function () {
    const title = $(this).text().trim();
    const url = $(this).find("a").attr("href");

    article.push({
      title,
      url,
    });
  });
  console.log(article);
});
app.listen(PORT, () => console.log(`server running on PORT ${PORT}`));
