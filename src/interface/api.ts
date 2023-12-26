export interface APIResponseProps {
  message?: string;
  error?: any;
  status: any;
  data?: any;
}

export interface UserDocumentModel {
  userName: string;
  fullName: string;
  email: string;
  avatar: string;
  password: string;
}

export interface VideoDocumentModel {
  
}

export type GetAllSubscribersQueryType = {
  params?: 'firstName' | 'contact';
};