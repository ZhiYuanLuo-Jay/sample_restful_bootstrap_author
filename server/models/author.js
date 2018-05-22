module.exports = function(mongoose){
    var AuthorSchema = new mongoose.Schema({
        name: { type: String, required: true, minlength: [3, "Name needs to be more than 3 character long."] },
        }, { timestamps: true })
    mongoose.model('Author', AuthorSchema); 
}
