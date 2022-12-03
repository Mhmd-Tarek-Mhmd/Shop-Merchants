import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

import { app } from "./apps";

const storage = getStorage(app);

// Helpers

const getProductsPath = (productID, imageName) =>
  `products/${productID}/${imageName}`;

const createImageRef = (merchantID, name, fileType) =>
  ref(storage, `${merchantID}/${name}.${fileType.slice(6)}`);

const getUploadImageURL = async (merchantID, name, file) => {
  const ref = createImageRef(merchantID, name, file.type);

  await uploadBytes(ref, file);
  const url = await getDownloadURL(ref);
  return url;
};

// exports

export const getUploadAvatarURL = async (merchantID, file) => {
  const url = await getUploadImageURL(merchantID, "avatar", file);
  return url;
};

export const getUploadThumbnailURL = async (
  merchantID,
  productID,
  thumbnailFile
) => {
  const url = await getUploadImageURL(
    merchantID,
    getProductsPath(productID, "thumbnail"),
    thumbnailFile
  );
  return url;
};
export const getUploadImagesURLs = (merchantID, productID, imagesFiles) => {
  let images = [];
  imagesFiles.forEach(async (file, i) => {
    const url = await getUploadImageURL(
      merchantID,
      getProductsPath(productID, i),
      file
    );

    images = [...images, url];
  });
  return images;
};
