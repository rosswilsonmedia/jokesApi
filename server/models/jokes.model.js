const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: [true, 'setup is required'],
        minlength: [10, 'setup must be at least ten characters']
    },
    punchline: {
        type: String,
        required: [true, 'punchline is required'],
        minlength: [10, 'setup must be at least ten characters']
    }},
    { timestamps: true }
)

const Joke = mongoose.model('Joke', JokeSchema);

module.exports = Joke;