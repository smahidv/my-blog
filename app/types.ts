export interface PostType {
  _id?: string;
  category: string;
  title: string;
  desc: string;
  img?: string;
  userId?: string;
  createdAt?: Date;
  updatedAt?: Date;
  slug: string;
}