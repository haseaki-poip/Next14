"use client";

import { registerUserInfo } from "@/services/server/form";
import { useFormState, useFormStatus } from "react-dom";
import style from "./styles.module.css";
import clsx from "clsx";
import Button from "@/components/modules/button";

const FormPage = () => {
  const initialState = {
    error: {
      whole: "",
      name: "",
      age: "",
      message: "",
    },
  };
  const [state, dispatch] = useFormState(registerUserInfo, initialState);
  return (
    <div className={style.layoutForm}>
      <div className={style.layoutFormInner}>
        {state.error.whole && (
          <div className={style.formErrorInner}>
            <div className={style.formError}>
              <p>{state.error.whole}</p>
            </div>
          </div>
        )}
        <form action={dispatch} className={style.form}>
          <section className={style.formSection}>
            <label>
              <div className={style.sectionTtl}>ユーザ名</div>
              <input
                type="text"
                name="name"
                className={clsx(
                  style.inputBox,
                  state.error.name ? style.isError : null
                )}
              />
            </label>
            {state.error.name && (
              <div className={style.errorSection}>
                <div className={style.errorMessage}>
                  <p>{state.error.name}</p>
                </div>
              </div>
            )}
          </section>
          <section className={style.formSection}>
            <label>
              <div className={style.sectionTtl}>年齢</div>
              <input
                type="number"
                name="age"
                min="0"
                max="120"
                step="1"
                className={clsx(
                  style.inputBox,
                  style.inputBox__100px,
                  state.error.age ? style.isError : null
                )}
              />
            </label>
            {state.error.age && (
              <div className={style.errorSection}>
                <div className={style.errorMessage}>
                  <p>{state.error.age}</p>
                </div>
              </div>
            )}
          </section>
          <section className={style.formSection}>
            <label>
              <div className={style.sectionTtl}>一言メッセージ</div>
              <textarea
                className={clsx(
                  style.areaBox,
                  state.error.name ? style.isError : null
                )}
                name="message"
                rows={3}
                placeholder="こちらに一言メッセージを30文字以内で入力してください。"
              ></textarea>
            </label>
            {state.error.message && (
              <div className={style.errorSection}>
                <div className={style.errorMessage}>
                  <p>{state.error.message}</p>
                </div>
              </div>
            )}
          </section>
          <div className={style.submitSection}>
            <FormButton />
          </div>
        </form>
      </div>
    </div>
  );
};

const FormButton = () => {
  const { pending } = useFormStatus(); // formのある部分の子要素出ないといけない
  return <Button disabled={pending} value={pending ? "Loading" : "登録"} />;
};

export default FormPage;
