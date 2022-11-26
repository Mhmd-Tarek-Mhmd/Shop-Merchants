import { initializeApp } from "firebase/app";

export const app = initializeApp(
  JSON.parse(import.meta.env.VITE_SHOP_MERCHANTS_CONFIG)
);

export const shopApp = initializeApp(
  JSON.parse(import.meta.env.VITE_SHOP_CONFIG),
  "secondary"
);
