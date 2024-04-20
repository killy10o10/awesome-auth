import { IoCheckmarkCircleOutline } from "react-icons/io5";

interface FormSuccessProps {
  message?: string;
}

export const FormSuccess = ({ message }: FormSuccessProps) => {
  if (!message) {
    return null
  }
  return (
    <div className="bg-emerald-500/15 p-3 rounded-md font-medium flex items-center gap-x-2 text-sm text-emerald-500">
      <IoCheckmarkCircleOutline className="h-5 w-5" />
      <p>{message}</p>
    </div>
  )
}
