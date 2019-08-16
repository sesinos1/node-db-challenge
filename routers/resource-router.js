const express = require("express");

const router = express.Router();

const resourceDb = require("./resource-model");


router.get("/", async (req, res) => {
  try {
    const projects = await resourceDb.getProjects();
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ error: "Something went wrong." });
  }
});

router.post("/", async (req, res) => {
    const postpro = req.body;
    console.log(postpro)
    try {
      let pro = await resourceDb.add(postpro);
        console.log(postpro)
      res.status(201).json(pro);
    } catch (err) {
      res.status(500).json({ message: 'Failed to create new scheme' });
    }
  });

// router.get('/:id', (req, res) => {

// });

// router.delete('/:id', (req, res) => {

// });

// router.put('/:id', (req, res) => {

// });

// router.post('/', (req, res) => {
    
// });

module.exports = router;