const express = require('express')

const app = express()

app.get('/', (req, res) => {
    req.json({msg : 'welcome mother fucker'})
})

app.listen(4000, ()=>{
    console.log('listen');
})