export interface Sunglasses {
  id: string;
  brand: string;
  style: string;
  lensColor: string;
  frameColor: string;
  lensOpacity: string;
  polarized: boolean;
};

export const emptySunglasses = {
  id: '',
  brand: '',
  style: '',
  lensColor: '',
  frameColor: '',
  lensOpacity: '',
  polarized: false
};