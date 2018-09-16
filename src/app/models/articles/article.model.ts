import {Photo} from '../photo/photo.model';
import { Deserializable } from '../deserializable.model';
export class Article implements Deserializable {

  id: number;
  user_id: number;
  title: string;
  description: string;
  created_at: Date;
  updated_at: Date;
  photos: Photo[];

  deserialize(input: any): this {
    Object.assign(this, input);
    return this;
  }
  mainPhoto(): Photo {
    console.log(this.photos);
    return this.photos.find( p => p.pivot.is_cover === 1);
  }
}
