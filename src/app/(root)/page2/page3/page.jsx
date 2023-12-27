import { Suspense } from "react";

export const metadata = {
  title: "PAGE3",
};

export default function Page3() {
  return (
    <Suspense fallback={<p>loading ...</p>}>
      <h1>Hello, Page3!</h1>
    </Suspense>
  );
}
