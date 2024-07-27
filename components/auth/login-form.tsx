"use client";

import * as z from "zod";

import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { useSearchParams } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";

import { LoginSchema } from "@/schemas";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { CardWrapper } from "@/components/common/card-wrapper";
import { Button } from "@/components/ui/button";
import { FormError } from "@/components/forms/form-error";
import { login } from "@/actions/login";

export function LoginForm() {
  const [error, setError] = useState<string | undefined>("");

  const [isPending, startTransition] = useTransition();

  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");
  
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "1@gmail.com",
      password: "123123",
    },
  });

  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    setError("");

    startTransition(() => {
      login(values, callbackUrl)
      .then((data) => {
        if (data?.error) {
          form.reset({
            email: values.email,
            password: ""
          });
          setError(data.error);
        }
    })
      .catch(() => setError("Something went wrong"))
    });
  };

  return (
    <CardWrapper
      heading="🔐 Auth"
      size="small"
      headerLabel="Welcome back"
      backButtonLabel="Don't have an account ?"
      backButtonHref="/auth/register"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="john.doe@example.com"
                      type="email"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="******"
                      type="password"
                    />
                  </FormControl>
                  <FormMessage />
                  <Link href="/auth/reset">
                    <Button 
                      size="sm"
                      variant="link"
                      asChild
                      className="px-0 fonn"
                    >
                        Forgot Password ?
                    </Button>
                  </Link>
                </FormItem>
              )}
            />
          </div>
          <FormError message={error} />
          <Button type="submit" className="w-full" disabled={isPending}>
            Login
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
}
