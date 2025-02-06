
import { 
  Header,
  Hero,
  Contact,
  Service,
  Approach,
  Projects,
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
      <Approach/> 
      <Contact/>
      <Projects/>
      <Footer />
      <BottomFooter/>
    </div>
    
   </main>
  );
}
