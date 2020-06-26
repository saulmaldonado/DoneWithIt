import { useState } from 'react';
import { ApiResponse } from 'apisauce';

type UseApi = (
  apiFunc: () => Promise<ApiResponse<any>>
) => { data: any; error: boolean; loading: boolean; request: () => Promise<void> };

// export default

const useApi: UseApi = (apiFunc) => {
  const [data, setData] = useState<any>([]);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState(false);

  const request = async () => {
    setLoading(true);
    const response = await apiFunc();
    setLoading(false);

    if (!response.ok) {
      return setError(true);
    }

    setError(false);
    setData(response.data);
  };

  return { data, error, loading, request };
};

export default useApi;
