const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.set('useCreateIndex', true);

const QuestionSchema = new Schema({
    question: {type: String, required: true, unique: true}
});


module.exports = mongoose.model('Questions', QuestionSchema);