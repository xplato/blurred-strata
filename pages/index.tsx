import Link from "next/link";
import WithPageTransition from "~/components/root/WithPageTransition";

export default function Home() {
  return (
    <WithPageTransition>
      <section className="w-full h-screen flex items-center justify-center flex-col gap-8">
        <h1 className="text-9xl font-medium tracking-tight">NextJS Designer</h1>
        <Link href="/about">About</Link>
      </section>
    </WithPageTransition>
  );
}
