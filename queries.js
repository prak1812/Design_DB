const connectDB = require("../config/db");

async function runQueries() {
  const db = await connectDB();

  // 1. Topics & tasks in October
  const topics = await db.collection("topics").find({
    taught_date: {
      $gte: new Date("2020-10-01"),
      $lte: new Date("2020-10-31")
    }
  }).toArray();

  console.log("Topics in October:", topics);

  // 2. Company drives between dates
  const drives = await db.collection("company_drives").find({
    drive_date: {
      $gte: new Date("2020-10-15"),
      $lte: new Date("2020-10-31")
    }
  }).toArray();

  console.log("Company Drives:", drives);

  // 3. Problems solved
  const codekata = await db.collection("codekata").find().toArray();
  console.log("Codekata:", codekata);

  // 4. Mentors with >15 mentees
  const mentors = await db.collection("mentors").find({
    mentee_count: { $gt: 15 }
  }).toArray();

  console.log("Mentors:", mentors);

  process.exit();
}

runQueries();
