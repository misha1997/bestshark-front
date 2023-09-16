import Link from "next/link";

import stylesContent from "../../uikit/content.module.css";
import stylesPageNavigation from "../../uikit/page-navigation.module.css";

export default function Navigation() {
  return (
    <div>
      <div className={`${stylesContent.block}`}>
        <div className={`${stylesContent.header}`}>
          <img src="/document-white.svg" className={`${stylesContent.icon}`} />
          <div className={`${stylesContent.title}`}>Transactions</div>
        </div>
        <div className={`${stylesContent.content}`}>
          <ul className={`${stylesPageNavigation.pageNavigation}`}>
            <li>
              <Link
                href="/transactions"
                className={`${stylesPageNavigation.active}`}
              >
                <img src="/credit-card.svg" />
                Deposit
              </Link>
            </li>
            <li>
              <Link href="/transactions/withdrawal">
                <img src="/withdrawl.svg" />
                Withdrawal
              </Link>
            </li>
            <li>
              <Link href="/transactions/bets">
                <img src="/clock.svg" />
                Bets
              </Link>
            </li>
            <li>
              <Link href="/transactions/transfer">
                <img src="/coin-stack.svg" />
                Transfer
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
