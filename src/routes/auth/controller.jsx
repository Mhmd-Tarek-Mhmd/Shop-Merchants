import { useState } from "preact/hooks";
import { useDispatch } from "react-redux";

import { add } from "../../store/actions";
import { useFireAuthRedux } from "../../hooks";
import {
  signUp,
  signIn,
  updateName,
  validateEmail,
  forgetPassword,
} from "../../firebase";

import Template from "./template";
import ForgetPassword from "./forgetPassword";

const setUsername = (user) => {
  const firstName = user.get("firstName");
  const lastName = user.get("lastName");
  updateName(`${firstName} ${lastName}`);
};

function Controller({ prefix, FormInputs }) {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const signUpHook = useFireAuthRedux(signUp);
  const signInHook = useFireAuthRedux(signIn);
  const forgetPasswordHook = useFireAuthRedux(forgetPassword);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    const signHook = prefix === "up" ? signUpHook : signInHook;
    const success = {
      cb: (results) =>
        prefix === "up"
          ? validateEmail().then(() => setUsername(data))
          : dispatch(add(results)),
      getMsg: () =>
        prefix === "up"
          ? "A validation email sent to your inbox"
          : "Signed in successfully",
    };
    signHook([data.get("email"), data.get("password")], [], success);
  };

  const handleForgetSubmit = (e) => {
    e.preventDefault();
    const success = {
      cb: () => setIsModalOpen(false),
      getMsg: () => "An email sent to your inbox to reset your password",
    };
    forgetPasswordHook([e.currentTarget.elements.email.value], [], success);
  };

  return (
    <>
      <Template
        prefix={prefix}
        handleSubmit={handleSubmit}
        formInputs={<FormInputs setIsModalOpen={setIsModalOpen} />}
      />

      {prefix === "in" && (
        <ForgetPassword
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          handleModalSubmit={handleForgetSubmit}
        />
      )}
    </>
  );
}

export default Controller;
