import { redirect } from "next/navigation";

const default_catagory_id = "01";
export default async function Home() {
  return redirect(`/catagory/${default_catagory_id}`);
}
