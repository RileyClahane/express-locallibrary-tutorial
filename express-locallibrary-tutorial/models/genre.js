var mongoose = require('mongoose');

var schema = mongoose.Schema;

var genreSchema = new mongoose.Schema({
    name: {type: String, minlength: 3, maxlength: 100}
});

genreSchema
.virtual('url')
.get(function(){
    return '/catalog/genre/' + this._id;
});

module.exports = mongoose.model('Genre', genreSchema);