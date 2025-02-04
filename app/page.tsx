
import { 
  Header,
  Hero

 } from '@/lib/imports';

export default function Home() {
  return (
   <main>
    <div className='px-mobile-margin md:px-tablet-margin lg:px-laptop-margin'>
      <Header/>   
      <Hero />
    </div>
    
   </main>
  );
}
