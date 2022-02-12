const Express = require('express')
const app = Express()

app.use(Express.static('template_assets'))

app.get('*', (req, res)=>{
    res.send('=(')
})

app.listen(8008)