import { ReactNode } from "react";

interface SubtitleProps {
  children: ReactNode;
}

export default function Subtitle({ children }: SubtitleProps) {
  return (
    <>
      <p className="m-3 italic text-lg ">{children}</p>
    </>
  );
}