"use client";

import { toast } from "sonner";
import { Button } from "~/components/ui/button";
import { authClient } from "~/lib/auth-clients";

export default function Home() {
  const handleLogout = async () => {
    await authClient.signOut();
    window.location.href = "/login";
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <h1 className="text-4xl font-bold">Welcome</h1>
      <Button variant="outline" onClick={handleLogout}>
        Logout
      </Button>
      {/* <Button variant="destructive">CLick me</Button>
      <Button variant="secondary">CLick me</Button>
      <Button variant="ghost">CLick me</Button>
      <Button variant="link">CLick me</Button> */}
    </div>
  );
}
