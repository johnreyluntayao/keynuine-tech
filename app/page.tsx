
import { 
  Header,
  Hero,
  Contact,
  Service,
  Approach,
  TechStack

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
    </div>
    
   </main>
  );
}
