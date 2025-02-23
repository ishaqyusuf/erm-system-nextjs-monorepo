import { db } from "@gnd/db";
import { HomeClient } from "../components/home.client";
export default async function Home() {
  const user = await db.users.findFirst({});
  return (
    <div className="">
      {user?.id}
      <HomeClient />
    </div>
  );
}
