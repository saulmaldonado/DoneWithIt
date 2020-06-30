import client from './client';

const endpoint = '/listings';

const getListings = () => client.get(endpoint);
const postListings = (listing: FormData) => client.post(endpoint, listing);

export default {
  getListings,
  postListings,
};
