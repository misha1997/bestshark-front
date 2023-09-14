"use client";
import { useState } from "react";
import "./style.css";

export default function Settings() {
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
        <span className="red">KYC required</span>
      </div>
      <div className="content">
        <div className="form-group flex-col icon-left">
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
        <div className="form-group flex-col icon-left">
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
        <div className="form-group">
          <button className="w-full mt-4">Save</button>
        </div>
      </div>
    </div>
  );
}
