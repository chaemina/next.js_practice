import { Suspense } from "react";

export const metadata = {
  title: "Another Root",
};

export default function Page5() {
  return (
    <Suspense fallback={<p>loading ...</p>}>
      <h1>Hello, page5!</h1>
    </Suspense>
  );
}
