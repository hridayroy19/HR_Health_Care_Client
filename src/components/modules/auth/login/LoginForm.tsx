"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { Facebook, Twitter } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { loginSchema } from "./LoginValidation";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "sonner";
import { loginUser } from "@/services/AuthService";
import { useUser } from "@/context/UserContext";
export function LoginForm() {
  const form = useForm({
    resolver: zodResolver(loginSchema),
  });

  const {setIsLoading} = useUser()
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirectPath");
  const router = useRouter();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const res = await loginUser(data);
      setIsLoading(true)
      if (res?.success) {
        toast.success(res?.message);
        if (redirect) {
          router.push(redirect);
        } else {
          router.push("/");
        }
      } else {
        toast.error(res?.message);
      }
    } catch (err: any) {
      console.error(err);
    }
  };

  return (
    <div className="flex items-center justify-center w-full h-screen bg-purple-200">
      <Card className="w-[900px] overflow-hidden shadow-xl">
        <CardContent className="grid md:grid-cols-2 p-0">
          {/* Left Illustration */}
          <div className="relative hidden md:flex items-center justify-center bg-purple-300">
            <Image
              src="https://i.ibb.co.com/RTX7tqB2/undraw-medicine-trans-1024x718.webp"
              alt="Doctors Illustration"
              width={500}
              height={500}
              className="object-contain"
            />
          </div>

          {/* Right Form */}
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col bg-purple-100 justify-center p-10 space-y-6"
            >
              <div className="text-center space-y-2">
                <div className="flex items-center justify-center gap-2">
                  <Image
                    src="https://i.ibb.co.com/zVQhvw6M/6216da73-9cbb-4a6e-ba99-8bd85245629a-removebg-preview.png"
                    alt="image"
                    height={50}
                    width={120}
                  />
                </div>
                <h1 className="text-2xl font-bold">Welcome Back!</h1>
                <p className="text-muted-foreground">
                  Login to continue to your account
                </p>
              </div>

              {/* Email */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="m@example.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Password */}
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
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

              {/* Remember Me */}
              <div className="flex items-center justify-between text-sm">
                <FormField
                  control={form.control}
                  name="remember"
                  render={({ field }) => (
                    <FormItem className="flex items-center gap-2 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <FormLabel className="text-sm font-normal">
                        Remember Me
                      </FormLabel>
                    </FormItem>
                  )}
                />
                <a href="#" className="text-blue-600 hover:underline">
                  Need Help?
                </a>
              </div>

              {/* Login Button */}
              <Button
                type="submit"
                className="w-full bg-purple-500 hover:bg-purple-700"
              >
                Login
              </Button>

              {/* Divider */}
              <div className="relative text-center text-sm">
                <span className="bg-purple-100 px-2 text-muted-foreground relative z-10">
                  Alternative Login Options
                </span>
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t" />
                </div>
              </div>

              {/* Social Buttons */}
              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" className="flex gap-2 items-center">
                  <Facebook />
                  Login with Google
                </Button>
                <Button variant="outline" className="flex gap-2 items-center">
                  <Twitter />
                  Login with Twitter
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
 