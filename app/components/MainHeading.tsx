import { ReactNode } from "react";

interface MainHeadingProps {
  children: ReactNode;
}

export default function MainHeading({ children }: MainHeadingProps) {
  return (
    <>
      <h1 className="text-4xl p-2 py-1 mb-3 text-center bg-primary">{children}</h1>
    </>
  );
}
