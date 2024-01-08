import Cap from "../Model/CapModel.js"
import Blog from "../Model/BlogModel.js"
import data from "../data.js"

const seedService = {
  
  seedDatabase: async () => {
    console.log(3);
    try {
      console.log(4)
      await Cap.deleteMany({})
      console.log(5)
      await Blog.deleteMany({})
      console.log(6)
      const newCaps = await Cap.insertMany(data.caps)
      console.log(7)
      const newBlog = await Blog.insertMany(data.blog)
      console.log(8);
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
