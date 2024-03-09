"use client";
import React, { useState, useEffect } from "react";
import { db } from "@/app/firebaseConfig";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  deleteDoc,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import Swal from "sweetalert2";

function displayDate(firebaseDate: any) {
  if (!firebaseDate || !firebaseDate.toDate || !firebaseDate.toDate()) {
    return "Date processing";
  }

  const date = firebaseDate.toDate();

  const day = date.getDate();
  const year = date.getFullYear();

  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const month = monthNames[date.getMonth()];

  let hours = date.getHours();
  let minutes = date.getMinutes();
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;

  return `${day} ${month} ${year} - ${hours}:${minutes}`;
}

async function addDataToFirestore(text: string): Promise<boolean> {
  try {
    const docRef = await addDoc(collection(db, "reviews"), {
      text: text,
    });
    console.log("document written with id:", docRef.id);
    return true;
  } catch (error) {
    console.error("Error adding document", error);
    return false;
  }
}

// async function fetchReviewsFromFirestore(): Promise<any[]> {
//   const querySnapshot = await getDocs(collection(db, "reviews"));
//   const reviews = [];
//   querySnapshot.forEach((doc) => {
//     reviews.push({ id: doc.id, ...doc.data() });
//   });
//   return reviews;
// }
async function fetchReviewsFromFirestore(): Promise<any[]> {
  const querySnapshot = await getDocs(collection(db, "reviews"));
  const reviews: any = [];

  querySnapshot.forEach((doc) => {
    const reviewData = doc.data();
    reviews.push({
      id: doc.id,
      ...reviewData,
      formattedDate: displayDate(reviewData.timestamp), // Change 'timestamp' to the actual date field
    });
  });

  // Sort the reviews by formattedDate in descending order
  reviews.sort((a: any, b: any) =>
    b.formattedDate.localeCompare(a.formattedDate)
  );

  return reviews;
}

async function deleteReviewFromFirestore(reviewId: string): Promise<void> {
  await deleteDoc(doc(db, "reviews", reviewId));
}

function Reviews() {
  const [text, setText] = useState<string>("");
  const [reviews, setReviews] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loading) {
      return;
    }

    setLoading(true);

    try {
      if (text.trim() === "") {
        Swal.fire({
          title: "Error",
          text: "Please fill the form",
          icon: "error",
        });
        return;
      }

      const added = await addDataToFirestore(text);
      if (added) {
        setText("");
        handleFetchReviews();
      }
    } finally {
      setLoading(false);
    }
  };

  const handleFetchReviews = async () => {
    const fetchedReviews = await fetchReviewsFromFirestore();
    setReviews(fetchedReviews);
  };

  const handleDeleteReview = async (reviewId: string) => {
    await deleteReviewFromFirestore(reviewId);
    // Fetch reviews after deletion
    handleFetchReviews();
  };

  useEffect(() => {
    // Fetch reviews when the component mounts
    handleFetchReviews();
  }, [text]);

  return (
    <div className="container mx-auto p-8 dark:bg-gray-900 dark:text-white shadow-xl w-full xl:w-2/3 2xl:w-1/2 ">
      <h2 className="text-3xl font-bold mb-6 text-black dark:text-blue-200">
        Customer Reviews
      </h2>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 mb-8 dark:border-gray-700"
      >
        <textarea
          placeholder="Type your review here"
          className="flex-grow text-gray-600 p-3 rounded-md dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 focus:border-blue-500 focus:ring-blue-500 border-2"
          rows={5}
          id="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          type="submit"
          disabled={loading}
          className=" bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-blue-200 dark:bg-blue-400 dark:hover:bg-blue-500 dark:focus:ring-blue-300"
        >
          {loading ? "Posting..." : "Post Review"}
        </button>
      </form>

      {reviews.length > 0 && (
        <div className="reviews-list dark:border-gray-700">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="review-item border border-gray-300 p-4 rounded-md shadow-md mb-6 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700"
            >
              <p className="text-gray-600">{review.formattedDate}</p>
              <p className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">
                {review.text}
              </p>
              <span
                className="text-red-500 cursor-pointer hover:underline dark:text-red-400"
                onClick={() => handleDeleteReview(review.id)}
              >
                Delete Review
              </span>
            </div>
          ))}
        </div>
      )}

      {reviews.length === 0 && (
        <p className="text-center text-gray-600 dark:text-gray-300">
          No reviews yet, be the first one!
        </p>
      )}
    </div>
  );
}

export default Reviews;
