import {
  doc,
  query,
  where,
  setDoc,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  collection,
  getFirestore,
  serverTimestamp,
} from "firebase/firestore";

import { shopApp } from "./apps";
import { getUploadThumbnailURL, getUploadImagesURLs } from "./storage";

const db = getFirestore(shopApp);
const productsRef = collection(db, "products");
const getProductDoc = (productID) => doc(db, "products", productID);

export const addProduct = (merchantID, productObj, cb) => {
  const productDoc = doc(productsRef);
  const { thumbnail: thumbnailFile, images: imagesFiles } = productObj;
  const primaryProd = { ...productObj, thumbnail: "", images: "" };

  return setDoc(productDoc, primaryProd).then(() => {
    getDoc(productDoc).then(async ({ id }) => {
      const images = getUploadImagesURLs(merchantID, id, imagesFiles);
      const thumbnail = await getUploadThumbnailURL(
        merchantID,
        id,
        thumbnailFile
      );
      const product = Object.assign({}, productObj, {
        id,
        images,
        thumbnail,
        merchant: merchantID,
        createdAt: serverTimestamp(),
      });

      updateDoc(productDoc, product).then(() => cb(product));
    });
  });
};

export const getProducts = async (merchantID) => {
  const q = query(productsRef, where("merchant", "==", merchantID));
  const querySnapshot = await getDocs(q);
  const products = [];

  querySnapshot.forEach((doc) => products.push(doc.data()));
  return products;
};

export const updateProduct = (product, cb) => {
  const productDoc = getProductDoc(product.id);

  return getDoc(productDoc).then(async (prod) => {
    const { thumbnail: thumbnailFile, images: imagesFiles } = prod.data();
    const images =
      typeof product.images[0] === "object"
        ? getUploadImagesURLs(product.merchant, product.id, product.images)
        : imagesFiles;
    const thumbnail =
      typeof product.thumbnail === "object"
        ? await getUploadThumbnailURL(
            product.merchant,
            product.id,
            product.thumbnail
          )
        : thumbnailFile;

    const productObj = { ...product, images, thumbnail };
    updateDoc(productDoc, productObj).then(() => cb(productObj));
  });
};

export const deleteProduct = (productID) => {
  const productDoc = getProductDoc(productID);
  return deleteDoc(productDoc);
};
