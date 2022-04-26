import { useEffect, useState } from 'react';

const useServiceDetail = (id) => {
    const [service, setService] = useState({});
    useEffect(() => {
      const url = `https://agile-shore-59189.herokuapp.com/services/${id}`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setService(data);
        });
    }, [id]);
    return [service]
};

export default useServiceDetail;