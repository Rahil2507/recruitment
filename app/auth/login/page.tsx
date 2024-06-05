import { Suspense } from "react";

import { LoginForm } from "@/components/auth/login-form";
import ScrollUp from "@/components/common/scroll-up";

export default function LoginPage() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <ScrollUp/>
      <LoginForm/>
    </Suspense>
  )
}
