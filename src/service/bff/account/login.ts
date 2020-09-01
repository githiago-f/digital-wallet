import { AxiosInstance } from 'axios';
import { TRequestObject } from '../../@types/service-with-hook';

export interface LoginResponse {
  token: string;
}

export interface BffIntegration extends TRequestObject<BffIntegration> {
  login: (account: string, password: string) => Promise<LoginResponse>;
}

const routesInstances = (axios: AxiosInstance): BffIntegration => ({
    login: (account: string, password: string) => axios.post('/authenticate', {
        account,
        password,
    }),
});

export default routesInstances;
