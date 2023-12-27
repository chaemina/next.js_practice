import Link from "next/link";
import Btn from "@/components/atoms/button";
import Page4Template from "@/components/templates/page4template";

export const metadata = {
  title: "PAGE1",
};

export default function Page() {
  return (
    <>
      <section>
        <div>
          <Link href="/page2" replace={true} scroll={false}>
            Page2
          </Link>
          <Link href="/page2/page3" passHref legacyBehavior>
            <Btn />
          </Link>
          <Page4Template />
        </div>
        <h1>Hello,Home </h1>
      </section>
    </>
  );
}
