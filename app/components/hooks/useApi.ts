import { useState } from 'react';
import { ApiResponse } from 'apisauce';

type UseApi = (
  apiFunc: (...args: any[]) => Promise<ApiResponse<any>>
) => {
  data: any;
  error: boolean;
  loading: boolean;
  request: (...args: any[]) => Promise<ApiResponse<any>>;
};

const useApi: UseApi = (apiFunc) => {
  const [data, setData] = useState<any>([]);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState(false);

  const request = async (...args: any[]): Promise<ApiResponse<any>> => {
    setLoading(true);
    const response = await apiFunc(...args);
    setLoading(false);

    setError(!response.ok);
    setData(response.data);

    // useApi will now return response object
    return response;
  };

  return { data, error, loading, request };
};

export default useApi;
