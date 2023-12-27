import { Suspense } from "react";

export const metadata = {
  title: "page7",
};

export default function Page7() {
  return (
    <>
      <Suspense fallback={<p>loading ...</p>}>
        <h1>Hello, page7!</h1>
      </Suspense>
    </>
  );
}
