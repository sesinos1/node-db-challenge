const projectDb = require("../data/dbConfig");

module.exports = {
  getProjects,
  add,
};

function getProjects() {
  return projectDb("resource");
}


function add(postpro) {
  return projectDb('resource')
    .insert(postpro);
}