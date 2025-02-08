
import { 
  Header,
  Hero,
  Contact,
  Service,
  Approach,
  Projects,
  About,
  AboutUs,
  AboutUsContent,
  Footer,
  BottomFooter
 } from '@/lib/imports';

export default function Home() {
  return (
   <main>
    <div className='px-mobile-margin md:px-tablet-margin lg:px-laptop-margin'>
      <Header/>
      <Hero />
      <Service/>
      <AboutUs 
      about={AboutUsContent}
      autoplay
      />
      <Approach/> 
      <Projects/>
      <Contact/>
      <Footer />
      <BottomFooter/>
    </div>
    
   </main>
  );
}
