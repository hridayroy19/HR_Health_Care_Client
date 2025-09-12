"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Form, 
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { IDoctorUpdate } from "@/types";
import { useEffect } from "react";

interface DoctorUpdateModalProps {
  doctor: IDoctorUpdate | null;
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  onConfirm?: (payload: any) => void;
}

const DoctorUpdateModel: React.FC<DoctorUpdateModalProps> = ({
  doctor,
  isOpen,
  onOpenChange,
  onConfirm,
}) => {
  const form = useForm<FieldValues>();

  const {
    formState: { isSubmitting },
    reset,
  } = form;

  // যখনই doctor data আসবে তখন default value বসাও
  useEffect(() => {
    if (doctor) {
      reset({
        password: "",
        name: doctor.name || "",
        email: doctor.email || "",
        contactNumber: doctor.contactNumber || "",
        address: doctor.address || "",
        registrationNumber: doctor.registrationNumber || "",
        experience: doctor.experience || "",
        gender: doctor.gender || "",
        appointmentFee: doctor.appointmentFee || "",
        qualification: doctor.qualification || "",
        currentWorkingPlace: doctor.currentWorkingPlace || "",
        designaton: doctor.designaton || "",
      });
    }
  }, [doctor, reset]);

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const finalPayload = {
      doctor: {
        name: data.name,
        email: data.email,
        contactNumber: data.contactNumber,
        address: data.address,
        registrationNumber: data.registrationNumber,
        experience: Number(data.experience),
        gender: data.gender,
        appointmentFee: Number(data.appointmentFee),
        qualification: data.qualification,
        currentWorkingPlace: data.currentWorkingPlace,
        designaton: data.designaton,
      },
    };

    console.log("Update Payload:", finalPayload);
    if (onConfirm) {
      onConfirm(finalPayload); // parent এ পাঠানো যাবে
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-black text-center">
            Update Doctor
          </DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 text-black"
          >
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
                name="name"
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
                name="email"
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
                name="contactNumber"
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
                name="address"
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
                name="registrationNumber"
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
                name="experience"
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
                name="gender"
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
                name="appointmentFee"
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
                name="qualification"
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
                name="currentWorkingPlace"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Current Working Place</FormLabel>
                    <FormControl>
                      <Input placeholder="current work place" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Designation */}
              <FormField
                control={form.control}
                name="designaton"
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

            <Button type="submit" className="w-full bg-purple-700 mt-4">
              {isSubmitting ? "Updating..." : "Update Doctor"}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default DoctorUpdateModel;
