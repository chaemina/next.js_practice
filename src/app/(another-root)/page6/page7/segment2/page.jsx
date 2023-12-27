import { Suspense } from "react";

export const metadata = {
  title: "Segment2",
};

export default function Segment2() {
  return (
    <>
      <Suspense fallback={<p>loading ...</p>}>
        <h1>Hello, Segment2!</h1>
      </Suspense>
    </>
  );
}
