const Product = require("../modules/modules.products")


// Controller to get all items in dB 

const getItems  = async (req, res) => {
    try{
        const items = await Product.find()
        res.status(200).json(items)
        console.log(items)
    }catch(error){
        res.status(500).json(error.message)
        console.error(error.message)
    }
}

// Controller to get one specified item from dB
const getOneItem = async (req, res) => {
    try{
        const itemName = req.params.name
        const item = await Product.findOne({name: itemName})
        
        if(!item){
            res.status(404).send(`${itemName} not found`)
        }else{
            res.status(202).json(item) 
        }
    }catch(error){
        res.status(500).json(error.message)
        console.log(error.message)
    }
}

//Controller to update one item in dB
const updateItem =  async (req, res) => {
    try{
        const itemName = req.params.name
        const updatedInfo = req.body
        const item = await Product.findOneAndUpdate({name: itemName}, updatedInfo, {new: true})
        if(!item){
            res.status(404).send(`${itemName} not found`)
        }else{
            res.status(202).json({
                message: `${itemName} order successfully updated`,
               item  
            })
        }


        }catch(error){
            res.status(500).json(error.message)
            console.log(error.message)
        }
}


//Controller to add an item to dB

const postItem =  async (req, res) => {
    try{
        const item = await Product.create(req.body)
        const catalogue = await Product.find()

        res.status(200).json(catalogue)
        console.log(`Item included in catalogue`)


    }catch(error){
        res.status(500).json(error.message)
        console.error(error.message);
    }
}



// Controller to delete an item from dB

const deleteItem = async (req, res) => {
    try{
        const itemName = req.params.name
        const item = await Product.deleteOne({name: itemName})
        const remainderCatalogue = await Product.find()

        if(item.deletedCount === 0){
            res.status(404).send(`${itemName} not found `)
        }else{
            res.status(200).send({
                "message": `${itemName} deleted successfully`,
                "order": remainderCatalogue
            })
        }
    }catch(error){
        res.status(500).json(error.message)
        console.error(error.message)
    }
}



module.exports = {
    getItems,
    getOneItem,
    updateItem,
    postItem,
    deleteItem
}