export interface CommentType {
  name: string;
  content: string;
  replies: CommentType[];
}
