/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { resetPassword } from "@/services/AuthService";

const SetPasswordPage = () => {
  const searchParams = useSearchParams();
  const userId = searchParams.get("userId") || "";
  const token = decodeURIComponent(searchParams.get("token") || "").trim();

  console.log(token);
  const router = useRouter();
  const form = useForm();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const { newPassword, confirmPassword } = data;

    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    try {
      const res = await resetPassword({
        id: userId,
        password: newPassword,
        token,
      });

      if (res?.success) {
        toast.success(res?.message || "Password reset successful!");
        router.push("/login");
      } else {
        toast.error(res?.message || "Failed to reset password!");
      }
    } catch (err: any) {
      console.error(err);
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="w-full max-w-md mx-auto mt-[18vh] mb-[10vh]">
      <div className="bg-white rounded-xl shadow-lg dark:bg-gray-800 border border-amber-600">
        <div className="p-6">
          <h1 className="text-center text-2xl font-bold text-gray-800 dark:text-white">
            Set Password
          </h1>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col bg-purple-100 justify-center p-10 space-y-6"
            >
              {/* New Password */}
              <FormField
                control={form.control}
                name="newPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>New Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="••••••••"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Confirm Password */}
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="••••••••"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="w-full bg-purple-500 hover:bg-purple-700 text-white"
              >
                Reset Password
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default SetPasswordPage;
