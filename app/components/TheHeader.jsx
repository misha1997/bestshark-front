import Link from "next/link";

const TheHeader = () => {
  return (
    <header>
      <Link href="/" className="logo">
        <img src="/logo.svg" alt="" />
        BetShark
      </Link>
      <ul className="navigation">
        <li>
          <Link href="#">Terms of use</Link>
        </li>
        <li>
          <Link href="#">Provably fair</Link>
        </li>
        <li>
          <Link href="#">FAQ</Link>
        </li>
        <li>
          <Link href="#">Live Payouts</Link>
        </li>
      </ul>
      <div className="filler"></div>
      <Link href="#" className="btn sum">
        10 004 250.<span>19</span>
      </Link>
      <Link href="#" className="btn blue">
        Deposit
      </Link>
      <Link href="#" className="btn">
        <img src="/present.svg" alt="" />
      </Link>
      <Link href="#" className="btn">
        <img src="/supporting.svg" alt="" />
      </Link>
      <Link href="#" className="btn">
        <img src="/bell.svg" alt="" />
      </Link>
      <button className="btn dropdown">
        <img className="avatar" src="/Avatar.png" alt="" />
        janstay
      </button>
      <button className="btn">
        <img src="/message-circle.svg" alt="" />
      </button>
    </header>
  );
};

export { TheHeader };
