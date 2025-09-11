import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import ResetPasswordForm from "./ResetPasswordForm";

export default function ResetPasswordMangement() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-purple-400 p-4">
      <Card className="w-full max-w-4xl overflow-hidden rounded-xl bg-purple-100 shadow-2xl md:flex">
        <CardContent className="flex flex-1 flex-col justify-center p-8 md:p-12">
          <div className="mb-8">
            <Image
              src={
                "https://i.ibb.co.com/zVQhvw6M/6216da73-9cbb-4a6e-ba99-8bd85245629a-removebg-preview.png"
              }
              alt="image"
              height={130}
              width={200}
            />
          </div>
          <h1 className="mb-2 text-2xl font-bold md:text-3xl">
            Reset Your Password?
          </h1>
          <p className="mb-8 text-sm text-gray-500">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh.
          </p>
          <ResetPasswordForm />
        </CardContent>

        <div className="flex-1 items-center justify-center bg-blue-200">
          <div>
            <Image
              height={100}
              width={200}
              src="https://i.ibb.co.com/S7ndbZX8/64c9c9fd66b9d7ccc98b3f87-sso-01.png"
              alt="Password Reset Illustration"
              className="w-full object-contain"
            />
          </div>
        </div>
      </Card>
    </div>
  );
}
