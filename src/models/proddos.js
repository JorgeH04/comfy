const mongoose = require('mongoose');
const { Schema } = mongoose;

const NoteSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  image: String,
  imagedos: String,
  imagetres: String,
  description: String,
  color: {
    type: String,
    required: true
  },
  colorstock: {
    type: String,
    required: true
  },

  date: {
    type: Date,
    default: Date.now
  },
  price: {
    type: Number,
    required: true
  }

});

module.exports = mongoose.model('Proddos', NoteSchema);
