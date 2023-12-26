"use client";

import { useRouter } from "next/navigation";

export default function Page4Template() {
  const router = useRouter();
  return (
    <button type="button" onClick={() => router.push("/page2/page4")}>
      page4
    </button>
  );
}
