import { createSlice } from "@reduxjs/toolkit";
const initialState = [
  {
    id: 1,
    stars: 5,
    userImage: "/images/Reviews/user-1.png",
    userName: "Alice Johnson",
    datePosted: "2024-07-01",
    postContent:
      "Loving the new features in the app! It's so intuitive and easy to use.",
  },
  {
    id: 2,
    stars: 4,
    userImage: "/images/Reviews/user-1.png",
    userName: "Bob Smith",
    datePosted: "2024-06-28",
    postContent:
      "Great app, but I wish there were more customization options available.",
  },
  {
    id: 3,
    stars: 3,
    userImage: "/images/Reviews/user-1.png",
    userName: "Carol Lee",
    datePosted: "2024-07-02",
    postContent: "It's okay, but I encountered a few bugs that need fixing.",
  },
  {
    id: 4,
    stars: 5,
    userImage: "/images/Reviews/user-1.png",
    userName: "David Kim",
    datePosted: "2024-06-30",
    postContent:
      "Fantastic app! The user interface is sleek and performance is top-notch.",
  },
  {
    id: 5,
    stars: 4,
    userImage: "/images/Reviews/user-1.png",
    userName: "Emily Davis",
    datePosted: "2024-07-03",
    postContent:
      "Very useful app for daily tasks. A few improvements could make it perfect.",
  },
  {
    id: 6,
    stars: 2,
    userImage: "/images/Reviews/user-1.png",
    userName: "Frank Harris",
    datePosted: "2024-06-29",
    postContent:
      "I found it difficult to navigate. Needs better instructions for new users.",
  },
  {
    id: 7,
    stars: 5,
    userImage: "/images/Reviews/user-1.png",
    userName: "Grace Wilson",
    datePosted: "2024-07-04",
    postContent: "Absolutely love it! The recent update made it even better.",
  },
  {
    id: 8,
    stars: 3,
    userImage: "/images/Reviews/user-1.png",
    userName: "Henry Brown",
    datePosted: "2024-06-27",
    postContent:
      "Decent app, but I've had some issues with syncing data between devices.",
  },
  {
    id: 9,
    stars: 4,
    userImage: "/images/Reviews/user-1.png",
    userName: "Isabella Martinez",
    datePosted: "2024-07-01",
    postContent:
      "Really like the app, but it can be slow at times. Hope this gets fixed soon.",
  },
  {
    id: 10,
    stars: 5,
    userImage: "/images/Reviews/user-1.png",
    userName: "Jack Miller",
    datePosted: "2024-07-05",
    postContent: "Best app I've used in a while. Highly recommend to everyone!",
  },
];
const reviewsSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {
    getReviews: (state) => {
      return state.reviews;
    },
  },
});

export const { getReviews } = reviewsSlice.actions;
export const selectAllReviews = (state) => state.reviews;
export default reviewsSlice.reducer;
