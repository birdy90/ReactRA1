'use strict';

const AuthForm = props => {
  let name, email, password;
  const handleSubmit = event => {
    event.preventDefault();
    props.onAuth({
      name: name.value,
      email: email.value,
      password: password.value
    });
  };
  const handleKey = event => {
    const target = event.currentTarget;
    switch (target.type) {
    case 'email':
      if (!/^[\w@._-]$/i.test(event.key)) {
        event.preventDefault();
      }
      break;
    case 'password':
      if (!/^[\w]$/i.test(event.key)) {
        event.preventDefault();
      }
      break;
    }
    console.log();
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="ModalForm"
      action="/404/auth/"
      method="POST">
      <div className="Input">
        <input ref={el => name = el} onKeyPress={handleKey} required type="text" placeholder="Имя" />
        <label />
      </div>
      <div className="Input">
        <input ref={el => email = el} onKeyPress={handleKey} required type="email" placeholder="Электронная почта" />
        <label />
      </div>
      <div className="Input">
        <input ref={el => password = el} onKeyPress={handleKey} required type="password" placeholder="Пароль" />
        <label />
      </div>
      <button type="submit">
        <span>Войти</span>
        <i className="fa fa-fw fa-chevron-right" />
      </button>
    </form>
  );
};
