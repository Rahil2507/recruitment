"use client"

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Header } from "@/components/common/header";
import { BackButton } from "@/components/common/back-button";

interface CardWrapperProps {
  children?: React.ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
  heading: string;
  size: "small"|"medium"|"large";
}

export const CardWrapper = ({
  children,
  headerLabel,
  backButtonLabel,
  backButtonHref,
  heading,
  size,
}: CardWrapperProps) => {
  return (
    <Card className={ `${size==="small" ? "min-w-[400px]" : size==="medium" ? "min-w-[600px]" : size==="large" && "min-w-[800px]"} shadow-md`}>
      <CardHeader>
        <Header heading={heading} label={headerLabel} />
      </CardHeader>
      {children &&
        <CardContent>{children}</CardContent>
      }
      <CardFooter className="flex justify-center">
        <BackButton 
          href={backButtonHref}
          label={backButtonLabel}
        />
      </CardFooter>
    </Card>
  );
};
