"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTransition, useState } from "react";
import { useSession } from "next-auth/react";

import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SettingsSchema } from "@/schemas";
import {
  Card,
  CardHeader,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { settings } from "@/actions/settings";
import {
  Form,
  FormField,
  FormControl,
  FormItem,
  FormLabel,
  FormDescription,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { clientCurrentUser } from "@/hooks/auth";
import { FormError } from "@/components/forms/form-error";
import { FormSuccess } from "@/components/forms/form-success";
import { UserRole } from "@prisma/client";
import ScrollUp from "@/components/common/scroll-up";
import DeleteButton from "@/components/common/delete-button";
import { redirect } from "next/navigation";
import { logout } from "@/actions/logout";
import { deleteUser } from "@/data/employees";

const SettingsPage = () => {
  const user = clientCurrentUser();

  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();
  const { update } = useSession();
  const [isPending, startTransition] = useTransition();

  const [changeForm, setChangeForm] = useState("none")

  const form = useForm<z.infer<typeof SettingsSchema>>({
    resolver: zodResolver(SettingsSchema),
    defaultValues: {
      password: undefined,
      newPassword: undefined,
      name: user?.name || undefined,
      email: user?.email || undefined,
      role: user?.role || undefined,
    }
  });

  const onSubmit = (values: z.infer<typeof SettingsSchema>) => {
    startTransition(() => {
      settings(values)
        .then((data) => {
          if (data.error) {
            setError(data.error);
          }

          if (data.success) {
            update();
            setSuccess(data.success);
          }
        })
        .catch(() => setError("Something went wrong!"));
    });
  }

  const handleDelete = async () => {
    await deleteUser(user?.id as string)
    logout()
  }

  return ( 
    <div className=" bg-white p-10 rounded-xl">
      <ScrollUp/>
      <div className=" pb-6 border-b border-slate-300 mb-6">
        <p className="text-2xl font-semibold">User Setting</p>
      </div>
      <div className="flex h-36 justify-around">
        <div className="py-4">
          <div className="text-gray-600 mb-2 flex"><p className="font-semibold text-black mr-4 w-12">Name: </p>{user?.name}</div>
          <div className="text-gray-600 mb-2 flex"><p className="font-semibold text-black mr-4 w-12">Email: </p>{user?.email}</div>
          <div className="text-gray-600 mb-2 flex"><p className="font-semibold text-black mr-4 w-12">Role: </p>
            {user?.role === UserRole.OWNER ? "Owner" : "Employee"}
          </div>
        </div>
        <div className=" mx-0 border-r border border-slate-300" />
        <div className="flex flex-col">
          <Button onClick={() => setChangeForm("name")}>Change Name</Button>
          <Button onClick={() => setChangeForm("password")} className="my-4">Change Password</Button>
          {user.role !== UserRole.OWNER && <DeleteButton type="Account" action={handleDelete} />}
        </div>
      </div>

    </div>
   );
}
 
export default SettingsPage;