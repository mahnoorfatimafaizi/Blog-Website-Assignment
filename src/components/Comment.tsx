"use client";

import { useState, useEffect } from "react";

const Comment = () => {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState<string[]>([]);

  useEffect(() => {
    const storedComments = localStorage.getItem("comments");
    if (storedComments) {
      setComments(JSON.parse(storedComments));
    }
  }, []);

  const handleCommentSubmit = () => {
    if (comment.trim()) {
      const newComments = [...comments, comment];

      localStorage.setItem("comments", JSON.stringify(newComments));

      setComments(newComments);
      setComment("");
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Comments</h2>
      <div className="mb-4">
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Add your comment..."
          className="w-full p-2 border border-gray-300 rounded"
        ></textarea>
        <button
          onClick={handleCommentSubmit}
          className="bg-gray-200 text-indigo-900 px-6 py-3 mt-5 font-medium rounded-md hover:bg-gray-300"
        >
          Submit Comment
        </button>
      </div>

      <div className="mt-4">
        {comments.length === 0 ? (
          <p>No comments yet.</p>
        ) : (
          <ul className="space-y-2">
            {comments.map((comment, index) => (
              <li key={index} className="p-2 border-b">
                {comment}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Comment;
