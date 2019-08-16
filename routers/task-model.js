const projectDb = require("../data/dbConfig");

module.exports = {
  getProjects,
  add,
};

function getProjects() {
  return projectDb("task");
}


function add(postpro) {
  return projectDb('task')
    .insert(postpro);
}