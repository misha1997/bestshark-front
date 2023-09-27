import Link from "next/link";

import stylesContent from "../../uikit/content.module.css";
import stylesPageNavigation from "../../uikit/page-navigation.module.css";
import stylesBadge from "../../uikit/badge.module.css";

export default function Navigation() {
  return (
    <div>
      <div className={`${stylesContent.block}`}>
        <div className={`${stylesContent.header}`}>
          <img src="/settings-white.svg" className={`${stylesContent.icon}`} />
          <div className={`${stylesContent.title}`}>Settings</div>
        </div>
        <div className={`${stylesContent.content}`}>
          <ul className={`${stylesPageNavigation.pageNavigation}`}>
            <li>
              <Link
                href="/settings"
                className={`${stylesPageNavigation.active}`}
              >
                <img src="/user.svg" />
                Account
              </Link>
            </li>
            <li>
              <Link href="/settings/social">
                <img src="/link.svg" />
                Social media
              </Link>
            </li>
            <li>
              <Link href="/settings/verification">
                <img src="/file-plus.svg" />
                Verefication
              </Link>
            </li>
            <li>
              <Link href="/settings/security">
                <img src="/shield.svg" />
                Security
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={`${stylesContent.block}`}>
        <div className={`${stylesContent.content}`}>
          <div className={`${stylesContent.title} mb-1`}>Your current level: Default</div>
          Progress is calculated based on your betting amount.
          <div className="flex justify-between mt-3">
            <span className={`${stylesBadge.badge} ${stylesBadge.silver} ${stylesBadge.small}`}>Silver</span>
            <span className={`${stylesBadge.badge} ${stylesBadge.gold} ${stylesBadge.small}`}>Gold</span>
          </div>
          <div className="progress w-full bg-gray-200 rounded-full dark:bg-gray-800 my-2">
            <div className="progress bg-blue-600 h-2.5 rounded-full w-3"></div>
          </div>
          <div className="flex justify-between">
            <span>progress</span>
            <span>0%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
