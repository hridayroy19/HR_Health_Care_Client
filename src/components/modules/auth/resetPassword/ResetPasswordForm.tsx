import Link from "next/link";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { restpasswordformSchema } from "./resetPasswordSchema";

const ResetPasswordForm = () => {
  const form = useForm({
    resolver: zodResolver(restpasswordformSchema),
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data, "data email");
  };

  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 w-full"
        >
          {/* Email field */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                  <Input placeholder="m@example.com" type="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full bg-blue-800 hover:bg-blue-900 text-white rounded-lg shadow"
          >
            Reset Password
          </Button>
        </form>
      </Form>

      <div className="text-center mt-4">
        <Link
          href="/login"
          className="text-sm text-black hover:text-black transition"
        >
          Back to Sign In
        </Link>
      </div>
    </div>
  );
};

export default ResetPasswordForm;
