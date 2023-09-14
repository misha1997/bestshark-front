"use client";
import { useState } from "react";
import "../style.css";

export default function Verifivation() {
  const [values, setValues] = useState({
    username: "t.me/mkuzhen",
  });
  const getHandler = (name) => {
    return (event) => {
      setValues({ ...values, [name]: event.target.value });
    };
  };
  return (
    <div className="main-block">
      <div className="header">
        <div className="title">Verefication</div>
      </div>
      <div className="content">
        <div className="form-group flex-col">
          <label htmlFor="username">Name</label>
          <input id="username" type="text" placeholder="Enter your name" />
        </div>
        <div className="form-group flex-col">
          <label htmlFor="username">Surname</label>
          <input id="username" type="text" placeholder="Enter your surname" />
        </div>
        <div className="form-group flex-col">
          <label htmlFor="username">Country of residence</label>
          <input id="username" type="text" placeholder="Enter your country" />
        </div>
        <div className="form-group flex-col">
          <label htmlFor="username">Phone number</label>
          <input id="username" type="text" placeholder="+1 (555) 000-0000" />
        </div>
        <div className="form-group flex-col">
          <label>ID verification</label>
          <div className="select-list">
            <button className="select">Passport</button>
            <button>ID card</button>
            <button>Driver license</button>
          </div>
        </div>
        <label className="drag-form">
          <img className="icon" src="/upload.svg" />
          <p>
            <span>Click to download</span> or drag and drop <br /> SVG, PNG, JPG
            or GIF (max. 1920x1080px)
          </p>
          <input type="file" />
        </label>
        <div className="upload-file-item">
          <img src="/file.svg" />
          <div className="info">
            <div className="title">ID CARD.file</div>
            <div className="size">840 KB</div>
            <div className="progress w-full bg-gray-200 rounded-full dark:bg-gray-800 my-2">
              <div className="progress bg-blue-600 h-2.5 rounded-full w-3"></div>
            </div>
          </div>
          <button>
            <img src="/trush.svg" />
          </button>
        </div>
        <div className="upload-file-item">
          <img src="/file.svg" />
          <div className="info">
            <div className="title">ID CARD.file</div>
            <div className="size">840 KB</div>
            <div className="progress w-full bg-gray-200 rounded-full dark:bg-gray-800 my-2">
              <div className="progress bg-blue-600 h-2.5 rounded-full w-3"></div>
            </div>
          </div>
          <button>
            <img src="/trush.svg" />
          </button>
        </div>
        <div className="upload-file-item">
          <img src="/file.svg" />
          <div className="info">
            <div className="title">ID CARD.file</div>
            <div className="size">840 KB</div>
            <div className="progress w-full bg-gray-200 rounded-full dark:bg-gray-800 my-2">
              <div className="progress bg-blue-600 h-2.5 rounded-full w-3"></div>
            </div>
          </div>
          <button>
            <img src="/trush.svg" />
          </button>
        </div>
        <div className="upload-file-item">
          <img src="/file.svg" />
          <div className="info">
            <div className="title">ID CARD.file</div>
            <div className="size">840 KB</div>
            <div className="progress w-full bg-gray-200 rounded-full dark:bg-gray-800 my-2">
              <div className="progress bg-blue-600 h-2.5 rounded-full w-3"></div>
            </div>
          </div>
          <button>
            <img src="/trush.svg" />
          </button>
        </div>
        <div className="form-group">
          <button className="w-full mt-4">Send</button>
        </div>
      </div>
    </div>
  );
}
