import { CardWrapper } from "@/components/common/card-wrapper";

export const ErrorCard = () => {
  return (
    <CardWrapper
      heading="🔐 Auth"
      size="small"
      headerLabel="Something went wrong !"
      backButtonLabel="Back to login"
      backButtonHref="/auth/login"
    />
)}