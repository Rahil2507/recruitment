"use client";

import * as z from "zod";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { JobSchema } from "@/schemas";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button";
import { FormError } from "@/components/forms/form-error";
import { addJob } from "@/actions/add-edit-job";
import { toast } from "sonner";
import { JobField } from "@prisma/client";

export function AddJobForm() {
  const [error, setError] = useState<string | undefined>("");

  const [isPending, startTransition] = useTransition();

  const router = useRouter()

  
  const form = useForm<z.infer<typeof JobSchema>>({
    resolver: zodResolver(JobSchema),
    defaultValues: {
      title: "",
      experience: "",
      designation: "",
      qualifications: "",
      skills: "",
      location: "",
      description: "",
    },
  });

  const onSubmit = (values: z.infer<typeof JobSchema>) => {
    setError("");
    startTransition(() => {
      addJob(values)
      .then((data) => {
        if (data?.error) {
          setError(data.error);
        }
        if (data?.success) {
          toast.success("Job Posted")
          router.push("/admin/jobs")
        }
    })
      .catch(() => setError("Something went wrong"))
    });
  };

  return (
    <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6  py-6">
          <div className="space-y-4">
             
          <FormField
              control={form.control}
              name="field"
              render={({ field }) => {
                return (
                <FormItem className="flex items-center">
                  <FormLabel className="mr-6">Field</FormLabel>
                  <Select onValueChange={field.onChange} disabled={isPending}>
                    <FormControl>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select a field" />
                      </SelectTrigger>
                    </FormControl>
                      <SelectContent>
                        {Object.keys(JobField).map((field, i) => (
                          <SelectItem key={i} value={field}>{field}</SelectItem>
                        ))}
                      </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}}
            />
            
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
            Add
          </Button>
          <Button type="button" className="w-36" disabled={true}>
            Save as draft
          </Button>
          </div>
        </form>
      </Form>
  );
}
