import Image from "next/image";
import { NavBar } from "./components/NavBar";
import { Hero } from "./components/Hero";
import Trusted from "./components/Trusted";
import { Branding } from "./components/Branding";
import Cards from "./components/Cards";
import Freedom from "./components/Freedom";

export default function Home() {
  return (
    <main>
      <div>
        <Hero/>
        <Trusted/>
        <Branding />
        <Cards/>
        <Freedom/>
      </div>
    </main>
  );
}
