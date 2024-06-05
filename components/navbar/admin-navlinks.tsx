import { Briefcase, LayoutDashboard, MessageCircle, NotebookPen, SlidersHorizontal, Trash2, User } from "lucide-react";

export const adminNavlinks = [
  {
    name: 'Dashboard',
    link: '/',
    owner: false,
    icon: <LayoutDashboard className='h-5 w-5 mx-2'/>
  },
  {
    name: 'Employees',
    link: 'employees',
    owner: true,
    icon: <User className='h-5 w-5 mx-2'/>
  },
  {
    name: 'Add Job',
    link: 'add-job',
    owner: false,
    icon: <NotebookPen className='h-5 w-5 mx-2'/>
  },
  {
    name: 'Jobs',
    link: 'jobs',
    owner: false,
    icon: <Briefcase className='h-5 w-5 mx-2'/>
  },
  {
    name: 'Contacts',
    link: 'contacts',
    owner: true,
    icon: <MessageCircle className='h-5 w-5 mx-2'/>
  },
  {
    name: 'Trash Bin',
    link: 'trash',
    owner: false,
    icon: <Trash2 className='h-5 w-5 mx-2'/>
  },
  {
    name: 'Settings',
    link: 'settings',
    owner: false,
    icon: <SlidersHorizontal className='h-5 w-5 mx-2'/>
  },
];