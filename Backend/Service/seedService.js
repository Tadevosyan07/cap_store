import Cap from "../Model/CapModel.js"
import Blog from "../Model/BlogModel.js"
import data from "../data.js"

const seedService = {
  
  seedDatabase: async () => {
    console.log(3);
    try {
      await Cap.deleteMany({})
      await Blog.deleteMany({})
      const newCaps = await Cap.insertMany(data.caps)
      const newBlog = await Blog.insertMany(data.blog)
      return {
        message: 'Data created',
        data: {
          caps: newCaps,
          blog: newBlog
        }
      };
    } catch (error) {
      throw new Error(error.message);
    }
  }
};

export default seedService;
