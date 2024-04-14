import Container from "@/components/Container";
import Link from "next/link";
import React from "react";

const Notfound = () => {
  return (
    <section className="grow flex items-center justify-center">
      <Container>
        {" "}
        <div className="w-full flex flex-col gap-4 text-center">
          <h1 className="font-redHat lg:text-[140px] font-medium text-5xl text-Grey-300">
            404
          </h1>
          <p className="text-xl max-w-md">
            <span className="text-Grey-300">Oops!</span> we are sorry, but the
            page you requested was not found.
          </p>
          <div className="py-5">
            <Link href={'/'} className="bg-Grey-700 inline-flex items-center justify-center text-white px-5 py-2 transform duration-300 hover:bg-black">Go Home</Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Notfound;
