'use client';

import { useRouter } from 'next/navigation';

const SideNavItem = ({
  icon,
  text,
  link,
  isActive,
  setIsActive,
}: {
  icon: React.JSX.Element;
  text: string;
  link: string;
  isActive: string;
  setIsActive: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const router = useRouter();

  return (
    <li
      onClick={() => {
        setIsActive(text);
        router.push(link);
      }}
      className={`
        relative flex items-center py-3 px-3 my-3
        rounded-md cursor-pointer
        transition-colors group
        ${
          isActive == text
            ? 'bg-[#023B58] text-white'
            : 'hover:bg-indigo-50 dark:hover:bg-white dark:hover:text-black text-[#444444] dark:text-inherit'
        }
      `}
    >
      {icon}
      <span className="pl-3">{text}</span>
    </li>
  );
};

export default SideNavItem;
