import { useDispatch } from "react-redux";

import { add } from "../../store/actions";
import { useFireAuthRedux } from "../../hooks";
import {
  signUp,
  signIn,
  updateName,
  getProducts,
  validateEmail,
  forgetPassword,
} from "../../firebase";

import Template from "./template";

const setUsername = (user) => {
  const firstName = user.get("firstName");
  const lastName = user.get("lastName");
  updateName(`${firstName} ${lastName}`);
};

function Controller({ prefix, FormInputs, setIsSignUp }) {
  const dispatch = useDispatch();
  const signUpHook = useFireAuthRedux(signUp);
  const signInHook = useFireAuthRedux(signIn);
  const forgetPasswordHook = useFireAuthRedux(forgetPassword);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    const signHook = prefix === "up" ? signUpHook : signInHook;
    const success = {
      cb: async (results) => {
        if (prefix === "up") {
          validateEmail().then(() => {
            setUsername(data);
            setIsSignUp(false);
          });
        } else {
          const products = await getProducts(results.user.uid);
          dispatch(add({ ...results, products }));
        }
      },
      getMsg: () =>
        prefix === "up"
          ? "A validation email sent to your inbox"
          : "Signed in successfully",
    };
    signHook([data.get("email"), data.get("password")], [], success);
  };

  const handleForgetSubmit = (e) => {
    forgetPasswordHook([e.currentTarget.elements.email.value], [], {
      getMsg: () => "An email sent to your inbox to reset your password",
    });
  };

  return (
    <>
      <Template
        prefix={prefix}
        handleSubmit={handleSubmit}
        formInputs={<FormInputs handleForgetSubmit={handleForgetSubmit} />}
      />
    </>
  );
}

export default Controller;
