import NotFound from "@/components/ui/not-found";
export default function NotFoundPage() {
  return (
    <div>
      <NotFound
        particleCount={10000}
        particleSize={5}
        animate={true}
        buttonText="Go Back"
        buttonHref="/"
      />
    </div>
  );
}
