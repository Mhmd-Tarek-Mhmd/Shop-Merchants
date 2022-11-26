import {
  getFirestore,
  collection,
  doc,
  setDoc,
  getDoc,
  updateDoc,
} from "firebase/firestore";

import { shopApp } from "./apps";
import { getUploadImageURL } from "./storage";

const db = getFirestore(shopApp);

const productsRef = collection(db, "products");

export const addProduct = (productObj, imagesFiles) => {
  const images = [];
  const productDoc = doc(productsRef);

  return setDoc(productDoc, productObj).then(() => {
    getDoc(productDoc).then(({ id }) => {
      imagesFiles.forEach(async (file, i) => {
        const url = await getUploadImageURL(`${id}/${i}`, file);
        images.push(url);
      });

      const product = Object.assign({}, productObj, { id, images });
      console.log(product);
      updateDoc(productDoc, product);
    });
  });
};
