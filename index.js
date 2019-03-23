const request = require('request-promise');
const cheerio = require('cheerio');

async function scrape() {
  // const url = "https://sfbay.craigslist.org/search/vol?s=0"
  for(let i = 0; i <= 365; i += 120){
    const html = await request.get("https://sfbay.craigslist.org/search/vol?s=" + i);
    const $ = await cheerio.load(html);
    $(".result-title").each( (idx, el) => console.log($(el).text()) )
    console.log("At page number " + i);
  }

}

scrape();