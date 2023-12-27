import { Suspense } from "react";

export const metadata = {
  title: "PAGE8",
};

export default function Page2() {
  return (
    <>
      <Suspense fallback={<p>loading ...</p>}>
        <h1>Hello, Page8!</h1>
      </Suspense>
    </>
  );
}
