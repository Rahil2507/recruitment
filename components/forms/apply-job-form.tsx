"use client";

import * as z from "zod";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { ApplicationSchema } from "@/schemas";
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
import { applyJob } from "@/actions/apply-job";
import { toast } from "sonner";

export function ApplyJobForm({jobId, employerId}: {jobId: string, employerId: string}) {
  const [error, setError] = useState<string | undefined>("");

  const [isPending, startTransition] = useTransition();

  const router = useRouter()

  
  const form = useForm<z.infer<typeof ApplicationSchema>>({
    resolver: zodResolver(ApplicationSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      resume: "",
      linkedin: "",
    },
  });


  const onSubmit = (values: z.infer<typeof ApplicationSchema>) => {
    setError("");
    startTransition(() => {
      applyJob(values, jobId, employerId)
      .then((data) => {
        if (data?.error) {
          setError(data.error);
        }
        if (data?.success) {
          toast.success("Job Applied", {
            description: `You will be contacted back soon.`,
          })
          router.push(`/jobs/${jobId}`)
        }
    })
      .catch(() => setError("Something went wrong"))
    });
  };

  return (
    <CardWrapper
      heading="Apply to Job"
      size="large"
      headerLabel="Kindly fill out the form"
      backButtonLabel="Back to job description"
      backButtonHref={`/jobs/${jobId}`}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
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
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone No.</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
             
            <FormField
              control={form.control}
              name="resume"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Resume URL</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
             
            <FormField
              control={form.control}
              name="linkedin"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Linkedin URL</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
             
          </div>
          <FormError message={error} />
          <Button type="submit" className="w-full" disabled={isPending}>
            Apply
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
}
