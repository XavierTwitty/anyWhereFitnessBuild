exports.up = async (knex) => {
  await knex.schema
    .createTable('users', (table) => {
      table.increments('user_id')
      table.string('username', 200).notNullable().unique()
      table.string('password', 200).notNullable()
      table.string('email', 200).notNullable().unique()
      table.string('role_name', 200).defaultTo("student")
      table.timestamps(false, true)
    })
    .createTable('classes', (table) => {
      table.increments('class_id')
      table.string('class_name', 200).notNullable()
      table.string('class_type', 200).notNullable()
      table.string('startTime', 200)
      table.string('startDate', 200)
      table.string('location', 200)
      table.integer('duration', 200)
      table.string('intensity', 200)
      table.integer('user_id').references("user_id").inTable("users").onDelete("CASCADE")

    }) 
   
}

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists('classes')
  .dropTableIfExists('users')
}
