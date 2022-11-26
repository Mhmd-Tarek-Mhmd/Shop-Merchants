import {
  getAuth,
  signOut,
  updateProfile,
  EmailAuthProvider,
  sendEmailVerification,
  sendPasswordResetEmail,
  updateEmail as updateMail,
  signInWithEmailAndPassword,
  reauthenticateWithCredential,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import { getUploadImageURL } from "./storage";

const auth = getAuth();
const getCredential = (password) =>
  EmailAuthProvider.credential(auth.currentUser.email, password);
export const userUID = auth.currentUser?.uid;

/*
  [1] Auth/Create methods
*/

export const signUp = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password);

export const validateEmail = () => sendEmailVerification(auth.currentUser);

export const signIn = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);

export const logout = () => signOut(auth);

export const forgetPassword = (email) => sendPasswordResetEmail(auth, email);

export const reAuth = (password) =>
  reauthenticateWithCredential(auth.currentUser, getCredential(password));

/*
  [2] Update/Delete methods
*/

const updateUser = (obj) => updateProfile(auth.currentUser, obj);

export const updateAvatar = async (file, cb) => {
  const photoURL = await getUploadImageURL("avatar", file);
  updateUser({ photoURL });
  cb(photoURL);
};

export const updateName = (displayName) => updateUser({ displayName });

export const updateEmail = (newEmail) => updateMail(auth.currentUser, newEmail);

export const updatePassword = (newPassword) =>
  updatePass(auth.currentUser, newPassword);

export const deleteProfile = () => deleteUser(auth.currentUser);
