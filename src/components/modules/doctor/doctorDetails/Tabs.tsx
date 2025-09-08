import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/animated-tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function Button({
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={`bg-primary text-primary-foreground shadow hover:bg-primary/90
         inline-flex items-center justify-center gap-2 whitespace-nowrap
         rounded-md text-sm font-medium transition-colors
         focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring
         disabled:pointer-events-none disabled:opacity-50
         [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-9 px-4 py-2`}
    >
      {children}
    </button>
  );
}

function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={`file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none
         file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium
         disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm
         focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]
         aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive`}
    />
  );
}

function Label({
  children,
  htmlFor,
}: {
  children: React.ReactNode;
  htmlFor?: string;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
    >
      {children}
    </label>
  );
}

export default function AnimatedTabsDemo() {
  return (
    <div className="flex px-4 w-full gap-6">
      <Tabs defaultValue="profile">
        <TabsList>
          <TabsTrigger value="profile">Info</TabsTrigger>
          <TabsTrigger value="settings">Exprience</TabsTrigger>
          <TabsTrigger value="review">Review</TabsTrigger>
        </TabsList>

        <TabsContent value="profile">
          <Card>
            <CardHeader>
              <CardTitle>About Doctor</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-6">
             <div className="flex gap-6">
                 <p className="w-full border flex-1">
                About Doctor || মেডিসিন বিশেষজ্ঞ , ডায়াবেটোলজিস্ট ও নিউরো
                মেডিসিন অভিজ্ঞ || হাসপাতালে ভর্তি রোগী/ মুমূর্ষু রোগী
                টেলিমেডিসিন এর উপযোগী নয় DR. RAIHAN AHMAD MBBS, BCS(Health),
                FCPS (MEDICINE), CCD (BIRDEM), MD NEUROLOGY (Course), National
                Institute of Neurosciences and Hospital (NINS) --- ** কথা বলার
                সময় শালীনতা বজায় রাখুন, প্রয়োজনে হেডফোন ব্যবহার করুন। আপনার
                সমস্যা গুলো গুছিয়ে নিন; প্রয়োজনে তাপমাত্রা, প্রেসার, ব্লাড
                সুগার মেপে নিন। পূর্বের ওষুধ, প্রেসক্রিপশন, রিপোর্ট সাথে রাখুন
                অথবা আপলোড দিন । খিঁচুনি হলে ভিডিও করুন। ** --- অ্যাপোইন্টমেন্ট
                নিতে সমস্যা হলে DocTime হেল্পলাইন 09612885599 এ ফোন করে নাম বা
                DT9913 কোড বলুন।
              </p>
              <div className="w-1/3 ">
                <h3>At a Glance</h3>
                <p>
                  Instant Consultation Time Sat - Fri (9 PM - 11.50 PM)
                  Appointment Consultation Time Sat - Fri (3 PM - 11.50 PM)
                </p>
              </div>
             </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings">
          <Card>
            <CardHeader>
              <CardTitle>Settings</CardTitle>
              <CardDescription>
                Configure your preferences below.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              <div className="grid gap-3">
                <Label htmlFor="settings-language">Preferred Language</Label>
                <Input id="settings-language" defaultValue="English" />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="settings-theme">Theme</Label>
                <Input id="settings-theme" defaultValue="Light" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Settings</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="review">
          <Card>
            <CardHeader>
              <CardTitle>Settings</CardTitle>
              <CardDescription>
                Configure your preferences below.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              <div className="grid gap-3">
                <Label htmlFor="settings-language">Preferred Language</Label>
                <Input id="settings-language" defaultValue="English" />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="settings-theme">Theme</Label>
                <Input id="settings-theme" defaultValue="Light" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Settings</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
