/// <reference types="react-scripts" />

declare module "*.module.css" {
  const classes: { [key: string]: string };
  export default classes;
}

// Добавляем поддержку картинок:
declare module "*.png" {
  const src: string;
  export default src;
}

declare module "*.jpg" {
  const src: string;
  export default src;
}

declare module "*.jpeg" {
  const src: string;
  export default src;
}

declare module "*.svg" {
  const src: string;
  export default src;
}
