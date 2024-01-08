import seedService from "../Service/seedService.js";

const seedController = {
  seedDatabase: async (req, res) => {
    try {
      console.log("1");
      const result = await seedService.seedDatabase()
      console.log(2);
      res.status(201).send(result)
    } catch (error) {
      res.status(500).send({ CriticalError: "Internal Server Error" })
    }
  }
}

export default seedController;
