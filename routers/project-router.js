const express = require("express");

const router = express.Router();

const projectDb = require("./project-model");


router.get("/", async (req, res) => {
  try {
    const projects = await projectDb.getProjects();
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ error: "Something went wrong." });
  }
});

router.get("/:id/project", async (req, res) => {
    try {
      const projectActions = await projectDb.getProjectId(req.params.id);
      res.status(200).json(projectActions);
    } catch (error) {
      res.status(500).json({ error: "Something went wrong." });
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