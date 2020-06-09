const fastify = require("fastify");
const fastifyCors = require("fastify-cors");
const { Client } = require("pg");

// Setup the database connection:
const client = new Client({
  connectionString: process.env.PGSTRING
});

// Setup the Fastify instance & plugins:
const server = fastify({ logger: true });

server.register(fastifyCors, {});

server.get("/", async (request, reply) => {
  const sql = "SELECT * FROM todolist";
  const result = await client.query(sql);
  reply.send(result.rows);
});

// APPEND NEW TODO ROUTE:
// REST specs says we should use the verb "POST" to mean "CREATE".
// It's a simple rule and you should simply follow it if you
// decide to stick to a world-class standard.
//
// You can't test this with a normal browser though. You need a
// special one, a "BROWSER FOR DEVELOPERS".
//
// I use Postman which you can install as a Chrome or Firefox
// extension, or as a standalone application. Your choiche:
// https://www.getpostman.com/
//
// Study it and get used to send POST requests with a JSON BODY.
// I'm sure you'll find the poroper tutorial for it.
// (take a look at the picture I've uploaded in the `/src` folder)
server.post("/", async (request, reply) => {
  // This is a "PARAMETRIZED QUERY"
  // https://node-postgres.com/features/queries#Parameterized%20query
  //
  // It's a query that takes some dynamic data. In this case it
  // receives a piece of text as provided by the end user in the
  // REST request.
  //
  // In the SQL query, we mark each parameter as $1, $2, ...
  // And then provide an array with the values in the same order.
  //
  // Why should I do this?
  // I'm glad you asked. Safety and simplicity.
  //
  // Postgres will put together the variables and the query and it
  // will apply plenty of security checks for you, so you don't have
  // to write boring code.
  //
  // It is also way easier than using Javascript's string templates
  // and it consumes less resources as well.
  //
  // It's a win-win.
  // Use it!
  const sql = "INSERT INTO todolist (text) VALUES ($1)";
  const values = [request.body.text];
  const result = await client.query(sql, values);
  reply.send(result);
});

// DELETE TODO ROUTE:
// As for the REST standard, we use the matching verb "DELETE".
// In this case we need to know "WHICH TODO TO DELETE" and this
// is easily achieved by passing a DYNAMIC URL PARAMETER that
// refers to the todo's ID.
//
// Here we describe a URI SHAPE that can match requests like
// - delete://1
// - delete://122
//
// The NUMBER is collected by Fastify and made easily accessible
// from the "request" object.
server.delete("/:id", async (request, reply) => {
  // Again, parametrized query. It's the best way to go.
  const sql = "DELETE FROM todolist WHERE id = $1";
  const values = [request.params.id];
  const result = await client.query(sql, values);
  reply.send(result);
});

server.put("/:id", async (request, reply) => {
  const sql = "UPDATE todolist SET status = false WHERE id = $1";
  const result = await client.query(sql, values);
  reply.send(result);
});
/**
 * APPLICATION BOOT
 * ====================================
 *
 * Now that you've learned about "async/await", we can define a
 * function that contains all the asynchronous steps that are
 * needed in order to confirm that "all is up and running"
 *
 * For this simple App there are 3 steps:
 * 1. establish the database connection
 * 2. ensure that a table named "TODOS" exists
 * 3. start the server
 */
const boot = async () => {
  await client.connect();

  await client.query(`
    CREATE TABLE IF NOT EXISTS todolist (
      id serial PRIMARY KEY,
      text TEXT NOT NULL,
      status BOOLEAN DEFAULT false
    );
  `);

  // start the server
  await server.listen(8080);
};

const onBootComplete = () => console.info("App started correctly");
const onBootFailed = err => console.error(`Boot Error: ${err.message}`);

// Step2:
// we run the asynchronous function and attach the callback
// functions using the "then()" and "catch()" APIs.
boot()
  .then(onBootComplete)
  .catch(onBootFailed);
