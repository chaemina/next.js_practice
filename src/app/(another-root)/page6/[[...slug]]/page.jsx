"use client";

import {
  useRouter,
  usePathname,
  useSearchParams,
  useSelectedLayoutSegments,
  redirect,
  notFound,
} from "next/navigation";

export default function Page6({ params }) {
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("params");
  const pathname = usePathname();

  return (
    <>
      <p>{searchParams}</p>
      <p>{searchTerm}</p>
      <p>{pathname}</p>
      <div>My Post: {params.slug}</div>
    </>
  );
}
