import { useState } from 'react';
import { Button } from '../button/button';
import { Logo } from '../../assets';
import clsx from 'clsx';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="py-4 absolute t-0 mx-auto w-full">
      <div className="container1">
        <div className="flex items-start justify-between">
          <a href="#" className="relative z-50">
            <Logo className="w-[140px] md:w-[195px] h-full" />
          </a>
          <nav
            className={clsx(
              '-translate-x-[150%] [transition:0.2s_linear] pr-10 pt-20 pl-8 min-h-screen left-0 top-0 bottom-0 w-full lg:min-h-0 lg:pt-0 lg:pl-0 absolute lg:static bg-blue-400 lg:bg-transparent',
              isOpen && 'translate-x-[0]',
            )}>
            <ul className="text-base text-white flex gap-12 mt-3 flex-col lg:flex-row">
              <li onClick={() => setIsOpen(false)}>
                <a
                  href="#"
                  className="tracking-[-0.02em] opacity-90 hover:opacity-100 transition-all">
                  About us
                </a>
              </li>
              <li onClick={() => setIsOpen(false)}>
                <a
                  href="#"
                  className="tracking-[-0.02em] opacity-90 hover:opacity-100 transition-all">
                  Services
                </a>
              </li>
              <li onClick={() => setIsOpen(false)}>
                <a
                  href="#"
                  className="tracking-[-0.02em] opacity-90 hover:opacity-100 transition-all">
                  Why DevOptima
                </a>
              </li>
            </ul>
          </nav>
          <Button className="lg:inline-flex hidden!" variant="outline">
            Get started
          </Button>
          <div className={clsx('burger', isOpen && 'open')} onClick={() => setIsOpen(!isOpen)}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </header>
  );
};
