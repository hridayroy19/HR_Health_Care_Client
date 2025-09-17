/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import Image from "next/image";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import ImagePreviewer from "@/components/ui/core/HRImageUploader/ImagePreviewer";
import NMImageUploader from "@/components/ui/core/HRImageUploader";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { createPatient } from "@/services/patient";

export default function SignupPage() {
  const [imageFiles, setImageFiles] = useState<File[] | []>([]);
  const [imagePreview, setImagePreview] = useState<string[] | []>([]);

  const form = useForm();

  const {
    formState: { isSubmitting },
  } = form;

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const finalPayload = {
        password: data.password,
        patient: {
          name: data.name,
          email: data.email,
          contactNumber: data.contactNumber,
          address: data.address,
        },
      };

      const formData = new FormData();
      formData.append("data", JSON.stringify(finalPayload));

      if (imageFiles.length > 0) {
        formData.append("file", imageFiles[0]);
      }

      for (const [key, value] of formData.entries()) {
        console.log(key, value);
      }
      const res = await createPatient(formData);
      if (res.success) {
        toast.success(res.message);
        form.reset();
        setImageFiles([]);
        setImagePreview([]);
      } else {
        toast.error(res.message);
      }
    } catch (err: any) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-6xl border w-full grid grid-cols-1 md:grid-cols-2">
        {/* Left Side */}
        <div className="p-8 md:p-5 flex flex-col justify-center">
          <div className="flex flex-col items-start gap-4">
            <Image
              src="https://i.ibb.co/zVQhvw6M/6216da73-9cbb-4a6e-ba99-8bd85245629a-removebg-preview.png"
              alt="Logo"
              width={120}
              height={100}
              style={{ width: "120px", height: "auto" }}
            />
          </div>

          <h1 className="text-2xl md:text-3xl font-bold mb-1">
            Create your free Patinet account
          </h1>
          <p className="text-gray-600 mb-4">
            100% free. No credit card needed.
          </p>

          <div className="flex items-center gap-2 mb-4">
            <span className="flex-grow h-px bg-gray-300" />
            <span className="text-gray-500 text-sm">Or</span>
            <span className="flex-grow h-px bg-gray-300" />
          </div>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="justify-center p-4 space-y-6"
            >
              <div className="grid grid-cols-2 gap-3">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="Enter your name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
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
                <FormField
                  control={form.control}
                  name="contactNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Contact Number</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="contactNumber"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Address</FormLabel>
                      <FormControl>
                        <Input type="text" placeholder="address" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="col-span-2 flex justify-center items-start">
                  {imagePreview.length > 0 ? (
                    <ImagePreviewer
                      setImageFiles={setImageFiles}
                      imagePreview={imagePreview}
                      setImagePreview={setImagePreview}
                    />
                  ) : (
                    <NMImageUploader
                      setImageFiles={setImageFiles}
                      setImagePreview={setImagePreview}
                      label="Upload Profile Picture"
                    />
                  )}
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <FormField
                  control={form.control}
                  name="remember"
                  render={({ field }) => (
                    <FormItem className="flex items-center gap-2 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={!!field.value}
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

              <Button
                type="submit"
                className="w-full bg-purple-500 hover:bg-purple-700"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Sign Up"}
              </Button>

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
        </div>

        {/* Right Side */}
        <div className="bg-white flex flex-col justify-center items-center p-8 md:p-12">
          <div className="relative w-60 h-60 mb-6">
            <Image
              src="https://i.ibb.co/1f72rwwN/005-b-werehereforyou.webp"
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
