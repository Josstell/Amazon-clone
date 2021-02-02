const stripe = require("stripe")(
  "sk_test_51I3nyuJOIVxoBffOkEtNe5BeTf7VCz4uTt8OeAqNim7n3Nf1FaNm4Hzkz3JgrEns2teHqw2uYE8UyYAhVfb16Aes007XVnrEKV"
);

export default async (req, res) => {
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
