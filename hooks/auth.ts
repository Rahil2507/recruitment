// Client

import { useSession } from "next-auth/react";
import { UserLogged } from "@/schemas";

export const clientCurrentUser = () => {   // Extra
  const session = useSession()

  if (session.data) {
    return session.data?.user as UserLogged
  } else {
    return {error: "User not logged in"}
  }

}

export const clientCurrentRole = () => { 
  const session = useSession();

  return session.data?.user?.role;
};
