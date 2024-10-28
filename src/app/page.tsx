import CaseStudies from "./component/case-studies";
import Hero from "./component/hero";
import Navbar from "./component/navbar";
import Services from "./component/services";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <CaseStudies />
    </div>
  );
}
