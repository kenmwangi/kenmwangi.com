import Essays from "@/components/home/essays";
import Hero from "@/components/home/hero";
import Notes from "@/components/home/notes";
import Profile from "@/components/home/profile-section";

export default function Home() {
  return (
    <div className="">
      <Profile />
      <Hero />
      <Notes />
      <Essays />
    </div>
  );
}
