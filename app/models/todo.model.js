module.exports = mongoose => mongoose.model('todo',
        mongoose.Schema(
            { 
                task: String
            }, { timestamps: true}
        )
    )