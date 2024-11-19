import { ReactNode } from "react";

interface SubHeadingProps {
  children: ReactNode;
}

export default function SubHeading({ children }: SubHeadingProps) {
  return (
    <>
      <h2 className="text-2xl p-1 m-3">{children}</h2>
    </>
  );
}
