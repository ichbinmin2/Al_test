import React from 'react';
import styles from './menuModal.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const MenuModal = ({ checked, onCheckBox }) => {
  return (
    <section className={styles.modalBox}>
      <ul className={styles.hamlist}>
        <li className={styles.service}>
          <span className={styles.span}>서비스</span>
        </li>
        <li className={styles.mypage}>
          <span className={styles.span}>회원가입</span>
        </li>
        <li className={styles.login}>
          <span className={styles.span}>로그인</span>
        </li>
      </ul>
      <FontAwesomeIcon
        icon={faTimes}
        className={styles.stick}
        onClick={onCheckBox}
      />
    </section>
  );
};

export default MenuModal;
