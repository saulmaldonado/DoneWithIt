export type Listing = {
  title: string;
  price: number;
  categoryId: any; // edit category type
  description: string;
  images: string[];
  location: { latitude: number; longitude: number } | null;
};
