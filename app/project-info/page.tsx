"use client";
import React from "react";

function page() {
  const linkedInUrl = process.env.LINKEDIN_PROFILE;

  const openLinkedInProfile = () => {
    window.open(linkedInUrl);
  };

  const redirectToLinkedInProfile = () => {
    window.location.href = linkedInUrl;
  };

  return (
    <div className="flex flex-col gap-6 mx-8">
      <div>
        <h2>About</h2>
        <p>
          Welcome to our taxi project! This platform is a reflection of my
          skills and passion, allowing users to seamlessly book taxis, rent
          cars, and vans for their transportation needs.
        </p>
        <p>
          It's important to note that my taxi search feature is currently
          limited to places within the United States due to API restrictions.
        </p>
      </div>

      {/* How it works */}
      <div>
        <h3>How it Works</h3>
        <p>Discovering the convenience of my platform is easy:</p>
        <p>
          1. <strong>Search:</strong> Use search functionality to find taxis,
          rental cars, or vans for your specific needs.
        </p>
        <p>
          2. <strong>Rent:</strong> Easily rent vehicles with just a few clicks,
          ensuring a smooth and hassle-free experience.
        </p>
        <p>
          3. <strong>Review:</strong> Share your thoughts and experiences by
          leaving reviews, helping us improve and assist future users.
        </p>
      </div>

      {/* Partnership */}
      <div>
        <h3>Partnership</h3>
        <p>
          I believe in fostering strong partnerships to enhance my services. my
          collaborations include working with leading APIs, Google, and other
          innovative technologies.
        </p>
        <p>
          My partnership approach is not just business, it's an opportunity to
          create something extraordinary.
        </p>
      </div>

      <div>
        <h3>Company </h3>
        <p>
          - <strong>Events:</strong> Check out my LinkedIn for the latest events
          and updates. Expect some behind-the-scenes fun!
        </p>
        <p>
          - <strong>Invite a friend:</strong> Spread the word about this
          project! Refer a friend and let them experience the joy of seamless
          transportation services.
        </p>
      </div>
      <div>
        <p>My LinkedIn Profile: </p>
        {/* <button onClick={openLinkedInProfile}>Visit my LinkedIn</button> */}
        {/* <a href={linkedInUrl} target="_blank" rel="noopener noreferrer">
          Visit my LinkedIn profile
        </a> */}
        <button onClick={redirectToLinkedInProfile}>
          Visit my LinkedIn profile
        </button>
      </div>
    </div>
  );
}

export default page;
