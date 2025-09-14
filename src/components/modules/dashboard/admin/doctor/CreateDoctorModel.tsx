/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Button } from "@/components/ui/button";
import NMImageUploader from "@/components/ui/core/HRImageUploader";
import ImagePreviewer from "@/components/ui/core/HRImageUploader/ImagePreviewer";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { createDoctor } from "@/services/Doctor";
import { useState } from "react";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import { DoctorValidatinSchema } from "./DoctorValidationSchema";
import { zodResolver } from "@hookform/resolvers/zod";

const CreateDoctorModel = () => {
  const [imageFiles, setImageFiles] = useState<File[] | []>([]);
  const [imagePreview, setImagePreview] = useState<string[] | []>([]);

  const form = useForm({
      resolver: zodResolver(DoctorValidatinSchema),
    });

  const {
    formState: { isSubmitting },
  } = form;

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const finalPayload = {
        password: data.password,
        doctor: {
          name: data.name,
          email: data.email,
          contactNumber: data.contactNumber,
          address: data.address,
          registrationNumber: data.registrationNumber,
          experience:data.experience,
          gender: data.gender,
          appointmentFee:data.appointmentFee,
          qualification: data.qualification,
          currentWorkingPlace: data.currentWorkingPlace,
          designaton: data.designaton,
        },
      };

      const formData = new FormData();
      formData.append("data", JSON.stringify(finalPayload));

      if (imageFiles.length > 0) {
        formData.append("file", imageFiles[0]);
      }

      // Debugging check
      // console.log("Submitting Payload:", finalPayload);
      for (const [key, value] of formData.entries()) {
        console.log(key, value);
      }
      console.log(formData, "dast");
      const res = await createDoctor(formData);
      console.log(res);

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
    <Dialog>
      <DialogTrigger asChild>
        <Button className="text-white bg-purple-600 ">+ Add Doctor</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-black text-center">
            Create a Doctor
          </DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 text-black"
          >
            {/* Grid with 4 columns on md */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Password */}
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="******" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Name */}
              <FormField
                control={form.control}
                name="doctor.name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Doctor Name " {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Email */}
              <FormField
                control={form.control}
                name="doctor.email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="dr@example.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Contact Number */}
              <FormField
                control={form.control}
                name="doctor.contactNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Contact Number</FormLabel>
                    <FormControl>
                      <Input placeholder="+8801XXXXXXXXX" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Address */}
              <FormField
                control={form.control}
                name="doctor.address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Address</FormLabel>
                    <FormControl>
                      <Input placeholder="Add Your Address" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Registration Number */}
              <FormField
                control={form.control}
                name="doctor.registrationNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Registration Number</FormLabel>
                    <FormControl>
                      <Input placeholder="BMDC-XXXX-XXXX" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Experience */}
              <FormField
                control={form.control}
                name="doctor.experience"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Experience (Years)</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="0" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Gender */}
              <FormField
                control={form.control}
                name="doctor.gender"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Gender</FormLabel>
                    <FormControl>
                      <Input placeholder="MALE / FEMALE" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Appointment Fee */}
              <FormField
                control={form.control}
                name="doctor.appointmentFee"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Appointment Fee</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="fee amount "
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Qualification */}
              <FormField
                control={form.control}
                name="doctor.qualification"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Qualification</FormLabel>
                    <FormControl>
                      <Input placeholder="MBBS, FCPS (ENT)" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Current Working Place */}
              <FormField
                control={form.control}
                name="doctor.currentWorkingPlace"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Current Working Place</FormLabel>
                    <FormControl>
                      <Input placeholder="current work plase" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Designation */}
              <FormField
                control={form.control}
                name="doctor.designaton"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Designation</FormLabel>
                    <FormControl>
                      <Input placeholder="ENT Specialist" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Image Uploader */}
            <div className="flex items-start justify-center">
              {imagePreview?.length > 0 ? (
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

            <Button type="submit" className="w-full bg-purple-700 mt-4">
              {isSubmitting ? "Creating..." : "Create Doctor"}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateDoctorModel;
