import { Suspense } from "react";

export const metadata = {
  title: "Segment1",
};

export default function Segment1() {
  return (
    <>
      <Suspense fallback={<p>loading ...</p>}>
        <h1>Hello, Segment1!</h1>
      </Suspense>
    </>
  );
}
