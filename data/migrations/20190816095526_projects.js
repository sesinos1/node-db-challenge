exports.up = function(knex) {
  return knex.schema
    .createTable("project", tbl => {
      tbl.increments();
      tbl
        .string("name", 128)
        .unique()
        .notNullable();
      tbl
        .string("description", 128)
        .unique()
        .notNullable();
      tbl
        .boolean("completed", 128)
        .unique()
        .notNullable();
    })
    .createTable("resource", tbl => {
      tbl.increments();
      tbl.string("name").notNullable();
      tbl.string("description");
      tbl
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("project")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    })
    .createTable("task", tbl => {
      tbl.increments();
      tbl.string("description").notNullable();
      tbl.string("notes");
      tbl.boolean("completed").notNullable();
      tbl
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("project")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    });
};
exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("project")
    .dropTableIfExists("resource")
    .dropTableIfExists("task");
};
