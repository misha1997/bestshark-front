"use client";
import { useState } from "react";

import stylesContent from "../../uikit/content.module.css";
import stylesForm from "../../uikit/form-group.module.css";

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
      <div className={`${stylesContent.block}`}>
        <div className={`${stylesContent.header}`}>
          <div className={`${stylesContent.title}`}>Security</div>
        </div>
        <div className={`${stylesContent.content}`}>
          <div className={`${stylesForm.formGroup} flex-col`}>
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
          <div className={`${stylesForm.formGroup} flex-col`}>
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
          <div className={`${stylesForm.formGroup} flex-col`}>
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
          <div className={`${stylesForm.formGroup}`}>
            <button className="w-full mt-5">Save</button>
          </div>
        </div>
      </div>
      <div className={`${stylesContent.block}`}>
        <div className={`${stylesContent.content} ${stylesContent.divider} grid grid-cols-12 gap-7`}>
          <div className="col-span-8">
            <div className={`${stylesContent.title}`}>
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
        <div className={`${stylesContent.content} ${stylesContent.divider}`}>
          <div className={`${stylesForm.formGroup} flex flex-row`}>
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
        <div className={`${stylesContent.content} ${stylesContent.divider}`}>
          <div className={`${stylesForm.formGroup} flex-col`}>
            <label htmlFor="username">Code 2FA</label>
            <input id="username" type="text" placeholder="Enter the code" />
          </div>
          <div className={`${stylesForm.formGroup}`}>
            <button className="w-full mt-4">Enable</button>
          </div>
        </div>
      </div>
    </div>
  );
}
