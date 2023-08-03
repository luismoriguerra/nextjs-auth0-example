import Image from "next/image";
import Login from "./_components/Login";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="container mx-auto my-5">
      <Login />

      <hr />
      {/* <Button>Click me</Button> */}
    </div>
  );
}
