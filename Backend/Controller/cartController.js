import cartService from "../Service/cartService.js"

const cartController = {

    addToCart: async (req, res) => {
        try {
            const { userId, capId } = req.body
            const addToCart = await cartService.addToCart(userId, capId)
            res.status(200).send(addToCart)
        } catch (error) {
            console.error({CriticalError:"Internal Server Error", error});
        }
    }

}

export default cartController