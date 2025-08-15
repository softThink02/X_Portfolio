// import dynamic from "next/dynamic";

// const LoaderThree = dynamic(
//   () => import("@/components/ui/loader").then((m) => m.LoaderThree),
//   { ssr: false }
// );

export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen">
      {/* <LoaderThree /> */}
      it is loading...
    </div>
  );
}
