// src/components/Layout/Layout.tsx
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import styles from "./Layout.module.css";

import Footer from "../Footer/Footer";

function Layout() {
  return (
    <div className={styles.layoutWrapper}>
      <header>
        <Header />
      </header>

      <main className={styles.layoutContent}>
        <Outlet />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Layout;
