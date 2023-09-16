"use client";
import { useState } from "react";

import stylesContent from "../../uikit/content.module.css";
import stylesForm from "../../uikit/form-group.module.css";

export default function Social() {
  const [values, setValues] = useState({
    username: "t.me/mkuzhen",
  });
  const getHandler = (name) => {
    return (event) => {
      setValues({ ...values, [name]: event.target.value });
    };
  };
  return (
    <div className={`${stylesContent.block}`}>
      <div className={`${stylesContent.header}`}>
        <div className={`${stylesContent.title}`}>Social media</div>
      </div>
      <div className={`${stylesContent.content}`}>
        <div className={`${stylesForm.formGroup} ${stylesForm.link} flex-col`}>
          <label htmlFor="username">Telegram</label>
          <div className="flex">
            <div className={`${stylesForm.text}`}>https://</div>
            <input
              id="username"
              type="text"
              value={values.username}
              onChange={getHandler("username")}
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
