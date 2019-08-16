const projectDb = require("../data/dbConfig");

module.exports = {
  getProjects,
  add,
};

function getProjects() {
  return projectDb("project");
}


function add(postpro) {
  console.log(postpro)
  return projectDb('project')
    .insert(postpro);
}