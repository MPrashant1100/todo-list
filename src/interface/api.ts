export interface APIResponseProps {
  message?: string;
  error?: any;
  status: any;
  data?: any;
}

export interface UserDocumentModel {
  firstName: string;
  contact: string;
}

export type GetAllSubscribersQueryType = {
  params?: 'firstName' | 'contact';
};