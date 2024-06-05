"use client"

import * as z from "zod"

import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { RegisterSchema } from "@/schemas";
import { Input } from "@/components/ui/input";
import { 
  Form, 
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
 } from "@/components/ui/form";
 import { Button } from "@/components/ui/button";
import { CardWrapper } from "@/components/common/card-wrapper";
import { FormError } from "@/components/forms/form-error";
// import { FormSuccess } from "@/components/forms/form-success";
import { register } from "@/actions/register";

export function RegisterForm() {
  const [showTwoFactor, setShowTwoFactor] = useState(false)
  const [error, setError] = useState<string | undefined>("")
  // const [success, setSuccess] = useState<string | undefined>("")

  const [isPending, startTransition] = useTransition()

  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    }
  })

  const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
    setError("")
    // setSuccess("")

    startTransition(() => {
      register(values)
      .then((data) => {
        if (data?.error) {
          form.reset({
            name: values.name,
            email: values.email,
            password: "",
            confirmPassword: "",
          });
          setError(data.error);
        }

        // if (data?.success) {
        //   form.reset();
        //   setSuccess(data.success);
        // }
        if (data?.twoFactor) {
          setShowTwoFactor(true)
        }
      })
      .catch(() => setError("Something went wrong"))
    });
  }

  return (
    <CardWrapper
      heading="🔐 Auth"
      size="small"
      headerLabel="Create an account"
      backButtonLabel="Already have an account ?"
      backButtonHref="/auth/login"
    >
      <Form {...form}>
        <form 
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6"
        >
          <div className="space-y-4">
          {showTwoFactor &&   // 2FA
              <>
                <FormField
                  control={form.control}
                  name="code"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Two Factor Code</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          disabled={isPending}
                          placeholder="123456"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </>
            }

            {!showTwoFactor &&
              <>
                <FormField 
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          disabled={isPending}
                          placeholder="John Doe"
                        />      
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
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
                    </FormItem>
                  )}
                />
                <FormField 
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Confirm Password</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          disabled={isPending}
                          placeholder="******"
                          type="password"
                        />      
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </>
            }
          </div>
          <FormError message={error}/>
          {/* <FormSuccess message={success}/> */}
          <Button type="submit" className="w-full" disabled={isPending}>
            {showTwoFactor ? 'Register' : 'Send Code'}
          </Button>
        </form>
      </Form>

    </CardWrapper>
  );
}
