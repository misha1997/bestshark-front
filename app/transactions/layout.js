import Navigation from "../components/Transactions/Navigation.jsx";
import "../globals.css";

export default function RootLayout({ children }) {
  return (
    <div className="container colums">
      <Navigation />
      {children}
    </div>
  );
}
