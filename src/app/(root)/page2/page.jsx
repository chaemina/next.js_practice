import { Suspense } from "react";

export const metadata = {
  title: "PAGE2",
};

export default function Page2() {
  // throw error;

  return (
    <>
      <Suspense fallback={<p>loading ...</p>}>
        <h1>Hello, Page2!</h1>
      </Suspense>
    </>
  );
}
