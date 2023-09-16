"use client";
import { useState } from "react";

import stylesContent from "../../uikit/content.module.css";
import stylesForm from "../../uikit/form-group.module.css";
import stylesTable from "../../uikit/table.module.css";
import stylesBadge from "../../uikit/badge.module.css";
import style from "./transactions.module.css";

export default function Withdrawal() {
  return (
    <div>
      <div className={`${stylesContent.block}`}>
        <div className={`${stylesContent.header}`}>
          <div className={`${stylesContent.title}`}>History</div>
        </div>
        <div className={`${stylesContent.content} ${stylesContent.divider}`}>
          <div className={`${stylesTable.table}`}>
            <div className={`${stylesTable.row} ${stylesTable.header} grid grid-cols-12`}>
                <div className={`${stylesTable.col} col-span-3`}>Game</div>
                <div className={`${stylesTable.col} col-span-4`}>Time</div>
                <div className={`${stylesTable.col} col-span-3`}>Amount</div>
                <div className={`${stylesTable.col} col-span-2 text-right`}>Status</div>
            </div>
            <div className={`${stylesTable.row} grid grid-cols-12`}>
                <div className={`${stylesTable.col} col-span-3 text-white`}>
                    <img src="/Jackpot.svg" alt="" />
                    Jackpot
                </div>
                <div className={`${stylesTable.col} col-span-4`}>24 Aug 2023 19:12:08</div>
                <div className={`${stylesTable.col} col-span-3 text-white`}>
                    <img src="/coins/USDT.svg" alt="" />
                    50
                </div>
                <div className={`${stylesTable.col} col-span-2 text-right`}>
                    <span className={`${stylesBadge.badge} ${stylesBadge.red} ${stylesBadge.small} ${stylesBadge.round}`}>Lose</span>
                </div>
            </div>
            <div className={`${stylesTable.row} grid grid-cols-12`}>
                <div className={`${stylesTable.col} col-span-3 text-white`}>
                    <img src="/Jackpot.svg" alt="" />
                    Jackpot
                </div>
                <div className={`${stylesTable.col} col-span-4`}>24 Aug 2023 19:12:08</div>
                <div className={`${stylesTable.col} col-span-3 text-white`}>
                    <img src="/coins/USDT.svg" alt="" />
                    50
                </div>
                <div className={`${stylesTable.col} col-span-2 text-right`}>
                    <span className={`${stylesBadge.badge} ${stylesBadge.green} ${stylesBadge.small} ${stylesBadge.round}`}>Win</span>
                </div>
            </div>
            <div className={`${stylesTable.row} grid grid-cols-12`}>
                <div className={`${stylesTable.col} col-span-3 text-white`}>
                    <img src="/Roulette.svg" alt="" />
                    Roulette
                </div>
                <div className={`${stylesTable.col} col-span-4`}>24 Aug 2023 19:12:08</div>
                <div className={`${stylesTable.col} col-span-3 text-white`}>
                    <img src="/coins/USDT.svg" alt="" />
                    5000
                </div>
                <div className={`${stylesTable.col} col-span-2 text-right`}>
                    <span className={`${stylesBadge.badge} ${stylesBadge.green} ${stylesBadge.small} ${stylesBadge.round}`}>Win</span>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
