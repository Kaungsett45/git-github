import { db } from "./db";
import { users } from "./db/schema";

async function main() {
  if (!process.env.DATABASE_URL) {
    console.error('DATABASE_URL environment variable is required');
    process.exit(1);
  }
  
  try {
    // Insert sample users
    await db.insert(users).values([
      { name: "Alice", email: "alice@example.com", password: "1234" },
      { name: "Bob", email: "bob@example.com", password: "5678" }
    ]);

    console.log("Sample users inserted ✅");

    // Query all users
    const allUsers = await db.select().from(users);
    console.log("Users in DB:", allUsers);
  } catch (err) {
    console.error("Error:", err);
  }
}

main();
