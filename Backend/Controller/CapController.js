import capService from "../Service/CapService.js";

const CapController = {

    getAll: async (req, res) => {
        try {
            const caps = await capService.getAll()
            res.status(200).send(caps)
        } catch (error) {
            console.error(error);
        }
    },

    getById: async (req, res) => {
        try {
            const { _id } = req.params
            const cap = await capService.getById(_id)
            console.log("Controller",cap);
            res.status(200).send(cap)
        } catch (error) {
            res.status(500).send({CriticalError:"Internal Server Error "})
        }
    }

}

export default CapController