const express  = require("express")
const router = express.Router()
const Product = require("../modules/modules.products")
const { getItems, getOneItem , updateItem, postItem, deleteItem} = require("../controllers/controllers.products")

// Find all items in dB
router.get("/", getItems)


//Find one item in the dB
router.get("/:name", getOneItem)


//Update an item in the dB
router.put("/:name", updateItem)

//Input a new item into dB
router.post("/", postItem)


//Delete an item in dB
router.delete("/:name", deleteItem)




module.exports = router