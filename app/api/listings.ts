import client from './client';
import { Listing } from './schemas/Listing';
import { ApiResponse } from 'apisauce';

const endpoint = '/listings';
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlzQWRtaW4iOnRydWUsImV4cCI6MTc2NTc3ODQwMDAwMH0._esbrd7d82bOs3dVmQm4weuNDOwgW2YpWSeE9WhM0Fw';
const headers = { Authorization: `Bearer ${token}` };

const getListings = () => client.get(endpoint);
// const postListing = (listing: FormData) => client.post(endpoint, listing);

const postListing = async (
  { title, price, categoryId, location, description, images }: Listing,
  onUpload: any
): Promise<ApiResponse<any>> => {
  const listingData = new FormData();
  const googleHQ = { longitude: '37.4220', latitude: '122.0841' };

  listingData.append('title', title);
  listingData.append('title', description);
  listingData.append('price', price.toString());
  listingData.append('categoryId', categoryId.value.toString());
  listingData.append('latitude', location?.latitude.toString() ?? googleHQ.latitude);
  listingData.append('longitude', location?.longitude.toString() ?? googleHQ.longitude);

  /**
   * A react native blob is just an object with an uri attribute. Name and type
   * properties are optional
   * https://github.com/facebook/react-native/blob/master/Libraries/Network/FormData.js
   */
  type FormDataImage = {
    uri: string;
    type?: string;
    name?: string;
  };

  images.forEach((i) => {
    let name: string;
    const match = i.match(/[a-z\-0-9]+.(jpg|png|tiff|heic|jpeg)$/i);

    if (match) {
      name = match[0];
    } else {
      throw new Error('Invalid image.');
    }

    let imageBlob: FormDataImage = {
      uri: i,
      type: 'image/jpeg',
      name: name,
    };
    listingData.append('images', imageBlob as any);
  });

  // testing token

  return client.post(endpoint, listingData, {
    headers,
    onUploadProgress: onUpload,
  });
};

export default {
  getListings,
  postListing,
};
