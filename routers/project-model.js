const projectDb = require("../data/dbConfig");

module.exports = {
  getProjects,
};

function getProjects() {
  return projectDb("project");
}