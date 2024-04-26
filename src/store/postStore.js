import { create } from "zustand";

const usePostStore = create((set) => ({
  posts: [],
  createPost: (post) => set((state) => ({ posts: [post, ...state.posts] })),
  deletePost: (id) =>
    set((state) => ({ posts: state.posts.filter((post) => post.id !== id) })),
  setPosts: (posts) => set({ posts }),
  // addComment: (postId, comment) =>
  //   set((state) => ({
  //     posts: state.posts.map((post) =>
  //       post.id === postId
  //         ? { ...post, comments: [...post.comment, comment] }
  //         : post
  //     ),
  //   })),
  addComment: (postId, newComment) =>
    set((state) => ({
      posts: state.posts.map((post) =>
        post.id === postId
          ? { ...post, comments: [...post.comments, newComment] }
          : post
      ),
    })),
}));

export default usePostStore;
