import { Suspense } from "react";

export default function Thrid() {
  return (
    <>
      <Suspense fallback={<p>loading ...</p>}>
        <h1>Hello, Thrid!</h1>
      </Suspense>
    </>
  );
}
