const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51HiTOeBbrp2lO8r92Z4KRacPQsGunzqMlI6U34wGIGw3UIaGjNbA7tgtRemZasD4Yq4AIUuaLVrM7JdBJzoxGz3A0011oYgDoc');

//API

// - App Config
const app = express();

// - Middleware
app.use(cors({origin: true}));
app.use(express.json());

// - API Routes
app.get('/', (request, response) => response.status(200).send('Hello Word'))

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log('Payment Request Recieved for this amont >> ', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "idr",
    });

    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

// - Listen Command
exports.api = functions.https.onRequest(app)

// Example endpoint
// http://localhost:5001/clone-92068/us-central1/api