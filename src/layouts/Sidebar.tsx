import { forwardRef } from 'react';
import Link from 'next/link';
import { ArrowRightOnRectangleIcon, HomeIcon, UserIcon } from '@heroicons/react/24/solid';
import { useRouter } from 'next/router';
import clsx from 'clsx';

const Sidebar = forwardRef<any>(({ }, ref) => {
  const router = useRouter();

  const menus = [
    { label: 'Dashboard', link: '/', icon: <HomeIcon className="h-5 w-5" /> },
    { label: 'Users', link: '/users', icon: <UserIcon className="h-5 w-5" /> },
    { label: 'Login', link: '/auth/login', icon: <ArrowRightOnRectangleIcon className="h-5 w-5" /> },
  ];

  return (
    <div ref={ref} className="fixed w-52 h-full bg-gray-200 shadow-sm text-white">
      <div className="flex justify-center mt-4 mb-10">
        <picture>
          <img className="w-28 h-auto" src="/vercel.svg" alt="logo" />
        </picture>
      </div>

      <div className="flex flex-col">
        {menus?.map((menu) => (
          <Link key={Math.random()} href={menu?.link}>
            <div
              className={clsx(
                'pl-5 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors',
                router?.pathname == menu?.link
                  ? 'bg-gray-400 text-white'
                  : 'text-black hover:bg-gray-400 hover:text-gray-100'
              )}
            >
              <div className="mr-2">
                <p>{menu?.icon}</p>
              </div>
              <div>
                <p>{menu?.label}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
});

Sidebar.displayName = 'Sidebar';

export default Sidebar;
