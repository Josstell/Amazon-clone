const stripe = require("stripe")(
  "sk_test_51I3nyuJOIVxoBffOkEtNe5BeTf7VCz4uTt8OeAqNim7n3Nf1FaNm4Hzkz3JgrEns2teHqw2uYE8UyYAhVfb16Aes007XVnrEKV"
);

const allowCors = (fn) => async (req, res) => {
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Origin", "*");
  // another common pattern
  // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,OPTIONS,PATCH,DELETE,POST,PUT"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );
  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }
  return await fn(req, res);
};

const handler = async (req, res) => {
  const total = req.query.total;

  if (req.method === "POST") {
    console.log("Payment Request received BOOM!!!", total);
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total,
      currency: "usd",
    });

    console.log("paso");
    res.statusCode = 201;
    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } else {
    res.send("Noting to do ");
    console.log("Payment Request received BOOM!!!", total);
  }
};

module.exports = allowCors(handler);
