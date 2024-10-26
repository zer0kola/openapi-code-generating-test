import { Category } from './Category';
import { Tag } from './Tag';

export interface Pet {
  id: number;
  name: string;
  category: Category;
  photoUrls: string[];
  tags: Tag[];
  /** pet status in the store */
  status: 'available' | 'pending' | 'sold';
}
