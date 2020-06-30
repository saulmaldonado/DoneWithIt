export type Listing = {
  title: string;
  price: number;
  categoryId: number;
  description: string;
  images: string[];
  location: { latitude: number; longitude: number } | null;
};
