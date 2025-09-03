import TextHighlighter from "@/components/ui/text-highlighter";

const FQAs = () => {
  return (
    <div className="w-full mx-auto justify-center bg-purple-100 py-12 px-10 md:px-16 lg:px-28">
      <div className="mx-auto max-w-lg text-3xl font-bold tracking-tight text-center">
        <TextHighlighter
          type="wavy"
          className="mb-10"
          highlightColor="#471074"
        >
          <span>FAQs</span>
        </TextHighlighter>
      </div>
      <div className="space-y-4">
        {/* FAQ 1 */}
        <details
          className="group border-s-4 border-gray-200 bg-gray-50 p-4 [&_summary::-webkit-details-marker]:hidden"
          open
        >
          <summary className="flex items-center justify-between gap-1.5 text-gray-900">
            <h2 className="text-lg font-medium">
              What is HR Health Care and how does it work?
            </h2>
            <svg
              className="size-5 shrink-0 transition-transform duration-300 group-open:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </summary>
          <p className="pt-4 text-gray-900">
            **HR Health Care** is an online platform that connects you with certified and experienced doctors for virtual consultations. You can book an appointment, consult with a doctor via video call, and receive prescriptions, all from the comfort of your home. We aim to provide convenient and accessible healthcare services for everyone.
          </p>
        </details>

        {/* FAQ 2 */}
        <details className="group border-s-4 border-gray-200 bg-gray-50 p-4 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex items-center justify-between gap-1.5 text-gray-900">
            <h2 className="text-lg font-medium">
              What kind of doctors are available on HR Health Care?
            </h2>
            <svg
              className="size-5 shrink-0 transition-transform duration-300 group-open:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </summary>
          <p className="pt-4 text-gray-900">
            Our platform features a wide range of doctors, including general practitioners, dermatologists, cardiologists, and many other specialists. All doctors on HR Health Care are verified, licensed, and have significant experience in their fields. You can view their profiles and credentials before booking an appointment.
          </p>
        </details>

        {/* FAQ 3 */}
        <details className="group border-s-4 border-gray-200 bg-gray-50 p-4 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex items-center justify-between gap-1.5 text-gray-900">
            <h2 className="text-lg font-medium">
              How do I book a consultation?
            </h2>
            <svg
              className="size-5 shrink-0 transition-transform duration-300 group-open:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </summary>
          <p className="pt-4 text-gray-900">
            Booking a consultation is easy. Simply log in or sign up, browse our list of doctors, and select a doctor based on your needs. Choose a convenient date and time from their available slots and confirm your appointment. You will receive a notification with a link to join the video call at your scheduled time.
          </p>
        </details>

        {/* FAQ 4 */}
        <details className="group border-s-4 border-gray-200 bg-gray-50 p-4 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex items-center justify-between gap-1.5 text-gray-900">
            <h2 className="text-lg font-medium">
              Is my personal and medical information secure?
            </h2>
            <svg
              className="size-5 shrink-0 transition-transform duration-300 group-open:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </summary>
          <p className="pt-4 text-gray-900">
            We prioritize your privacy and security. All your personal and medical data on HR Health Care is protected with advanced encryption and security protocols. We are committed to maintaining the confidentiality of your information and comply with all relevant data protection regulations.
          </p>
        </details>

        {/* FAQ 5 */}
        <details className="group border-s-4 border-gray-200 bg-gray-50 p-4 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex items-center justify-between gap-1.5 text-gray-900">
            <h2 className="text-lg font-medium">
              Can I get a prescription through a virtual consultation?
            </h2>
            <svg
              className="size-5 shrink-0 transition-transform duration-300 group-open:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </summary>
          <p className="pt-4 text-gray-900">
            Yes, for many conditions, our doctors can provide e-prescriptions after a consultation. These prescriptions are digitally signed and can be sent directly to your email or a pharmacy of your choice. Please note that prescribing is at the doctors discretion and depends on the nature of your illness.
          </p>
        </details>

        {/* FAQ 6 */}
        <details className="group border-s-4 border-gray-200 bg-gray-50 p-4 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex items-center justify-between gap-1.5 text-gray-900">
            <h2 className="text-lg font-medium">
              What if I need a physical check-up or lab tests?
            </h2>
            <svg
              className="size-5 shrink-0 transition-transform duration-300 group-open:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </summary>
          <p className="pt-4 text-gray-900">
            While many conditions can be diagnosed online, some require an in-person examination. If a doctor determines that you need a physical check-up or lab tests, they will provide a referral and guide you on the next steps. Our service is designed to complement, not replace, in-person care when necessary.
          </p>
        </details>

        {/* FAQ 7 */}
        <details className="group border-s-4 border-gray-200 bg-gray-50 p-4 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex items-center justify-between gap-1.5 text-gray-900">
            <h2 className="text-lg font-medium">
              How much does a consultation cost?
            </h2>
            <svg
              className="size-5 shrink-0 transition-transform duration-300 group-open:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </summary>
          <p className="pt-4 text-gray-900">
            The consultation fee varies depending on the doctors specialization. You can see the fee clearly listed on each doctors profile page before you book an appointment. We offer secure payment options and are working to accept various insurance providers in the future.
          </p>
        </details>
      </div>
    </div>
  );
};

export default FQAs;