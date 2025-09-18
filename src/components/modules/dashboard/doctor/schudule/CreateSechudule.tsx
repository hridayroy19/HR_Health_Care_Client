"use client";

import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function DateTimeRangePicker() {
  const [form, setForm] = useState({
    startDate: "",
    endDate: "",
    startTime: "",
    endTime: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);

    setForm({
      startDate: "",
      endDate: "",
      startTime: "",
      endTime: "",
    });
  };

  return (
    <div className="mb-10 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-3xl mx-auto shadow-md">
        <CardHeader>
          <CardTitle className="text-center text-lg sm:text-xl font-semibold">
            Select Date & Time Crete Schdule
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Start Date */}
              <div className="flex flex-col gap-2">
                <Label htmlFor="startDate">Start Date</Label>
                <Input
                  type="date"
                  id="startDate"
                  name="startDate"
                  value={form.startDate}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* End Date */}
              <div className="flex flex-col gap-2">
                <Label htmlFor="endDate">End Date</Label>
                <Input
                  type="date"
                  id="endDate"
                  name="endDate"
                  value={form.endDate}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Start Time */}
              <div className="flex flex-col gap-2">
                <Label htmlFor="startTime">Start Time</Label>
                <Input
                  type="time"
                  id="startTime"
                  name="startTime"
                  value={form.startTime}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* End Time */}
              <div className="flex flex-col gap-2">
                <Label htmlFor="endTime">End Time</Label>
                <Input
                  type="time"
                  id="endTime"
                  name="endTime"
                  value={form.endTime}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="flex justify-center">
              <Button type="submit" className="w-full sm:w-[150px]">
                Save Range
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
