'use client';

import React from 'react';
import { useState, useEffect } from 'react';

import { Avatar, AvatarFallback, AvatarImage } from '@ex03/ui-components';
import SideNavItem from './side-nav-item';

import GroupsIcon from '@mui/icons-material/Groups';
import EditIcon from '@mui/icons-material/Edit';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

import { ThemeToggler } from './theme-toggler';

const SideNav = () => {
  const [isActive, setIsActive] = useState('Manage Users');

  return (
    <div>
      <div className="border-b-[3px] dark:border-inherit border-[#FBFCFD]">
        <div className="relative flex flex-row items-center p-6 w-full">
          <div>
            <Avatar className="w-[50px] h-[50px]">
              <AvatarImage
                src="https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg"
                alt="@shadcn"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
          <div className="block p-0 pl-2">
            <p className="font-bold text-xl text-[#2D2D2D] dark:text-inherit">
              Cyril Ethan
            </p>
            <p className="text-sm mt-[-6px] text-[#686868] dark:text-inherit">
              Admin
            </p>
          </div>
          <div className="absolute right-5">
            <ThemeToggler />
          </div>
        </div>
      </div>
      <div className="p-5">
        {NavItems.map((navItem, idx) => {
          return (
            <SideNavItem
              key={idx}
              icon={navItem.icon}
              text={navItem.text}
              link={navItem.link}
              isActive={isActive}
              setIsActive={setIsActive}
            />
          );
        })}
      </div>
    </div>
  );
};

const NavItems = [
  { text: 'Edit Profile', icon: <EditIcon />, link: '/dashboard/user-profile' },
  { text: 'Manage Users', icon: <GroupsIcon />, link: '/dashboard' },
  { text: 'Settings', icon: <SettingsIcon />, link: '/dashboard/settings' },
  { text: 'Log out', icon: <LogoutIcon />, link: '/' },
];

export default SideNav;
