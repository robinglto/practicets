import Array from "@/components/array";
import Tipos from "@/components/types";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Tipos />
      <Array />
    </main>
  );
}
