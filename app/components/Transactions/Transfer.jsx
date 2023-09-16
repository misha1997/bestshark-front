"use client";
import { useState } from "react";

import stylesContent from "../../uikit/content.module.css";
import stylesForm from "../../uikit/form-group.module.css";
import stylesTable from "../../uikit/table.module.css";
import stylesBadge from "../../uikit/badge.module.css";
import style from "./transactions.module.css";

export default function Transfer() {
  return (
    <div>
      <div className={`${stylesContent.block}`}>
        <div className={`${stylesContent.header}`}>
          <div className={`${stylesContent.title}`}>Transfer</div>
        </div>
        <div className={`${stylesContent.content} ${stylesContent.divider}`}>
          <div className={`${stylesForm.formGroup} flex-col`}>
            <label htmlFor="username">Recipient username</label>
            <div className="relative">
              <input id="username" type="text" placeholder="Enter username" />
            </div>
          </div>
          <div className={`${stylesForm.formGroup} flex-col`}>
            <label htmlFor="username">Enter the amount</label>
            <div className="relative">
              <input id="username" type="text" placeholder="0" />
            </div>
          </div>
          <div className={`${stylesForm.formGroup}`}>
            <button className="w-full mt-4">Create</button>
          </div>
        </div>
      </div>
      <div className={`${stylesContent.block}`}>
        <div className={`${stylesContent.header}`}>
          <div className={`${stylesContent.title}`}>History</div>
        </div>
        <div className={`${stylesContent.content} ${stylesContent.divider}`}>
          <div className={`${stylesTable.table}`}>
            <div className={`${stylesTable.row} ${stylesTable.header} grid grid-cols-12`}>
                <div className={`${stylesTable.col} col-span-5`}>Time</div>
                <div className={`${stylesTable.col} col-span-4`}>Amount</div>
                <div className={`${stylesTable.col} col-span-3 text-right`}>Status</div>
            </div>
            <div className={`${stylesTable.row} grid grid-cols-12`}>
                <div className={`${stylesTable.col} col-span-5`}>24 Aug 2023 19:12:08</div>
                <div className={`${stylesTable.col} col-span-4 text-white`}>
                    <img src="/coins/USDT.svg" alt="" />
                    50
                </div>
                <div className={`${stylesTable.col} col-span-3 text-right`}>
                    <span className={`${stylesBadge.badge} ${stylesBadge.red} ${stylesBadge.small} ${stylesBadge.round}`}>Cancel</span>
                </div>
            </div>
            <div className={`${stylesTable.row} grid grid-cols-12`}>
                <div className={`${stylesTable.col} col-span-5`}>24 Aug 2023 19:12:08</div>
                <div className={`${stylesTable.col} col-span-4 text-white`}>
                    <img src="/coins/USDT.svg" alt="" />
                    50
                </div>
                <div className={`${stylesTable.col} col-span-3 text-right`}>
                    <span className={`${stylesBadge.badge} ${stylesBadge.orange} ${stylesBadge.small} ${stylesBadge.round}`}>Process</span>
                </div>
            </div>
            <div className={`${stylesTable.row} grid grid-cols-12`}>
                <div className={`${stylesTable.col} col-span-5`}>24 Aug 2023 19:12:08</div>
                <div className={`${stylesTable.col} col-span-4 text-white`}>
                    <img src="/coins/USDT.svg" alt="" />
                    50
                </div>
                <div className={`${stylesTable.col} col-span-3 text-right`}>
                    <span className={`${stylesBadge.badge} ${stylesBadge.green} ${stylesBadge.small} ${stylesBadge.round}`}>Successful</span>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
