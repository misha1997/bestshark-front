"use client";
import { useState } from "react";
import "../style.css";

export default function Security() {
  const [values, setValues] = useState({
    username: "janstay",
    email: "janstay.ux@gmail.com",
  });
  const getHandler = (name) => {
    return (event) => {
      setValues({ ...values, [name]: event.target.value });
    };
  };
  return (
    <div>
      <div className="main-block">
        <div className="header">
          <div className="title">Security</div>
        </div>
        <div className="content">
          <div className="form-group flex-col">
            <label htmlFor="username">Old password</label>
            <div className="relative">
              <div className="absolute inset-y-0 right-4 flex items-center">
                <img className="cursor" src="/eye.svg" />
              </div>
              <input
                id="username"
                type="password"
                value={values.username}
                onChange={getHandler("username")}
              />
            </div>
          </div>
          <div className="form-group flex-col">
            <label htmlFor="username">New password</label>
            <div className="relative">
              <div className="absolute inset-y-0 right-4 flex items-center">
                <img className="cursor" src="/eye.svg" />
              </div>
              <input
                id="username"
                type="password"
                value={values.username}
                onChange={getHandler("username")}
              />
            </div>
          </div>
          <div className="form-group flex-col">
            <label htmlFor="username">Confirm new password</label>
            <div className="relative">
              <div className="absolute inset-y-0 right-4 flex items-center">
                <img className="cursor" src="/eye.svg" />
              </div>
              <input
                id="username"
                type="password"
                value={values.username}
                onChange={getHandler("username")}
              />
            </div>
          </div>
          <div className="form-group">
            <button className="w-full mt-5">Save</button>
          </div>
        </div>
      </div>
      <div className="main-block">
        <div className="grid grid-cols-12 gap-7 content divider">
          <div className="col-span-8">
            <div className="title">
              <img src="/shield-white.svg" />
              Two Factor Authentication
            </div>
            <p className="mt-2 mb-3">
              Open the 2FA mobile app and scan the following QR barcode. If the
              2FA Mobile App does not support QR barcodes, enter the number from
              below the picture.
            </p>
            <span className="red">Disabled</span>
          </div>
          <div className="col-span-4">
            <img src="/qr.png" />
          </div>
        </div>
        <div className="content divider">
          <div className="flex flex-row form-group">
            <div className="relative w-full mr-2">
              <div className="absolute inset-y-0 right-4 flex items-center">
                <img className="cursor" src="/copy.svg" />
              </div>
              <input
                id="username"
                type="text"
                disabled
                value={values.username}
                onChange={getHandler("username")}
              />
            </div>
            <button className="w-auto">
              <img src="/rotate-ccw.svg" />
            </button>
          </div>
        </div>
        <div className="content divider">
          <div className="form-group flex-col">
            <label htmlFor="username">Code 2FA</label>
            <input
              id="username"
              type="text"
              placeholder="Enter the code"
            />
          </div>
          <div className="form-group">
            <button className="w-full mt-4">Enable</button>
          </div>
        </div>
      </div>
    </div>
  );
}
