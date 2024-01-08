import blogService from "../Service/blogService.js";
const blogController = {

    getAll: async (req, res) => {
     try {
        const blogs =  await blogService.getAll()
        res.status(200).send(blogs)
     } catch (error) {
        console.error({CriticalError:"Internal Server Error"});
     }
    },

    getById: async (req, res) => {
        try {
            const { _id } = req.params
            const blog = await blogService.getById(_id)
            res.status(200).send(blog)
        } catch (error) {
            console.error({CriticalError:"Internal Server Error"});
        }
    }
}

export default blogController