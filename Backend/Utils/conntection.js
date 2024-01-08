import mongoose from "mongoose"

const connection = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("Conneted to DB");
        return true
    } catch (error) {
    console.error("Error Whit Connection to DB", error);
    return false        
    }
}

export default connection