import Navbar from "./components/Navbar";
import styles from './tailwind.css';

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}

export default function App() {
  return (
    <html>
      <head>
        <title>Glowing Navbar</title>
      </head>
      <body>
        <Navbar />
        {/* Your other content */}
      </body>
    </html>
  );
}
