import { HiOutlineExclamation } from "react-icons/hi";

interface FormErrorProps {
  message?: string;
}

export const FormError = ({ message }: FormErrorProps) => {
  if (!message) {
    return null
  }
  return (
    <div className="bg-destructive/15 p-3 rounded-md font-medium flex items-center gap-x-2 text-sm text-destructive">
      <HiOutlineExclamation className="h-5 w-5" />
      <p>{message}</p>
    </div>
  )
}
