import React, { useState } from 'react';
import styles from './signUp.module.css';

const API = 'http://106.10.53.116:8099/sign-up';

const SignUp = (props) => {
  const [email, setEmail] = useState('@');
  const [passWord, setPassWord] = useState(2);
  const [check, setCheck] = useState();
  const [mobile, setMobile] = useState('12345678');
  const [message, setMessage] = useState();

  const handleInput = (event) => {
    event.preventDefault();
    const messages = {
      [event.target.name]: event.target.value,
    };
    setMessage({ messages });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    fetch(API, {
      method: 'POST',
      body: JSON.stringify({
        email: setEmail(email),
        passWord: setPassWord(passWord),
        mobile: setMobile(mobile),
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log('=============');
        console.log('백엔드 응답 메세지 :', result);
        if (result.message === '123456789') {
          alert('회원 가입 완료');
          //   this.props.history.push('/');
        }
      });
  };

  return (
    <section>
      <div className={styles.signupContainer}>
        <div className={styles.signupBoard}>
          <div className={styles.header}>
            <span className={styles.span}>Sign up</span>
          </div>
          <div className={styles.joinInfoBoard}>
            <div className={styles.inputSection}>
              <form>
                <input
                  name={email}
                  onChange={handleInput}
                  type="text"
                  className={styles.emailInput}
                  required
                  placeholder="Email Address"
                />
                <span name="inputSign" className={styles.emailMessage}>
                  이메일 주소를 입력하세요.
                </span>

                <input
                  name={passWord}
                  onChange={handleInput}
                  type="password"
                  className={styles.passwordInput}
                  required
                  placeholder="Password"
                />
                <span className={styles.passwordMessage}>
                  비밀번호를 입력하세요.
                </span>
                <input
                  name={passWord}
                  onChange={handleInput}
                  type="password"
                  className={styles.passwordInput}
                  required
                  placeholder="Password Check"
                />
                <span className={styles.passwordMessage}>비밀번호 확인</span>
                <input
                  name={mobile}
                  onChange={handleInput}
                  type="text"
                  className={styles.mobileInput}
                  required
                  placeholder="Phone Number"
                />
                <span className={styles.mobileMessage}>번호를 입력하세요</span>
              </form>
            </div>
          </div>
          <div className="signupBtnWrap">
            <button
              onClick={handleLogin}
              className={
                styles.falseBtn
                // this.state.allCheck === true &&
                // this.state.email.includes('@') &&
                // this.state.name.length > 1 &&
                // this.state.password.length > 7
                //   ? 'falseBtn signupBtn'
                //   : 'falseBtn'
              }
            >
              Sign up
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
