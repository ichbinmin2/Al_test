import React, { useState } from 'react';
import Header from '../header/header';
import styles from './main.module.css';

const Main = (props) => {
  const [onLogin, setOnLogin] = useState(false);

  const loginCheck = () => {
    alert('로그인을 하세요');
  };
  return (
    <section className={styles.section}>
      <Header />
      <div className={styles.mainContainer}>
        <h1>서비스 페이지</h1>
        <img src="/images/image.jpg" alt="mainImage" />
        <button className={styles.btn} onClick={loginCheck}>
          주문하기
        </button>
      </div>
    </section>
  );
};

export default Main;
