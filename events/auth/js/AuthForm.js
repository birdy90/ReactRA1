'use strict';

const handleKeyDown = (e) => {
  if (e.keyCode === 13) {
    e.preventDefault();
  } else {
    switch (e.target.type) {
      case 'email':
        if (e.key.match(/[^\w\d@._\-]/))
          e.preventDefault();
        break;
      case 'password':
        if (e.key.match(/[^\w\d_]/))
          e.preventDefault();
        break;
    }
  }
};

const preventClickSubmit = (e) => {
  e.preventDefault();
};

const AuthForm = props => {

  let name;
  let email;
  let password;

  const onAuth = (e) => {
    if (props.onAuth === undefined || typeof props.onAuth !== "function") {
      e.preventDefault();
      return;
    }

    const user = {
      name: name.value,
      email: email.value,
      password: password.value
    };
    props.onAuth(user);
  };

  return (
    <form className="ModalForm" action="/404/auth/" method="POST" onSubmit={onAuth}>
      <div className="Input inputName">
        <input required type="text" placeholder="Имя" ref={e => name = e} onKeyDown={handleKeyDown}/>
        <label/>
      </div>
      <div className="Input inputEmail">
        <input type="email" placeholder="Электронная почта" ref={e => email = e} onKeyDown={handleKeyDown}/>
        <label/>
      </div>
      <div className="Input inputPassword">
        <input required type="password" placeholder="Пароль" ref={e => password = e} onKeyDown={handleKeyDown}/>
        <label/>
      </div>
      <button type="submit" onClick={preventClickSubmit}>
        <span>Войти</span>
        <i className="fa fa-fw fa-chevron-right"/>
      </button>
    </form>
  );
};
