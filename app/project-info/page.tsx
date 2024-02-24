"use client";
import React from "react";

function page() {
  const linkedInUrl = process.env.LINKEDIN_PROFILE;

  const openLinkedInProfile = () => {
    window.open(linkedInUrl);
  };

  // const redirectToLinkedInProfile = () => {
  //   window.location.href = linkedInUrl;
  // };

  return (
    <div className="flex flex-col gap-6 2xl:mx-44 xl:mx-32 md:mx-16 mx-8">
      <main className="mt-16">
        {/* About section */}
        <section className="p-2 rounded-md bg-gray-100 mb-12 dark:bg-gray-800">
          <h2 className="text-2xl font-semibold mb-4 dark:text-gray-400">
            About
          </h2>
          <p className="mb-4 dark:text-gray-300">
            Welcome to my taxi project! This platform is a reflection of my
            skills and passion, allowing users to seamlessly book taxis, rent
            cars, and vans for their transportation needs.
          </p>
          <p className="mb-4 dark:text-gray-300">
            <strong className="text-blue-800 dark:text-pink-500">
              It's important to note
            </strong>
            <span> </span>
            that my taxi search feature is currently limited to places within
            the United States due to API restrictions.
          </p>
        </section>

        {/* How it Works section*/}
        <section className="p-2 rounded-md bg-gray-100 mb-12 dark:bg-gray-800">
          <h3 className="text-xl font-semibold mb-4 dark:text-gray-400">
            How it Works
          </h3>
          <p className="mb-4 dark:text-gray-300">
            Discovering the convenience of my platform is easy:
          </p>
          <ol className="list-decimal ml-8 dark:text-gray-300">
            <li className="mb-2">
              <strong>Search:</strong> Use search functionality to find taxis,
              rental cars, or vans for your specific needs.
            </li>
            <li className="mb-2">
              <strong>Rent:</strong> Easily rent vehicles with just a few
              clicks, ensuring a smooth and hassle-free experience.
            </li>
            <li className="mb-2">
              <strong>Review:</strong> Share your thoughts and experiences by
              leaving reviews, helping me improve and assist future users.
            </li>
          </ol>
        </section>

        {/* Partnership section with dark mode styles */}
        <section className="p-2 rounded-md bg-gray-100 mb-12 dark:bg-gray-800">
          <h3 className="text-xl font-semibold mb-4 dark:text-gray-400">
            Partnership
          </h3>
          <p className="mb-4 dark:text-gray-300">
            I believe in fostering strong partnerships to enhance my services.
            My collaborations include working with leading APIs, Google, and
            other innovative technologies.
          </p>
          <p className="mb-4 dark:text-gray-300">
            My partnership approach is not just business, it's an opportunity to
            create something extraordinary.
          </p>
        </section>

        {/* Company section with dark mode styles */}
        <section className="p-2 rounded-md bg-gray-100 mb-12 dark:bg-gray-800">
          <h3 className="text-xl font-semibold mb-4 dark:text-gray-400">
            Company
          </h3>
          <ul className="list-disc ml-8 dark:text-gray-300">
            <li className="mb-2">
              <strong>Events:</strong> Check out my LinkedIn for the latest
              events and updates. Expect some behind-the-scenes fun!
            </li>
            <li className="mb-2">
              <strong>Invite a friend:</strong> Spread the word about this
              project! Refer a friend and let them experience the joy of
              seamless transportation services.
            </li>
          </ul>
        </section>
      </main>
      <div className=" p-2 rounded-md bg-gray-100 dark:bg-gray-800">
        <p className="dark:text-gray-400 mb-4">My LinkedIn Profile: </p>

        {/* <button onClick={openLinkedInProfile}>Visit my LinkedIn</button> */}
        <a
          className="dark:text-gray-300 hover:underline hover:cursor-pointer"
          href={linkedInUrl}
          target="_blank"
        >
          Luka Tchanukvadze
        </a>

        {/* <button onClick={redirectToLinkedInProfile}>
          Visit my LinkedIn profile
        </button> */}
      </div>
    </div>
  );
}

export default page;
