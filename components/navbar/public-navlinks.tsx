import { BookUser, Briefcase, Facebook, Handshake, Headset, Instagram, LayoutDashboard, NotebookPen, SlidersHorizontal, User } from "lucide-react";

export const navlinks = [
  {
    name: 'Home',
    link: '/',
    icon: <LayoutDashboard className='h-5 w-5 mx-2'/>
  },
  {
    name: 'Current Openings',
    link: 'jobs',
    icon: <Briefcase className='h-5 w-5 mx-2'/>
  },
  {
    name: 'About Us',
    link: 'about',
    icon: <BookUser className='h-5 w-5 mx-2'/>
  },
  {
    name: 'Partners',
    link: 'partners',
    icon: <Handshake className='h-5 w-5 mx-2'/>
  },
  {
    name: 'Contact Us',
    link: 'contact',
    icon: <Headset className='h-5 w-5 mx-2'/>
  },
  {
    name: '',
    social: true,
    link: 'www.instagram.com',
    icon: <Instagram className='h-5 w-5 mx-2'/>
  }
];