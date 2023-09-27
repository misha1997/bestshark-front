"use client";
import { useState } from "react";

import stylesContent from "../../uikit/content.module.css";
import stylesForm from "../../uikit/form-group.module.css";
import stylesBadge from "../../uikit/badge.module.css";
import style from "./settings.module.css";

export default function Account() {
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
    <div className={`${stylesContent.block}`}>
      <div className={`${stylesContent.header}`}>
        <div className={`${stylesContent.title}`}>Account</div>
      </div>
      <div className={`${style.account} flex start items-start justify-between divider`}>
        <div className={`${style.userName}`}>
          <img className={`${style.avatar}`} src="/Avatar.png" />
          <div className={`${style.userId}`}>
            janstay
            <span>ID: 420848</span>
          </div>
        </div>
        <span className={`${stylesBadge.badge} ${stylesBadge.round} ${stylesBadge.middle} ${stylesBadge.red}`}>KYC required</span>
      </div>
      <div className={`${stylesContent.content}`}>
        <div className={`${stylesForm.formGroup} ${stylesForm.iconLeft} flex-col`}>
          <label htmlFor="username">Username</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
              <img src="/user.svg" />
            </div>
            <input
              id="username"
              type="text"
              value={values.username}
              onChange={getHandler("username")}
            />
          </div>
        </div>
        <div className={`${stylesForm.formGroup} ${stylesForm.iconLeft} flex-col`}>
          <label htmlFor="email">Email</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
              <img src="/mail.svg" />
            </div>
            <input
              id="email"
              type="email"
              value={values.email}
              onChange={getHandler("email")}
            />
          </div>
        </div>
        <div className={`${stylesForm.formGroup}`}>
          <button className="w-full mt-4">Save</button>
        </div>
      </div>
    </div>
  );
}
