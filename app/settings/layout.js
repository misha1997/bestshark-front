import Link from "next/link";
import "../globals.css";
import "./style.css";

export default function RootLayout({ children }) {
  return (
    <div>
      <div className="grid grid-cols-12 gap-7">
        <div className="col-span-4">
          <div className="main-block">
            <div className="header">
              <img src="/settings-white.svg" className="icon" />
              <div className="title">Settings</div>
            </div>
            <div className="content">
              <ul className="page-navigation">
                <li>
                  <Link href="/settings" className="active">
                    <img src="/user.svg" />
                    Account
                  </Link>
                </li>
                <li>
                  <Link href="/settings/social">
                    <img src="/link.svg" />
                    Social media
                  </Link>
                </li>
                <li>
                  <Link href="/settings/verification">
                    <img src="/file-plus.svg" />
                    Verefication
                  </Link>
                </li>
                <li>
                  <Link href="/settings/security">
                    <img src="/shield.svg" />
                    Security
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="main-block">
            <div className="content">
              <div className="title mb-1">Your current level: Default</div>
              Progress is calculated based on your betting amount.
              <div className="flex justify-between mt-3">
                <span>Silver</span>
                <span>Gold</span>
              </div>
              <div className="progress w-full bg-gray-200 rounded-full dark:bg-gray-800 my-2">
                <div className="progress bg-blue-600 h-2.5 rounded-full w-3"></div>
              </div>
              <div className="flex justify-between">
                <span>progress</span>
                <span>0%</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-6">{children}</div>
      </div>
    </div>
  );
}
