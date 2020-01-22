const express = require('express')
require('./db/mongoose.js')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')



const app = express()
const port = process.env.PORT


const multer = require('multer')
const upload = multer({
    dest: 'images',
    limits:{
        fileSize: 1000000
    },
    fileFilter(req, file, cb){

        if(!file.originalname.match(/\.(doc|docx)$/)){
            return cb(new Error('provide word'))
        }
            cb(undefined, true)
    }
})



app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is upon port ' + port)
})

