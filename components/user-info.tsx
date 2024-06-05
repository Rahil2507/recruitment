import { ExtendedUser } from "@/next-auth";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { UserInfoItem } from "@/components/user-info-item";
import { Badge } from "@/components/ui/badge";

interface UserInfoProps {
  user?: ExtendedUser;
  label: string;
}

export const UserInfo = ({    // Extra
  user,
  label,
}: UserInfoProps) => {
  return (
    <Card className="w-[600px] shadow-md">
      <CardHeader>
        <p className="text-2xl font-semibold text-center">{label}</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <UserInfoItem label="ID" data={user?.id} />
        <UserInfoItem label="Name" data={user?.name} />
        <UserInfoItem label="Email" data={user?.email} />
        <UserInfoItem label="Role" data={user?.role} />
      </CardContent>
    </Card>
  );
};
