import express from 'express'
import { tervitusCntrl } from './controllers/viewControllers.js'
import { apiHelloCntrl } from './controllers/apiControllers.js'
import { indexCntrl } from './controllers/viewControllers.js'





const app = express()
app.use('/', express.static('public'))
app.set("views",  "./views");
app.set("view engine", "ejs");

app.get('/tervitus', tervitusCntrl)
app.get('/',indexCntrl)
app.get('/api/hello', apiHelloCntrl)

const port = process.env.PORT || 8085
app.listen(port, () => console.log(`Server is running on port ${port}`))