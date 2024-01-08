import Cap from "../Model/CapModel.js";

const capService ={

    getAll: async () => {
        try {
            const caps = await Cap.find()
            return caps
        } catch (error) {
            console.error("Error In Service", error);
        }
    },

    getById: async (_id) => {
        try {
            const cap = await Cap.findById(_id)
            console.log(cap);
            return cap
        } catch (error) {
            console.error("Error In Service", error);
        }
    }

}

export default capService