"use client";

import * as z from "zod";
import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { JobSchema, UserSchema } from "@/schemas";
import { FormError } from "@/components/forms/form-error";
import { deleteJob } from "@/data/job";
import { editJob } from "@/actions/add-edit-job";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import DeleteButton from "@/components/common/delete-button";
import { toast } from "sonner";

interface RetrievedJob extends z.infer<typeof JobSchema> {
  id: string;
  createdAt: Date;
  employer: z.infer<typeof UserSchema>
}


export function EditJobForm({jobData}: {jobData: RetrievedJob}) {
  const [error, setError] = useState<string | undefined>("");

  const [isPending, startTransition] = useTransition();

  const router = useRouter()

  const {title, field, experience, designation, qualifications, skills, location, description} = jobData

  const form = useForm<z.infer<typeof JobSchema>>({
    resolver: zodResolver(JobSchema),
    defaultValues: {
      title,
      field,
      experience,
      designation,
      qualifications,
      skills,
      location,
      description,
    },
  });

  const onSubmit = (values: z.infer<typeof JobSchema>) => {
    setError("");
    startTransition(() => {
      editJob(values, jobData.employer.id, jobData.id)
      .then((data) => {
        if (data?.error) {
          setError(data.error);
        }
        if (data?.success) {
          toast.success("Job Updated")
          router.push(`/admin/jobs/${jobData.id}`)
        }
    })
      .catch(() => setError("Something went wrong"))
    });
  };

  const handleDelete = async () => {
    await deleteJob(jobData.id, jobData.employer.id)
    router.push(`/admin/jobs/`)
  }

  return (
    <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6  py-6">
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
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
              name="field"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Field</FormLabel>
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
              name="experience"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Experience</FormLabel>
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
              name="designation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Designation</FormLabel>
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
              name="qualifications"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Qualifications</FormLabel>
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
              name="skills"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Skills</FormLabel>
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
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Location</FormLabel>
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
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      className="h-56"
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
          <div className="flex justify-center">
          <Button type="submit" className="w-36 mr-10" disabled={isPending}>
            Save
          </Button>
          
          <DeleteButton type="Job" action={handleDelete}  />
          
          </div>
        </form>
      </Form>
  );
}
