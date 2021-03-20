import React, { useState } from 'react';
import Header from '../header/header';
import MenuModal from '../menuModal/menuModal';
import styles from './main.module.css';

const Main = (props) => {
  const [onLogin, setOnLogin] = useState(false);
  const [checked, setChecked] = useState(false);

  const onCheckBox = () => {
    setChecked(!checked);
  };

  const loginCheck = () => {
    alert('로그인을 하세요');
  };

  // const logout = () => {
  //   localStorage.removeItem("token");
  //   localStorage.removeItem("user_data");
  //   window.location.reload();
  // };

  return (
    <section className={styles.section}>
      <div className={styles.modalContainer}>
        {checked && <MenuModal onCheckBox={onCheckBox} checked={checked} />}
      </div>
      <Header onCheckBox={onCheckBox} checked={checked} />
      <div className={styles.mainContainer}>
        <h1>서비스 페이지</h1>
        <img className={styles.image} src="/images/image.jpg" alt="mainImage" />
        <button className={styles.btn} onClick={loginCheck}>
          주문하기
        </button>
      </div>
    </section>
  );
};

export default Main;
