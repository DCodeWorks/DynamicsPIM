export interface UserRecord {
  id: string;
  name: string;
  email: string;
  role: "Admin" | "User";
  stores: string[];
}

export const users: UserRecord[] = Array.from({ length: 52 }).map((_, i) => ({
  id: (i + 1).toString(),
  name: `User ${i + 1}`,
  email: `user${i + 1}@hudson.com.mt`,
  role: i % 5 === 0 ? "Admin" : "User",
  stores: i % 5 === 0 ? ["UJ-IT", "HS-MT"] : ["UJ-IT"],
}));
