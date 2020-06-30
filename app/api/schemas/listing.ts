import { MaterialCommunityIconType } from '../../config/icons';

export type EditListingForm = {
  title: string;
  price: string;
  categoryId: Pick<Category, 'value'> | null | undefined; // edit category type
  description: string;
  images: string[];
};

export type Listing = {
  title: string;
  price: number;
  categoryId: Pick<Category, 'value'> | null;
  description: string;
  images: string[];
  location: Location;
};

export type Location = { latitude: number; longitude: number } | null;

export type Category = {
  icon: icon;
  label: string;
  value: number;
};

type icon = {
  color: string;
  name: MaterialCommunityIconType;
};
