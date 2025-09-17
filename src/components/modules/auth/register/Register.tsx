"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Checkbox } from "@/components/ui/checkbox";

export default function SignupPage() {
  const form = useForm();

  return (
    <div className="min-h-screen flex items-center justify-center  px-4">
      <div className="max-w-6xl border w-full grid grid-cols-1 md:grid-cols-2">
        {/* Left Side */}
        <div className="p-8 md:p-12 flex flex-col justify-center">
          {/* Logo */}
          <div className="mb-2">
            <Image
              src="https://i.ibb.co/zVQhvw6M/6216da73-9cbb-4a6e-ba99-8bd85245629a-removebg-preview.png"
              alt="image"
              width={120}
              height={100}
              style={{ width: "120px", height: "auto" }}
            />
          </div>

          <h1 className="text-2xl md:text-3xl font-bold mb-2">
            Create your free account
          </h1>
          <p className="text-gray-600 mb-6">
            100% free. No credit card needed.
          </p>
          {/* Divider */}
          <div className="flex items-center gap-2 mb-6">
            <span className="flex-grow h-px bg-gray-300" />
            <span className="text-gray-500 text-sm">Or</span>
            <span className="flex-grow h-px bg-gray-300" />
          </div>

          {/* Right Form */}
          <Form {...form}>
            <form className="  justify-center p-10 space-y-6">
              {/* Email */}
              <div className="grid grid-cols-2 gap-3">
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
              </div>

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
            </form>
          </Form>

          <p className="text-xs text-gray-500 mt-6 leading-relaxed">
            We’re committed to your privacy. HubSpot uses the information you
            provide to us to contact you about our relevant content, products,
            and services. You may unsubscribe from these communications at any
            time. For more information, check out our{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Privacy Policy
            </a>
            .
          </p>
        </div>

        {/* Right Side */}
        <div className="bg-white flex flex-col justify-center items-center p-8 md:p-12">
          <div className="relative w-60 h-60 mb-6">
            <Image
              src="https://i.ibb.co.com/1f72rwwN/005-b-werehereforyou.webp"
              alt="Illustration"
              fill
              className="object-contain"
            />
          </div>
          <h2 className="text-lg font-semibold mb-2 text-center">
            Get Started with Marketing Hub
          </h2>
          <p className="text-gray-600 text-center max-w-sm">
            Attract and engage more leads with free tools like ads, landing
            pages, email, forms and live chat.
          </p>
        </div>
      </div>
    </div>
  );
}
