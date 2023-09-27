"use client";
import { useState } from "react";

import stylesContent from "../../uikit/content.module.css";
import stylesForm from "../../uikit/form-group.module.css";
import style from "./settings.module.css";

export default function Verification() {
  return (
    <div className={`${stylesContent.block}`}>
      <div className={`${stylesContent.header}`}>
        <div className={`${stylesContent.title}`}>Verefication</div>
      </div>
      <div className={`${stylesContent.content}`}>
        <div className={`${stylesForm.formGroup} flex-col`}>
          <label htmlFor="username">Name</label>
          <input id="username" type="text" placeholder="Enter your name" />
        </div>
        <div className={`${stylesForm.formGroup} flex-col`}>
          <label htmlFor="username">Surname</label>
          <input id="username" type="text" placeholder="Enter your surname" />
        </div>
        <div className={`${stylesForm.formGroup} flex-col`}>
          <label htmlFor="username">Country of residence</label>
          <input id="username" type="text" placeholder="Enter your country" />
        </div>
        <div className={`${stylesForm.formGroup} flex-col`}>
          <label htmlFor="username">Phone number</label>
          <input id="username" type="text" placeholder="+1 (555) 000-0000" />
        </div>
        <div className={`${style.selectList} flex-col`}>
          <label>ID verification</label>
          <div className={style.buttons}>
            <button className={`${style.select}`}>Passport</button>
            <button>ID card</button>
            <button>Driver license</button>
          </div>
        </div>
        <label className={`${stylesForm.dragForm} flex-col`}>
          <img className={`${stylesForm.icon}`} src="/upload.svg" />
          <p>
            <span>Click to download</span> or drag and drop <br /> SVG, PNG, JPG
            or GIF (max. 1920x1080px)
          </p>
          <input type="file" />
        </label>
        <div className={`${style.uploadFileItem}`}>
          <img src="/file.svg" />
          <div className={`${style.info}`}>
            <div className={`${style.title}`}>ID CARD.file</div>
            <div className={`${style.size}`}>840 KB</div>
            <div className={`${style.progress} w-full bg-gray-200 rounded-full dark:bg-gray-800 my-2`}>
              <div className={`${style.progress} bg-blue-600 h-2.5 rounded-full w-3`}></div>
            </div>
          </div>
          <button>
            <img src="/trush.svg" />
          </button>
        </div>
        <div className={`${stylesForm.formGroup}`}>
          <button className="w-full mt-4">Send</button>
        </div>
      </div>
    </div>
  );
}
