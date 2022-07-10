export type ProductType = {
  id: number
  name: string
  price: number
  imageUrl: string
  description: string
};

export const productsData: ProductType[] = [
  {id: 1, name: "Product Name 1", price: 100, imageUrl: "", description: "Product 1 description"},
  {id: 2, name: "Product Name 2", price: 110, imageUrl: "", description: "Product 2 description"},
  {id: 3, name: "Product Name 3", price: 120, imageUrl: "", description: "Product 3 description"},
  {id: 4, name: "Product Name 4", price: 130, imageUrl: "", description: "Product 4 description"},
  {id: 5, name: "Product Name 5", price: 90, imageUrl: "", description: "Product 5 description"},
  {id: 6, name: "Product Name 6", price: 10, imageUrl: "", description: "Product 6 description"},
  {id: 7, name: "Product Name 7", price: 5, imageUrl: "", description: "Product 7 description"},
  {id: 8, name: "Product Name 8", price: 70, imageUrl: "", description: "Product 8 description"},
  {id: 9, name: "Product Name 9", price: 55, imageUrl: "", description: "Product 9 description"},
  {id: 10, name: "Product Name 10", price: 1999, imageUrl: "", description: "Product 10 description"},
];

export const catalogAPI = {
  getProducts() {
    return new Promise<ProductType[]>((resolve, reject) => {
      setTimeout((response) => {
        if (response.httpStatus >= 200 && response.httpStatus < 400) {
          resolve(response.data);
        } else {
          reject(response.error);
        }
      }, 3000, {httpStatus: 200, data: productsData, error: "Some error occurred"});
    });
  },
};
