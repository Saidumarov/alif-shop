interface Image {
  img: string;
  _id: string;
}
export interface ProductType {
  _id: string;
  titel: string;
  oldPrice: number;
  realPrice: number;
  piece: number;
  description: string;
  category: string;
  imgags: Image[];
  count: number;
  isDiscounts: boolean;
}
