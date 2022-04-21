import db from '../models/index.js'
export default function BoardService(){
    const Board = db.board
    return{
        boardform(req, res){
        new BoardSchema(req.body).save(()=>{
            res.status(200).json({'result':'ok'})
    })
},
boardlist(req,res){
    console.log('### boardController access ')
    BoardSchema.find()
    .exec((err, board) => {
        if (err) return res.status(400).send(err)
        res.status(200).json({ success : true, board})
    })
}}}
