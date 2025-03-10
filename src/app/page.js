'use client'
import ClickToEarn from "@/components/ClickToEarn";
import Hero from "@/components/Hero";
import HowToBuy from "@/components/HowToBuy";
import MeetPeperuney from "@/components/MeetPeperuney";
import PeperuneyToons from "@/components/PeperuneyToons";
import PizzaNomics from "@/components/PizzaNomics";

export default function Home() {
  return (
    <>
      <Hero />
      <MeetPeperuney />
      <HowToBuy />
      <PizzaNomics />
      <ClickToEarn />
      <PeperuneyToons/>
    </>
  );
}
