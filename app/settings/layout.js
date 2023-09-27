import Navigation from "../components/Settings/Navigation.jsx";
import "../globals.css";
import "./style.css";

export default function RootLayout({ children }) {
  return (
    <div className="container colums">
      <Navigation />
      {children}
    </div>
  );
}
