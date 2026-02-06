import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="container flex items-center justify-center py-16">
      <SignUp
        appearance={{
          elements: {
            rootBox: "mx-auto",
            card: "shadow-lg",
          },
        }}
      />
    </div>
  );
}

