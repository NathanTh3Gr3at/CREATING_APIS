const Quote = require("../models/quote.model");

async function getRandomQuote(req, res, next) {
  let randomQuote;
  try {
    randomQuote = await Quote.getRandomQuote();
  } catch (error) {
    return next(error);
  }

  res.json({ quote: randomQuote });
}

module.exports = { getRandomQuote: getRandomQuote };
/* app.get("/quote", function (req, res, next) {
        res.json({
          quote:
            "As you dive deeper into web development, web development will dive deeper into you!",
        });
      }); */
