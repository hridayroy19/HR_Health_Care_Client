"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    concern: "",
    query: "",
  });

  const handleChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
  <div className=" md:px-24 px-6">
      <section className="w-full bg-blue-50 py-16 px-4">
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-bold text-black">
          Get in touch with us
        </h2>
        <p className="text-gray-600 mt-2 text-sm md:text-base">
          We’re here to help. Send your query or question below and provide us with as
          much detail as possible. We aim to reply within 24 hours.
        </p>
      </div>

      <Card className=" w-full mx-auto shadow-sm rounded-2xl">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-gray-800 text-center">
            Contact Form
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form
            onSubmit={handleSubmit}
            className="grid gap-6 md:gap-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                placeholder="Name *"
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                required
              />
              <Input
                placeholder="Email *"
                type="email"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                required
              />
            </div>

            <Select
              onValueChange={(value) => handleChange("concern", value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="What is your concern?" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="support">Customer Support</SelectItem>
                <SelectItem value="feedback">Feedback</SelectItem>
                <SelectItem value="business">Business Inquiry</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>

            <Textarea
              placeholder="Your query *"
              value={formData.query}
              onChange={(e) => handleChange("query", e.target.value)}
              required
              className="min-h-[150px]"
            />

            {/* Submit */}
            <Button
              type="submit"
              className="w-full md:w-40 mx-auto bg-purple-600 hover:bg-purple-700 text-white rounded-xl shadow-md transition"
            >
              Submit
            </Button>
          </form>
        </CardContent>
      </Card>
    </section>
  </div>
  );
}
