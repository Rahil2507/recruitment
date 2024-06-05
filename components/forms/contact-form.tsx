"use client";

import * as z from "zod";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { ContactSchema } from "@/schemas";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { FormError } from "@/components/forms/form-error";
import { contact } from "@/actions/contact";
import { toast } from "sonner";

export function ContactForm() {
  const [error, setError] = useState<string | undefined>("");

  const [isPending, startTransition] = useTransition();

  
  const form = useForm<z.infer<typeof ContactSchema>>({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = (values: z.infer<typeof ContactSchema>) => {
    setError("");
    startTransition(() => {
      contact(values)
      .then((data) => {
        if (data?.error) {
          setError(data.error);
        }
        if (data?.success) {
          toast.success("Message Sent", {
            description: `You will be contacted back soon.`,
          })
          form.reset()
        }
    })
      .catch(() => setError("Something went wrong"))
    });
  };

  return (
    <div className="m-4">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="Enter your full name"
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
                  <FormLabel>Email Id</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      type="email"
                      placeholder="Enter your email id"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
             
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem className="pt-2">
                  <FormLabel className="flex">Phone No.<p className="font-normal text-gray-500 ml-1">(optional)</p></FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="Enter your phone no."
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
             
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      className="h-36"
                      {...field}
                      disabled={isPending}
                      placeholder="Enter your message here"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
             
          </div>
          <FormError message={error} />
          <Button type="submit" className="w-full" disabled={isPending}>
            Send
          </Button>
        </form>
      </Form>
    </div>
  );
}
