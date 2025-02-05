//Components
export { default as Header } from '@/components/Header';
export { default as Hero } from '@/components/Hero';
export { default as Service } from '@/components/Service';
export { default as Approach } from '@/components/Approach';
export { default as Contact } from '@/components/Contact';
export { default as TechStack } from '@/components/TechStack';
export { default as Footer } from '@/components/Footer';

//UI Components
export { default as Button } from '@/components/ui/Button'
export { default as ApproachCard}  from "@/components/ui/ApproachCard";
export { default as BottomFooter } from '@/components/ui/BottomFooter';

//Data
export {
    navItems,
    techStack,
    ApproachCardContent,
    quickLinks,
    contactInfo,
    socialMedia,
} from '@/data'

//Properties
export type {
    ButtonProps,
    cardProps
} from '@/lib/types'