export const comments = [
  {
    id: "1",
    postId: "1",
    userId: "1",
    content: "Lorem ipsum dolor sit amet."
  },
  {
    id: "2",
    postId: "1",
    userId: "2",
    content: "Lorem ipsum dolor sit amet."
  },
  {
    id: "3",
    postId: "2",
    userId: "3",
    content: "Lorem ipsum dolor sit amet."
  },
  {
    id: "4",
    postId: "2",
    userId: "4",
    content: "Lorem ipsum dolor sit amet."
  },
  {
    id: "5",
    postId: "5",
    userId: "5",
    content: "Lorem ipsum dolor sit amet."
  },
  {
    id: "6",
    postId: "5",
    userId: "6",
    content: "Lorem ipsum dolor sit amet."
  },
  {
    id: "7",
    postId: "3",
    userId: "7",
    content: "Lorem ipsum dolor sit amet."
  },
  {
    id: "8",
    postId: "3",
    userId: "8",
    content: "Lorem ipsum dolor sit amet."
  },
  {
    id: "9",
    postId: "4",
    userId: "9",
    content: "Lorem ipsum dolor sit amet."
  },
  {
    id: "10",
    postId: "4",
    userId: "10",
    content: "Lorem ipsum dolor sit amet."
  }
];

export function getComments(postId) {
  return comments.filter(comment => comment.postId === postId);
}

export function getComment(commentId) {
  return comments.find(c => c.id === commentId);
}

export function saveComment(comment) {
  let commentInDb = comments.find(c => c.id === comment.id) || {};
  commentInDb.userId = comment.userId;
  commentInDb.content = comment.content;
  if (!commentInDb.id) {
    commentInDb.id = Date.now().toString();
    comments.push(commentInDb);
  }

  return commentInDb;
}

export function deleteComment(id) {
  let commentInDb = comments.find(c => c.id === id);
  [comments].splice(comments.indexOf(commentInDb), 1);
  return commentInDb;
}
