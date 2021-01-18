import React from 'react';
import { FaHandshake, FaPaperPlane } from 'react-icons/fa';
import style from './Contact.module.css';
import useForm from '../../hooks/useForm';

function Contact() {
    const { formData, errors, handleInput, isFormValid } = useForm();

    return (
        <section id="contact" className={style.contact}>
            <h2>Contact</h2>
            <div className={style.contact__box}>
                <form
                    className={style.contact__from}
                    noValidate
                    action="https://formspree.io/f/xoqprqwg"
                    method="POST"
                >
                    <label className={style.label__email}>
                        <span>Email</span>
                        <input
                            className={errors._replyto && 'invalid'}
                            onChange={handleInput}
                            value={formData.email}
                            id="email"
                            name="_replyto"
                            type="email"
                            required
                            placeholder="example@gmail.com"
                        />
                    </label>
                    <label className={style.label__name}>
                        <span>Name</span>
                        <input
                            className={errors.name && 'invalid'}
                            onChange={handleInput}
                            value={formData.name}
                            name="name"
                            type="text"
                            required
                            placeholder="John Doe"
                        />
                    </label>
                    <label className={style.label__message}>
                        <span>Message</span>
                        <textarea
                            className={errors.message && 'invalid'}
                            onChange={handleInput}
                            value={formData.message}
                            name="message"
                            required
                            placeholder="Hey there!"
                        />
                    </label>

                    <button
                        disabled={!isFormValid}
                        className={style.submit__btn}
                        type="submit"
                        value="send"
                    >
                        <FaPaperPlane /> Submit
                    </button>
                </form>
            </div>
        </section>
    );
}

export default Contact;
