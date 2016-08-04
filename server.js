const request = require("tinyreq");
const cheerioReq = require("cheerio-req");
//
// request("http://www.refinery29.com/", function (err, body) {
//     console.log(err || body); // Print out the HTML
// });

cheerioReq("http://www.refinery29.com/", (err, $) => {
    console.log($(".hero-card").text());
    // => ???
});
