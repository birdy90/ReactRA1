'use strict';

const FeedbackForm = ({data, onSubmit}) => {
  let salutationBlock, nameBlock, emailBlock, subjectBlock, messageBlock, snacksBlock;

  const submit = (e) => {
    e.preventDefault();
    let returnedData = {
      salutation: salutationBlock.querySelector('input:checked').value,
      name: nameBlock.value,
      email: emailBlock.value,
      subject: subjectBlock.value,
      message: messageBlock.value,
      snacks: [...snacksBlock.querySelectorAll('input:checked')].map(e => e.value),
    };
    console.log(returnedData);
    onSubmit(JSON.stringify(returnedData));
  };

  return (
    <form className="content__form contact-form" onSubmit={submit}>
      <div className="testing">
        <p>Чем мы можем помочь?</p>
      </div>
      <div className="contact-form__input-group" ref={e => salutationBlock = e}>
        <input className="contact-form__input contact-form__input--radio" id="salutation-mr" name="salutation" type="radio" value="Мистер" defaultChecked={data.salutation === "Мистер"}/>
        <label className="contact-form__label contact-form__label--radio" htmlFor="salutation-mr">Мистер</label>
        <input className="contact-form__input contact-form__input--radio" id="salutation-mrs" name="salutation" type="radio" value="Мисис" defaultChecked={data.salutation === "Мисис"}/>
        <label className="contact-form__label contact-form__label--radio" htmlFor="salutation-mrs">Мисис</label>
        <input className="contact-form__input contact-form__input--radio" id="salutation-ms" name="salutation" type="radio" value="Мисс" defaultChecked={data.salutation === "Мисс"}/>
        <label className="contact-form__label contact-form__label--radio" htmlFor="salutation-ms">Мисс</label>
      </div>
      <div className="contact-form__input-group">
        <label className="contact-form__label" htmlFor="name">Имя</label>
        <input className="contact-form__input contact-form__input--text" id="name" name="name" type="text" defaultValue={data.name} ref={e => nameBlock = e}/>
      </div>
      <div className="contact-form__input-group">
        <label className="contact-form__label" htmlFor="email">Адрес электронной почты</label>
        <input className="contact-form__input contact-form__input--email" id="email" name="email" type="email" defaultValue={data.email} ref={e => emailBlock = e}/>
      </div>
      <div className="contact-form__input-group">
        <label className="contact-form__label" htmlFor="subject">Чем мы можем помочь?</label>
        <select className="contact-form__input contact-form__input--select" id="subject" name="subject" defaultValue={data.subject} ref={e => subjectBlock = e}>
          <option>У меня проблема</option>
          <option>У меня важный вопрос</option>
        </select>
      </div>
      <div className="contact-form__input-group">
        <label className="contact-form__label" htmlFor="message">Ваше сообщение</label>
        <textarea className="contact-form__input contact-form__input--textarea" id="message" name="message" rows="6" cols="65" ref={e => messageBlock = e}>{data.message}</textarea>
      </div>
      <div className="contact-form__input-group" ref={e => snacksBlock = e}>
        <p className="contact-form__label--checkbox-group">Хочу получить:</p>
        <input className="contact-form__input contact-form__input--checkbox" id="snacks-pizza" name="snacks" type="checkbox" value="пицца" defaultChecked={data.snacks.includes("пицца")}/>
        <label className="contact-form__label contact-form__label--checkbox" htmlFor="snacks-pizza">Пиццу</label>
        <input className="contact-form__input contact-form__input--checkbox" id="snacks-cake" name="snacks" type="checkbox" value="пирог" defaultChecked={data.snacks.includes("пирог")}/>
        <label className="contact-form__label contact-form__label--checkbox" htmlFor="snacks-cake">Пирог</label>
      </div>
      <button className="contact-form__button" type="submit">Отправить сообщение!</button>
      <output id="result" />
    </form>
  )
};