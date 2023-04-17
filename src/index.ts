import express, {json} from "express"
import cors from "cors"
import dotenv from "dotenv"
import { handleApplicationErrors } from "./middlewares/erros-middleware.js"
import routes from "./routes/index.js"

const app = express()
dotenv.config()
app.use(json())
app.use(cors())
app.use(routes)
app.use(handleApplicationErrors)

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Server running in port: ${port}`))