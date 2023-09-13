"use client";

import Link from "next/link";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";

const TheHeader = () => {
  return (
    <header>
      <Link href="/" className="logo">
        <img src="/logo.svg" alt="" />
        BetShark
      </Link>
      <ul className="navigation">
        <li>
          <Link href="#">Terms of use</Link>
        </li>
        <li>
          <Link href="#">Provably fair</Link>
        </li>
        <li>
          <Link href="#">FAQ</Link>
        </li>
        <li>
          <Link href="#">Live Payouts</Link>
        </li>
      </ul>
      <div className="filler"></div>
      <Link href="#" className="btn sum">
        10 004 250.<span>19</span>
      </Link>
      <Link href="#" className="btn blue">
        Deposit
      </Link>
      <Link href="#" className="btn">
        <img src="/present.svg" alt="" />
      </Link>
      <Link href="#" className="btn">
        <img src="/supporting.svg" alt="" />
      </Link>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="btn">
            <img src="/bell.svg" alt="" />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="dropdown-list absolute right-0 z-10 mt-2 w-96 origin-top-right divide-y focus:outline-none">
            <Menu.Item>
              <div className="dropdown-item notification-header">
                Notifications <span>Mark all as read</span>
              </div>
            </Menu.Item>
            <Menu.Item>
              <Link href="#" className="dropdown-item notification active">
                <div className="title">Ticket #355110</div>
                <p>
                  Ahhh, I won the battle without losing a single ship and the
                  mission was not completed, why is that?
                </p>
                <div className="date">5h ago</div>
              </Link>
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>

      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="btn dropdown">
            <img className="avatar" src="/Avatar.png" alt="" />
            janstay
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="dropdown-list account absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y focus:outline-none">
            <Menu.Item>
              <Link href="#" className="dropdown-item">
                <div className="userName py-1">
                  <img className="avatar" src="/Avatar.png" alt="" />
                  <div className="userId">
                    janstay
                    <span>ID: 420848</span>
                  </div>
                </div>
              </Link>
            </Menu.Item>
            <div className="divider py-1">
              <Menu.Item>
                <Link href="#" className="dropdown-item">
                  <img src="/document.svg" alt="" />
                  Edit
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link href="#" className="dropdown-item">
                  <img src="/settings.svg" alt="" />
                  Settings
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link href="#" className="dropdown-item">
                  <img src="/clock.svg" alt="" />
                  Bets
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link href="#" className="dropdown-item">
                  <img src="/shield.svg" alt="" />
                  Provably Fair
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link href="#" className="dropdown-item">
                  <img src="/supporting.svg" alt="" />
                  Support
                </Link>
              </Menu.Item>
            </div>
            <div className="divider py-1">
              <Menu.Item>
                <Link href="#" className="dropdown-item logout">
                  <img src="/log-out.svg" alt="" />
                  Logout
                </Link>
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
      <button className="btn">
        <img src="/message-circle.svg" alt="" />
      </button>
    </header>
  );
};

export { TheHeader };
