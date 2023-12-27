import { Suspense } from "react";

export default function Second() {
  return (
    <>
      <Suspense fallback={<p>loading ...</p>}>
        <h1>Hello, Second!</h1>
      </Suspense>
    </>
  );
}
