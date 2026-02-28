import { useForm } from "react-hook-form";
import z from "zod";
import { loginFormSchema, LoginFormSchema } from "../forms/login";
import { zodResolver } from "@hookform/resolvers/zod";
import { authClient, getErrorMessage } from "~/lib/auth-clients";
import { toast } from "sonner";
import { LOCAL_STORAGE_BATTER_AUTH_TOKEN_KEY } from "../constant/localStorage";

export const useLoginForm = () => {
  const form = useForm<LoginFormSchema>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(loginFormSchema),
  });

  const onSubmit = async (data: LoginFormSchema) => {
    console.log("cek data", data);
    try {
      const { error, data: responseLogin } = await authClient.signIn.email({
        email: data.email,
        password: data.password,
      });

      if (error?.code) {
        toast.error(getErrorMessage(error.code));

        return;
      }

      if (responseLogin?.token) {
        localStorage.setItem(
          LOCAL_STORAGE_BATTER_AUTH_TOKEN_KEY,
          responseLogin.token,
        );
      }

      toast.success("Sign in successfully");
    } catch (error) {
      console.log("cek error", error);
      toast.error((error as Error).message);
    }
  };

  return {
    form,
    onSubmit,
  };
};
