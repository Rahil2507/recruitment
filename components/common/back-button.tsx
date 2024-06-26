"use client"

import Link from "next/link";

import { Button } from "@/components/ui/button"

interface BackButtonProps {
  href: string;
  label: string;
}

export const BackButton = ({
  href,
  label
}: BackButtonProps) => { 
  return (
    <Link href={href}>
      <Button
        variant="link"  
        className="font-normal"
        size="sm"
        // asChild
      >
           {label}
      </Button>
    </Link>
  )
}