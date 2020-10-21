import axios from 'axios';
import qs from 'querystring';

export default {
  getList({ limit, currentPage, filter }) {
    return axios.get(
      `${process.env.BACKEND_API_PATH}/products?${qs.stringify({
        limit,
        currentPage,
        filter,
      })}`
    );
  },
};
