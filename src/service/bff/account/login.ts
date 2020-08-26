import { AxiosInstance } from 'axios';
import { RequestObject } from '../../types';

export interface LoginResponse {
  token: string;
}

export interface BffIntegration extends RequestObject<BffIntegration> {
  login: (account: string, password: string) => Promise<LoginResponse>;
}

const routesInstances = (axios: AxiosInstance): BffIntegration => ({
    login: (account: string, password: string) => axios.post('/authenticate', {
        account,
        password,
    }),
});

export default routesInstances;
