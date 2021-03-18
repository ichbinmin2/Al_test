import React from "react";
import styles from "./header.module.css";

const Header = (props) => (
  <section>
    <div className={styles.container}>
      <h1>로고</h1>
      <div className={styles.navigator}>
        <span>서비스</span>
        <span>마이페이지</span>
        <span>로그인</span>
      </div>
    </div>
  </section>
);

export default Header;
