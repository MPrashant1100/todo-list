import { APIResponseProps } from "@/interface";

const sendAPIResponse = ({
  status,
  error,
  message,
  data,
}: APIResponseProps) => {
  return { status, error, message, data };
};

export { sendAPIResponse };
