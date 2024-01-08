import mongoose from "mongoose"

const cartSchema = new mongoose.Schema({
    userId: {type:Number, required:true},
    capId: { type: mongoose.Schema.Types.ObjectId }
})

const Cart = mongoose.model("Cart", cartSchema)

export default Cart