export const OrderSchema = {
  id: { type: 'integer' , format: 'int64' },
  petId: { type: 'integer' , format: 'int64' },
  quantity: { type: 'integer' , format: 'int32' },
  shipDate: { type: 'string' , format: 'date-time' },
  status: { type: 'string'  },
  complete: { type: 'boolean'  },
};
