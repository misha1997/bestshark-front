"use client";
import { useState } from "react";
import "../style.css";

export default function Social() {
  const [values, setValues] = useState({
    username: "t.me/mkuzhen"
  });
  const getHandler = (name) => {
    return (event) => {
      setValues({ ...values, [name]: event.target.value });
    };
  };
  return (
    <div className="main-block">
      <div className="header">
        <div className="title">Social media</div>
      </div>
      <div className="content">
        <div className="form-group flex-col link">
          <label htmlFor="username">Telegram</label>
          <div className="flex">
            <div className="text">
              https://
            </div>
            <input
              id="username"
              type="text"
              value={values.username}
              onChange={getHandler("username")}
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
