 export default function TodoModel(mongoose){
    const todoSchema = mongoose.Schema(
         {   task: String
         }, { timestamps: true} )
        return mongoose.model('Todo', todoSchema)
    }