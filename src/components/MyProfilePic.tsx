import Image from "next/image";
import React from "react";

function MyProfilePic() {
  return (
    <section className="mx-auto w-full">
      <Image
        src="/images/zakaria.jpeg"
        alt="Picture of the author"
        width={200}
        height={200}
        priority
        className="mx-auto mt-8 rounded-full border-4 border-black shadow-black drop-shadow-xl dark:border-slate-500"
      />
    </section>
  );
}

export default MyProfilePic;
