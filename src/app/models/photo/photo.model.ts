import { PhotoPivot } from './photo-pivot.model';

export class Photo {
  id: number;
  original_name: string;
  filename: string;
  path: string;
  path_abs: string;
  thumb_url: string;
  pivot: PhotoPivot;
}

