import Link from "next/link";

export default function F2() {
  return (
    <>
      <h1>F1 Page</h1>
      <div>
        <Link href={"/f1/f2"}>F2 Page</Link>
      </div>
    </>
  );
}
