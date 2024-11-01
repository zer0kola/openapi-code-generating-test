// 자동 생성된 타입 정의

export interface Order {
  id?: number;
  petId?: number;
  quantity?: number;
  shipDate?: string;
  status?: string;
  complete?: boolean;
}

export interface Customer {
  id?: number;
  username?: string;
  address?: Address[];
}

export interface Address {
  street?: string;
  city?: string;
  state?: string;
  zip?: string;
}

export interface Category {
  id?: number;
  name?: string;
}

export interface User {
  id?: number;
  username?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  phone?: string;
  userStatus?: number;
}

export interface Tag {
  id?: number;
  name?: string;
}

export interface Pet {
  id?: number;
  name: string;
  category?: Category;
  photoUrls: string[];
  tags?: Tag[];
  status?: string;
}

export interface ApiResponse {
  code?: number;
  type?: string;
  message?: string;
}

