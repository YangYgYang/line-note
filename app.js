const express = require('express')
const app = express()
const port = 3000

app.get('/',(req,res)=>{
    res.send('express is running')
})


app.listen(port, () => { console.log(`Express is running on http://localhost:${port}`) })