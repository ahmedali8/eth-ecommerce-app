const mongoose = require('mongoose');

mongoose.connect(
  'mongodb+srv://test:test00000@cluster0.zonps.mongodb.net/database?retryWrites=true&w=majority',
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const paymentSchema = new mongoose.Schema({
  id: String,
  itemId: String,
  paid: Boolean,
});

const Payment = mongoose.model('Payment', paymentSchema);

module.exports = { Payment };
