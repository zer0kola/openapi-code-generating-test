// 자동 생성된 Zod 스키마

import { z } from 'zod';

export const schemas = {
  Order: z.object({ "id": z.number().int().optional(), "petId": z.number().int().optional(), "quantity": z.number().int().optional(), "shipDate": z.string().datetime({ offset: true }).optional(), "status": z.enum(["placed","approved","delivered"]).describe("Order Status").optional(), "complete": z.boolean().optional() }),
  Customer: z.object({ "id": z.number().int().optional(), "username": z.string().optional(), "address": z.array(z.any()).optional() }),
  Address: z.object({ "street": z.string().optional(), "city": z.string().optional(), "state": z.string().optional(), "zip": z.string().optional() }),
  Category: z.object({ "id": z.number().int().optional(), "name": z.string().optional() }),
  User: z.object({ "id": z.number().int().optional(), "username": z.string().optional(), "firstName": z.string().optional(), "lastName": z.string().optional(), "email": z.string().optional(), "password": z.string().optional(), "phone": z.string().optional(), "userStatus": z.number().int().describe("User Status").optional() }),
  Tag: z.object({ "id": z.number().int().optional(), "name": z.string().optional() }),
  Pet: z.object({ "id": z.number().int().optional(), "name": z.string(), "category": z.any().optional(), "photoUrls": z.array(z.string()), "tags": z.array(z.any()).optional(), "status": z.enum(["available","pending","sold"]).describe("pet status in the store").optional() }),
  ApiResponse: z.object({ "code": z.number().int().optional(), "type": z.string().optional(), "message": z.string().optional() }),
  findPetsByStatus_query: z.any(),
  findPetsByTags_query: z.any(),
  getPetById_path: z.any(),
  updatePetWithForm_path: z.any(),
  updatePetWithForm_query: z.any(),
  deletePet_headers: z.any(),
  deletePet_path: z.any(),
  uploadFile_path: z.any(),
  uploadFile_query: z.any(),
  getOrderById_path: z.any(),
  deleteOrder_path: z.any(),
  loginUser_query: z.any(),
  getUserByName_path: z.any(),
  updateUser_path: z.any(),
  deleteUser_path: z.any(),
};
