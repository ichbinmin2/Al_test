import React, { useState } from 'react';
import styles from './header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Header = (props) => {
  const [checked, setChecked] = useState(false);

  const onCheckBox = () => {
    setChecked(!checked);
    console.log(checked);
  };
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <span className={styles.logo}>Alethio</span>
        <div className={styles.navigator}>
          <div className={styles.checkContainer}>
            <FontAwesomeIcon
              icon={faBars}
              className={`${styles.barHam} ${checked === true && styles.ham}`}
              onClick={onCheckBox}
            />
            <div className={styles.menu}>
              <FontAwesomeIcon
                icon={faTimes}
                className={`${styles.barStick} ${
                  checked !== true && styles.stick
                }`}
                onClick={onCheckBox}
              />
              <ul className={styles.list}>
                <li className={styles.service}>
                  <span className={styles.span}>서비스</span>
                </li>
                <li className={styles.mypage}>
                  <span className={styles.span}>마이페이지</span>
                </li>
                <li className={styles.login}>
                  <span className={styles.span}>로그인</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
