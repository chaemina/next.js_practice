import Link from "next/link";
import Btn from "@/components/atoms/button";
import Page4Template from "@/components/templates/page4template";

export const metadata = {
  title: "PAGE1",
};

export default function Page() {
  return (
    <>
      <div>
        <Link href="/page2" replace={true} scroll={false}>
          Page2
        </Link>
      </div>
      <div>
        <Link href="/page2/page3" passHref legacyBehavior>
          <Btn />
        </Link>
      </div>
      <div>
        <Page4Template />
      </div>
      <h1>Hello,page1!</h1>
    </>
  );
}
