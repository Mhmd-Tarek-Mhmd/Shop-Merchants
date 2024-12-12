import {
  ref,
  listAll,
  getStorage,
  uploadBytes,
  deleteObject,
  getDownloadURL,
} from "firebase/storage";

import { app, shopApp } from "./apps";

const storage = getStorage(app);
const shopStorage = getStorage(shopApp);

const getUploadImageURL = async (productID, imageName, file) => {
  const imgRef = ref(shopStorage, `products/${productID}/${imageName}`);
  await uploadBytes(imgRef, file);

  const url = await getDownloadURL(imgRef);
  return url;
};

export const getRemoveProductImages = async (productID) => {
  const images = await listAll(ref(shopStorage, `products/${productID}`));

  if (images?.items?.length) {
    const deletePromises = images.items.map((itemRef) => deleteObject(itemRef));
    await Promise.all(deletePromises);
  }
};

export const getUploadAvatarURL = async (merchantID, file) => {
  const imgRef = ref(storage, merchantID);
  await uploadBytes(imgRef, file);

  const url = await getDownloadURL(imgRef);
  return url;
};

export const removeAvatar = async (id) => {
  await deleteObject(ref(storage, id));
};

export const getUploadThumbnailURL = async (productID, thumbnailFile) => {
  const url = await getUploadImageURL(productID, "thumbnail", thumbnailFile);
  return url;
};

export const getUploadImagesURLs = async (productID, imagesFiles) => {
  const images = await Promise.all(
    imagesFiles.map(
      async (file, i) => await getUploadImageURL(productID, i + 1, file)
    )
  );

  return images;
};
