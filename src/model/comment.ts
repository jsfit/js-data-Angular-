import { Schema } from 'js-data';
  
  export const comment = new Schema({
    type: 'object',
    properties: {
      id: { type: 'number' },
      // Only the DataStore and SimpleStore components care about the "indexed" attribute
      post_id: { type: 'number', indexed: true },
      // Only the DataStore and SimpleStore components care about the "indexed" attribute
      name: { type: 'number', indexed: true },
      email: { type: 'string' },
      body: { type: 'string' }
    }
  });