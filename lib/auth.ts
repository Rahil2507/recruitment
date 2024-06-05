// Server

import { auth } from "@/auth";
import { UserLogged } from "@/schemas";

export const serverCurrentUser = async () => {    // Extra
  const session = await auth();
  
  if (session) {
    return session.user as UserLogged
  } else {
    return {error: "User not logged in"}
  }

};

export const serverCurrentRole = async () => {
  const session = await auth();

  return session?.user?.role;
};
