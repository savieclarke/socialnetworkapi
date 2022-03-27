const connection = require('../config/connection');
const { User, Reaction, thought} = require('../models');
const { } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  

  

  // Create empty array to hold the students
  const students = [];

  // Get some random assignment objects using a helper function that we imported from ./data
  const assignments = getRandomAssignments(20);

  // Loop 20 times -- add students to the students array
  for (let i = 0; i < 20; i++) {
    const thoughts;

   
  }

  // Add students to the collection and await the results
  await Student.collection.insertMany(students);

  // Add courses to the collection and await the results
  await Course.collection.insertOne({
    courseName: 'UCLA',
    inPerson: false,
    students: [...students],
  });

  // Log out the seed data to indicate what should appear in the database
  console.table(User);
  console.table(thought);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});