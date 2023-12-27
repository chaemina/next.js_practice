import { Suspense } from "react";

export const metadata = {
  title: "PAGE4",
};

export default function Page4() {
  return (
    <Suspense fallback={<p>loading ...</p>}>
      <h1>Hello, Page4!</h1>
    </Suspense>
  );
}
