//Button props
export type ButtonProps = {
  label: string;
  link: string;
  className?: string;
};

//Our Approach Card Props
export type cardProps = {
    id: number;
    count: string;
    title: string;
    icon: string;
    description: string;
};

//services Props
export type serviceCardProps = {
  id: number,
  title: string; 
  icon: string;
  description?: string;
};

//Navigation Button Props
export type NavButtonProps = {
  onClick: () => void;
  icon: React.ReactNode;
  className?: string;
};


export type IndexNumber = {
  currentIndex: number;
};

//AboutUs Props
export type AboutProps = {
  id:number;
  img: string;
  name: string;
  designation: string;
  description: string;
};

//TechStack Props
export interface Tech {
  id: number;
  label: string;
  img: string;
  description: string;
  link: string;
}
