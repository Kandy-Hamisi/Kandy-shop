const router = require("express").Router();
const stripe = require("stripe")("sk_test_51JJIz8GLFwMKFO7crOhq17Ld0EEC9j6XrsdFmowaUH1YLhwVFmmYfWgogXU3oJdfUJfOcHFd5xsA80BbHxneWW3j00ZzLbu2uN");




router.post("/payment", (req, res) => {
    stripe.charges.create({
        // headers: {
        //     "Authentication": `Bearer: ${process.env.STRIPE_KEY}`,
        // },
        source: req.body.tokenId,
        amount: req.body.amount,
        currency: "usd",
    }, (stripeErr, stripeRes) => {
        if(stripeErr){
            res.status(500).json(stripeErr);
        } else {
            res.status(200).json(stripeRes);
        }
    })
})



module.exports = router;