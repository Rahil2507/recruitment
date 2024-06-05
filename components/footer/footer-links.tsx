import { BookUser, Copyright, EarthLock, Facebook, Headset, Instagram, Mail, Notebook, Receipt, ShieldPlus, Twitter, Waypoints, WaypointsIcon } from "lucide-react";

export const footerUsefulLinks = [
  {
    name: 'About Us',
    link: 'about',
    icon: <BookUser className='h-4 w-4 mr-2'/>
  },
  {
    name: 'Blog',
    link: 'blog',
    icon: <Notebook className='h-4 w-4 mr-2'/>
  },
  {
    name: 'Discord',
    link: 'discord',
    icon: <WaypointsIcon className='h-4 w-4 mr-2'/>
  },
  {
    name: 'Admin',
    link: 'admin',
    icon: <ShieldPlus className='h-4 w-4 mr-2'/>
  },
];

export const footerOtherLinks = [
  {
    name: 'MIT license',
    link: 'license',
    icon: <Copyright className='h-4 w-4 mr-2'/>
  },
  {
    name: 'Terms & Conditions',
    link: 'tnc',
    icon: <Receipt className='h-4 w-4 mr-2'/>
  },
  {
    name: 'Privacy Policies',
    link: 'privacy',
    icon: <EarthLock className='h-4 w-4 mr-2'/>
  },
  {
    name: 'Contact Us',
    link: 'contact',
    icon: <Headset className='h-4 w-4 mr-2'/>
  },
];


export const footerSocialLinks = [
  {
    name: 'Facebook',
    link: 'facebook',
    icon: <Facebook className='h-6 w-6'/>
  },
  {
    name: 'Instagram',
    link: 'instagram',
    icon: <Instagram className='h-6 w-6'/>
  },
  {
    name: 'Twitter',
    link: 'twitter',
    icon: <Twitter className='h-6 w-6'/>
  },
  {
    name: 'Google+',
    link: 'mail',
    icon: <Mail className='h-6 w-6'/>
  },
];

