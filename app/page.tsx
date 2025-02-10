import {
  Header,
  Hero,
  Contact,
  Service,
  Approach,
  Projects,
  AboutUs,
  AboutUsContent,
  Footer,
  BottomFooter,
  TechStack,
} from "@/lib/imports";

export default function Home() {
  return (
    <main>
      <div className="overflow-hidden place-items-center">
        <Header />
        <Hero />
        <Service />
        <AboutUs about={AboutUsContent} autoplay />
        <TechStack/>
        <Approach />
        <Projects />
        <Contact />
        <Footer />
        <BottomFooter />
      </div>
    </main>
  );
}
