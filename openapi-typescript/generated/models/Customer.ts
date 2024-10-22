import { Address } from './Address';

export interface Customer {
  id: number;
  username: string;
  address: Address[];
}
