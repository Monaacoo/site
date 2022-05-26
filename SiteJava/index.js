import express from "express"
import routes from "./routes.js"

const servidor = express()

servidor.set("view engine", "pug")
servidor.set("views", "./views")

servidor.use(express.json())
servidor.use(express.urlencoded({ extended:true}))

servidor.use(express.static("/public"))
servidor.use(routes)


servidor.listen(3000, function() {
    console.log("SERVIDOR LIGADO!")
})