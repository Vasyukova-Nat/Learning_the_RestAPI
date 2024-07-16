const express = require('express')
const userRouter = require('./routes/user.routes')

const PORT = process.env.PORT || 8080

const app = express()

// Этот шаблон можно использовать просто для того чтобы отобразить MEOW на странице
// app.get('/', (req, res) => {
//     res.send('MEOW!')
// })

app.use(express.json())
app.use('/api', userRouter)

app.listen(PORT, () => console.log(`server started on port ${PORT}, meow`))



