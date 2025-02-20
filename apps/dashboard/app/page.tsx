import Image from "next/image";
import { db } from "@gnd/db";
export default async function Home() {
  const user = await db.users.findFirst({});
  return <div className="">{user.id}</div>;
}
