import Slider from "@/components/Slider";
import Featured from "@/components/Featured";
import Offer from "@/components/Offer";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

export default function Home() {
  return (
    <main>
      <Slider />
      <Featured />
      <Offer />
    </main>
  );
}
