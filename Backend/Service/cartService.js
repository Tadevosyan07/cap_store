import Cart from "../Model/CartModel.js";

const cartService = {

    addToCart: async (userId, capId) => {
        const addToCart = Cart({
            userId:userId,
            capId:capId
        }).save()
        return { message:"Product Added To Cart"}
    }

}

export default cartService