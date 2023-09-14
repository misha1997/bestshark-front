"use client";

import Link from "next/link";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import  Notification  from "./Notification.jsx";
import UserMenu from "./UserMenu.jsx";

const TheHeader = () => {
  return (
    <header className="flex justify-between">
      <div className="flex">
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
      </div>

    <div className="flex">
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

        
        <Notification />
        <UserMenu />

        <button className="btn">
          <img src="/message-circle.svg" alt="" />
        </button>
      </div>
    </header>
  );
};

export { TheHeader };
