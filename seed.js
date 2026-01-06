const connectDB = require("../config/db");
const { ObjectId } = require("mongodb");

async function seedData() {
  const db = await connectDB();

  await db.collection("users").insertMany([
    { _id: new ObjectId("64aaa1111111111111111111"), name: "Rahul", email: "rahul@gmail.com" },
    { _id: new ObjectId("64aaa2222222222222222222"), name: "Anita", email: "anita@gmail.com" }
  ]);

  await db.collection("mentors").insertMany([
    { name: "Sanjay", mentee_count: 18 }
  ]);

  await db.collection("topics").insertMany([
    { topic: "MongoDB Basics", taught_date: new Date("2020-10-10") }
  ]);

  await db.collection("tasks").insertMany([
    { task_name: "Mongo Queries", due_date: new Date("2020-10-15") }
  ]);

  await db.collection("attendance").insertMany([
    {
      user_id: new ObjectId("64aaa1111111111111111111"),
      date: new Date("2020-10-20"),
      status: "absent"
    }
  ]);

  await db.collection("codekata").insertMany([
    {
      user_id: new ObjectId("64aaa1111111111111111111"),
      problems_solved: 120
    }
  ]);

  await db.collection("company_drives").insertMany([
    {
      company: "Zoho",
      drive_date: new Date("2020-10-20"),
      students_appeared: [
        new ObjectId("64aaa1111111111111111111")
      ]
    }
  ]);

  console.log("Sample Data Inserted");
  process.exit();
}

seedData();
