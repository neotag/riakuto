import axios from 'axios';

import { User } from './models';

interface ApiConfig {
  baseURL: string;
  timeout: number;
}

const DEFAULT_API_CONFIG: ApiConfig = {
  baseURL: 'https://api.github.com',
  timeout: 7000,
};

export const getMembersFactory = (optionConfig?: ApiConfig) => {
  const config = {
    ...DEFAULT_API_CONFIG,
    ...optionConfig,
  };
  const instance = axios.create(config);
  const getMembers = async (organizationName: string) => {
    try {
      alert('API STARTED');
      const responce = await instance.get(`/orgs/${organizationName}/members`);
      alert('API FINISHED');
      if (responce.status !== 200) {
        throw new Error('Server Error');
      }
      const members: User[] = responce.data;

      return members;
    } catch (err) {
      // eslint-disable-next-line no-console
      console.warn(err);
      throw err;
    }
  };

  return getMembers;
};
