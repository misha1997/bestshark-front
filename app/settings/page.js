import Image from "next/image";
import Link from "next/link";
import "./style.css";

export default function Settings() {
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
                  <Link href="#">
                    <img src="/user.svg" />
                    Account
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <img src="/link.svg" />
                    Social media
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <img src="/file-plus.svg" />
                    Verefication
                  </Link>
                </li>
                <li>
                  <Link href="#">
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
        <div className="col-span-6">
          <div className="main-block">
            <div className="header">
              <div className="title">Account</div>
            </div>
            <div className="account flex start items-start justify-between divider">
              <div className="userName">
                <img className="avatar" src="/Avatar.png" />
                <div className="userId">
                  janstay
                  <span>ID: 420848</span>
                </div>
              </div>
              <span className="required">KYC required</span>
            </div>
            <div className="content">
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                    <img src="/user.svg" />
                  </div>
                  <input id="username" type="text" value="janstay" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                    <img src="/mail.svg" />
                  </div>
                  <input id="email" type="email" value="janstay.ux@gmail.com" />
                </div>
              </div>
              <div className="form-group">
                <button>Save</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
