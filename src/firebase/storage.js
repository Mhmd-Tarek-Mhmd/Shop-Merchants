import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

import { app } from "./apps";
import { userUID } from "./auth";

const storage = getStorage(app);

// Helpers
const createImageRef = (imageName, fileType) =>
  ref(storage, `${userUID}/${imageName}.${fileType.slice(6)}`);

export const getUploadImageURL = async (name, file) => {
  const ref = createImageRef(name, file.type);

  await uploadBytes(ref, file);
  const url = await getDownloadURL(ref);
  return url;
};
