import client from './client';
import { Listing, EditListingForm, Location } from './schemas/Listing';
import { ApiResponse } from 'apisauce';
import { authHeaders } from './authHeaders';

const endpoint = '/listings';

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlzQWRtaW4iOnRydWUsImV4cCI6MTc2NTc3ODQwMDAwMH0._esbrd7d82bOs3dVmQm4weuNDOwgW2YpWSeE9WhM0Fw';
const headers = { Authorization: `Bearer ${token}` };

type listingFormData = EditListingForm & { location: Location };

type FormDataImage = {
  uri: string;
  type?: string;
  name?: string;
};

const getListings = () => client.get(endpoint);

// ListingEditScreen type + Location

const postListing = async (
  { title, price, categoryId, location, description, images }: listingFormData,
  onUpload: any
): Promise<ApiResponse<any>> => {
  const listingData = new FormData();
  const googleHQ = { longitude: '37.4220', latitude: '122.0841' };

  listingData.append('title', title);
  listingData.append('title', description);
  listingData.append('price', price);
  listingData.append('categoryId', categoryId?.value?.toString() ?? '');
  listingData.append('latitude', location?.latitude.toString() ?? googleHQ.latitude);
  listingData.append('longitude', location?.longitude.toString() ?? googleHQ.longitude);

  /**
   * A react native blob is just an object with an uri attribute. Name and type
   * properties are optional
   * https://github.com/facebook/react-native/blob/master/Libraries/Network/FormData.js
   */

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
    listingData.append('images', (imageBlob as unknown) as Blob);
  });

  return client.post(endpoint, listingData, {
    headers: { Authorization: await authHeaders() },
    onUploadProgress: onUpload,
  });
};

export default {
  getListings,
  postListing,
};
