"use client";

import { authClient } from "~/lib/auth-clients";
import { LoginForm } from "../components/LoginForm";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const LoginPages = () => {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();

  useEffect(() => {
    if (session) {
      router.replace("/");
    }
  }, [session, router]);

  if (isPending) {
    return (
      <div className="flex min-h-screen items-center justify-center w-full">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center w-full">
      <LoginForm />
    </div>
  );
};

export default LoginPages;
