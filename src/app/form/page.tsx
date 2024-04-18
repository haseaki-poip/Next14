"use client";

import { registerUserInfo } from "@/services/server/form";
import { useFormState, useFormStatus } from "react-dom";

const FormPage = () => {
  const initialState = { error: "" };
  const [state, dispatch] = useFormState(registerUserInfo, initialState);
  return (
    <form action={dispatch} style={{ background: "gray" }}>
      <input id="name" name="name" type="text" />
      <input id="age" name="age" type="number" />
      <textarea id="message" name="message"></textarea>
      <div>
        <FormButton />
      </div>
      {state.error && (
        <div>
          <p>{state.error}</p>
        </div>
      )}
    </form>
  );
};

const FormButton = () => {
  const { pending } = useFormStatus(); // formのある部分の子要素出ないといけない
  return (
    <button type="submit" disabled={pending}>
      {pending ? "loading" : "登録"}
    </button>
  );
};

export default FormPage;
