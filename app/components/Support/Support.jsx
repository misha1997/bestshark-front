"use client";
import { useState } from "react";

import stylesContent from "../../uikit/content.module.css";
import stylesTable from "../../uikit/table.module.css";
import stylesBadge from "../../uikit/badge.module.css";
import stylesButton from "../../uikit/button.module.css";
import styles from "./support.module.css";

export default function Support() {
  return (
    <div>
      <div className={`${stylesContent.block}`}>
        <div className={`${stylesContent.content} grid grid-cols-12`}>
          <div className="col-span-9">
            <div className={`${stylesContent.title} mb-2`}>
              <img src="/supporting-white.svg" alt="" />
              Support
            </div>
            <p>
              Open the 2FA mobile app and scan the following QR barcode. If the
              2FA Mobile App does not support QR barcodes, enter the number from
              below the picture.
            </p>
          </div>
          <div className="col-span-3 text-right">
            <button className={`${styles.createBtn}`}>Create ticket</button>
          </div>
        </div>
      </div>
      <div className={`${stylesContent.block}`}>
        <div className={`${stylesContent.header}`}>
          <div className={`${stylesContent.title}`}>Your tickets</div>
        </div>
        <div className={`${stylesContent.content} ${stylesContent.divider}`}>
          <div className={`${stylesTable.table}`}>
            <div
              className={`${stylesTable.row} ${stylesTable.header} grid grid-cols-12`}
            >
              <div className={`${stylesTable.col} col-span-1`}>#</div>
              <div className={`${stylesTable.col} col-span-3`}>Time</div>
              <div className={`${stylesTable.col} col-span-2`}>Category</div>
              <div className={`${stylesTable.col} col-span-3`}>Topic</div>
              <div className={`${stylesTable.col} col-span-2`}>Status</div>
              <div className={`${stylesTable.col} col-span-1`}></div>
            </div>
            <div className={`${stylesTable.row} grid grid-cols-12`}>
              <div className={`${stylesTable.col} col-span-1 text-white`}>
                355110
              </div>
              <div className={`${stylesTable.col} col-span-3`}>
                24 Aug 2023 19:12:08
              </div>
              <div className={`${stylesTable.col} col-span-2 text-white`}>
                Game
              </div>
              <div className={`${stylesTable.col} col-span-3 text-white`}>
                How to play coinflip?
              </div>
              <div className={`${stylesTable.col} col-span-2`}>
                <span
                  className={`${stylesBadge.badge} ${stylesBadge.red} ${stylesBadge.small} ${stylesBadge.round}`}
                >
                  Closed
                </span>
              </div>
              <div className={`${stylesTable.col} col-span-1`}>
                <button
                  className={`${stylesButton.button} ${stylesButton.small} ${stylesButton.blue}`}
                >
                  Open
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
