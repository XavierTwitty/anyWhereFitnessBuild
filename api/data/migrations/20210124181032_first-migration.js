exports.up = async (knex) => {
  await knex.schema
    .createTable('users', (table) => {
      table.increments('user_id')
      table.string('username', 200).notNullable()
      table.string('password', 200).notNullable()
      table.string('email', 200).notNullable()
      table.string('class_id', 200)
      table.timestamps(false, true)
    })
    await knex.schema
    .createTable('classes', (table) => {
      table.increments('class_id')
      table.string('name', 200).notNullable()
      table.string('type', 200).notNullable()
      table.string('time', 200)
      table.string('location', 200)
      table.integer('duration', 200)
      table.string('intensity', 200)
      table.string('max', 200)
      table.integer('users_id', 200)
    })
    // await knex.schema
    // .createTable('users', (users) => {
    //   users.increments('user_id')
    //   users.string('username', 200).notNullable()
    //   users.string('password', 200).notNullable()
    //   users.timestamps(false, true)
    // })
}

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists('users')
}
