"use client";

import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/animated-tabs";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function DoctorAditionInfo() {
  return (
    <div className="flex w-full justify-center px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 py-8">
      <Tabs defaultValue="profile">
        {/* Tab Buttons */}
        <TabsList>
          <TabsTrigger value="profile">Info</TabsTrigger>
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="review">Reviews</TabsTrigger>
        </TabsList>

        {/* Profile / Info */}
        <TabsContent value="profile">
          <Card>
            <CardHeader>
              <CardTitle>About the Doctor</CardTitle>
              <CardDescription>
                Get to know your doctor and consultation details.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="md:col-span-2 space-y-4">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    ডাঃ রাইহান আহমাদ – মেডিসিন বিশেষজ্ঞ, ডায়াবেটোলজিস্ট ও নিউরো
                    মেডিসিন অভিজ্ঞ।
                    <br />
                    <br />
                    যোগ্যতা: MBBS, BCS(Health), FCPS (Medicine), CCD (BIRDEM),
                    MD Neurology (Course) — National Institute of Neurosciences
                    and Hospital (NINS).
                  </p>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                    <li>
                      শালীনভাবে কথা বলুন এবং প্রয়োজনে হেডফোন ব্যবহার করুন।
                    </li>
                    <li>প্রয়োজনীয় রিপোর্ট, প্রেসক্রিপশন, ওষুধ সাথে রাখুন।</li>
                    <li>খিঁচুনি হলে ভিডিও করুন।</li>
                  </ul>
                </div>
                <div className="border rounded-md p-4 bg-muted/20">
                  <h3 className="font-semibold mb-2">At a Glance</h3>
                  <p className="text-sm text-muted-foreground">
                    <strong>Instant Consultation:</strong> Sat - Fri (9 PM -
                    11.50 PM)
                    <br />
                    <strong>Appointment:</strong> Sat - Fri (3 PM - 11.50 PM)
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Experience */}
        <TabsContent value="experience">
          <Card>
            <CardHeader>
              <CardTitle>Doctor’s Experience</CardTitle>
              <CardDescription>
                Professional journey and areas of expertise.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-2">Specializations</h4>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                    <li>Medicine & Internal Diseases</li>
                    <li>Neurology</li>
                    <li>Diabetology</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Workplaces</h4>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                    <li>National Institute of Neurosciences</li>
                    <li>BIRDEM Hospital</li>
                    <li>Govt. Health Services</li>
                  </ul>
                </div>
              </div>
              <div>
                <h4 className="font-medium mb-2">Years of Experience</h4>
                <p className="text-sm text-muted-foreground">
                  12+ years in patient care & consultation
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Reviews */}
        <TabsContent value="review">
          <Card>
            <CardHeader>
              <CardTitle>Patient Reviews</CardTitle>
              <CardDescription>
                What patients are saying about the doctor.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <p className="text-sm font-medium">
                  ⭐⭐⭐⭐⭐ Excellent Service
                </p>
                <p className="text-sm text-muted-foreground">
                  Very professional and caring doctor. Helped me understand my
                  condition clearly.
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium">⭐⭐⭐⭐ Great Experience</p>
                <p className="text-sm text-muted-foreground">
                  Friendly and knowledgeable. Gave me the right treatment plan.
                </p>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Write a Review</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
