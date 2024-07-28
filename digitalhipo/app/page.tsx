import MaxWidthWrapper from "@/src/components/MaxWidhtWrapper";
import Image from "next/image";

export default function Home() {
  return (
   <MaxWidthWrapper>
    <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl "></div>
   </MaxWidthWrapper>
  );
}
