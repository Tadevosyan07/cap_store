import blogController from "../Controller/BlogController.js";
import Blog from "../Model/BlogModel.js";

const blogService = {

    getAll: async () => {
        try {
            const blogs = await Blog.find()
            return blogs
        } catch (error) {
            console.error(error);
        }
    },

    getById: async (_id) => {
        try {
            const blog = await Blog.findById(_id)
            return blog
        } catch (error) {
            console.error(error);
        }
    }

}

export default blogService