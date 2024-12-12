import { ReactNode } from "react";

interface SubtitleProps {
  children: ReactNode;
}

export default function Subtitle({ children }: SubtitleProps) {
  return (
    <>
      <p className="m-3 text-m/6 ">{children}</p>
    </>
  );
}