import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const teamMembers = [
  {
    name: "Dr. Anya Sharma",
    title: "Chief Medical Officer",
    specialty: "Internal Medicine",
    bio: "With over 15 years of experience in internal medicine and a passion for patient-centric care, Dr. Sharma leads our medical team. She's a graduate of Stanford University School of Medicine and previously served as Head of Telemedicine at a leading hospital network. Her vision is to make high-quality, personalized healthcare accessible to every individual, regardless of their location.",
    image: "https://i.ibb.co.com/xSqk4rL3/portrait-of-doctor-with-smile-confidence-and-hospital-employee-with-care-support-and-trust.webp",
  },
  {
    name: "Sarah Chen, RN",
    title: "Director of Patient Services",
    specialty: "Patient Advocacy",
    bio: "Sarah is a registered nurse with a decade of experience in clinical patient care. She's the heart of our patient services team, focused on creating a seamless and supportive user experience. From your first click to post-consultation follow-up, Sarah ensures every aspect of your journey is handled with empathy and efficiency.",
    image: "https://i.ibb.co.com/1YcdrFpJ/smiling-touching-arms-crossed-room-hospital-1134-799.webp",
  },
  {
    name: "James Rodriguez",
    title: "Chief Technology Officer",
    specialty: "Health Informatics",
    bio: "A pioneer in digital health solutions, James holds a Ph.D. in Health Informatics from MIT. He's the architect behind HR Health Care's robust and secure platform. James is committed to leveraging the latest technology to protect your data, ensure platform reliability, and continuously innovate to improve the online consultation experience.",
    image: "https://i.ibb.co.com/qLvJ34RY/istockphoto-2158610739-612x612.jpg",
  },
];

const testimonials = [
  {
    quote:
      "I was hesitant to try an online doctor, but HR Health Care exceeded all my expectations. The video quality was excellent, the doctor was incredibly knowledgeable, and I received a prescription sent directly to my pharmacy. This is the future of healthcare!",
    author: "Maria P., San Francisco, CA",
  },
  {
    quote:
      "Booking an appointment was a breeze, and I was able to talk to a specialist within hours. It saved me a trip to the clinic and a lot of time. The platform is intuitive and the care was top-notch.",
    author: "David R., Austin, TX",
  },
  {
    quote:
      "HR Health Care has been a lifesaver for my family. The access to pediatricians and general practitioners is invaluable. The care is compassionate and professional, and I feel confident knowing my family's health is in good hands.",
    author: "Jessica T., New York, NY",
  },
];

export function AboutPage() {
  return (
    <div className="bg-purple-100 ">
 <div className="container mx-auto md:mt-30 md:px-24 px-14 md:py-10 py-24 ">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 tracking-tight mb-4">
          Empowering Your Health Journey, One Click at a Time
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          At HR Health Care, we are revolutionizing the way you access medical
          expertise. Our secure and intuitive platform connects you with
          certified doctors for a wide range of needs, from general wellness
          checks to specialized consultations, all from the comfort of your
          home.
        </p>
      </section>

      <Separator className="mb-16" />

      {/* Our Core Values Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
          Our Guiding Principles
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Every decision we make is rooted in a commitment to these core values,
          ensuring a healthcare experience that is reliable, compassionate, and
          truly beneficial for you.
        </p>
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div className="flex flex-col items-center">
            {/* <FaLaptopMedical className="text-5xl text-primary mb-4" /> */}
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Accessibility
            </h3>
            <p className="text-sm text-gray-600">
              We believe quality healthcare should have no geographical
              boundaries. Our platform breaks down barriers to give you
              immediate access to medical professionals.
            </p>
          </div>
          <div className="flex flex-col items-center">
            {/* <FaUserShield className="text-5xl text-primary mb-4" /> */}
            <h3 className="text-xl font-bold text-gray-800 mb-2">Security</h3>
            <p className="text-sm text-gray-600">
              Your privacy is our top priority. We utilize state-of-the-art
              encryption and security protocols to ensure your personal health
              information is always protected.
            </p>
          </div>
          <div className="flex flex-col items-center">
            {/* <FaHeartbeat className="text-5xl text-primary mb-4" /> */}
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Quality Care
            </h3>
            <p className="text-sm text-gray-600">
              We partner only with board-certified and experienced doctors who
              are vetted to provide the highest standard of care and expertise
              in every consultation.
            </p>
          </div>
          <div className="flex flex-col items-center">
            {/* <FaHandHoldingHeart className="text-5xl text-primary mb-4" /> */}
            <h3 className="text-xl font-bold text-gray-800 mb-2">Empathy</h3>
            <p className="text-sm text-gray-600">
              We understand health concerns can be stressful. Our platform and
              our team are dedicated to providing a supportive, empathetic, and
              human-centric experience.
            </p>
          </div>
        </div>
      </section>

      <Separator className="mb-16" />

      {/* Our Story and Mission Section */}
      <section className="mb-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              Our Journey: Born from a Need for Better Healthcare
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              HR Health Care was founded by a team of healthcare professionals
              and tech innovators who witnessed firsthand the challenges of
              modern healthcare—long wait times, geographical barriers, and
              fragmented care. Our goal was simple yet ambitious: to build a
              platform that delivers a seamless, high-quality, and secure
              healthcare experience directly to you. We ve combined cutting-edge
              technology with a deep understanding of patient needs to create a
              service that is both innovative and deeply human.
            </p>
            <p className="text-gray-700 leading-relaxed font-bold">
              Our commitment is to be a trusted partner in your health journey,
              providing expert advice and genuine care whenever you need it.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <Image
              src="https://i.ibb.co.com/67zbPL4D/865a66b57f6e683ad4b6c2ac0b6eb256.jpg" 
              alt="Our Story"
              width={600}
              height={400}
              className="rounded-lg shadow-lg object-cover w-full h-auto"
            />
          </div>
        </div>
      </section>

      <Separator className="mb-16" />

      {/* Meet Our Team Section with detailed bios */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
          Meet Our Expert Leadership Team
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Our diverse team brings together decades of experience in clinical
          medicine, patient care, and health technology to ensure a world-class
          service.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <CardContent className="p-6 text-center">
                <Avatar className="w-24 h-24 mx-auto mb-4 border-2 border-primary">
                  <AvatarImage
                    src={member.image}
                    alt={`Avatar of ${member.name}`}
                  />
                  <AvatarFallback>
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-bold text-gray-800">
                  {member.name}
                </h3>
                <p className="text-sm font-medium text-primary mb-2">
                  {member.title}
                </p>
                <p className="text-sm text-gray-500 mb-4">{member.specialty}</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator className="mb-16" />

      {/* Testimonials Section with more details */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
          Hear from Our Community
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="shadow-md">
              <CardContent className="p-6">
                <blockquote className="italic text-gray-700 mb-4">
                  {testimonial.quote}
                </blockquote>
                <p className="text-sm font-bold text-gray-800">
                  - {testimonial.author}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator className="mb-16" />

      {/* Final Call to Action Section */}
      <section className="text-center bg-primary-foreground p-10 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Ready to Take Control of Your Health?
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Join thousands of satisfied patients who are choosing a simpler,
          smarter way to manage their healthcare. Your well-being is our
          priority.
        </p>
        <a
          href="/login"
          className=" bg-purple-600 text-white rounded-3xl h-10 px-4 py-2"
        >
          Get Started Now
        </a>
      </section>
    </div>
    </div>
   
  );
}
