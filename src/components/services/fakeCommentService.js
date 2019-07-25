export const comments = [
    {
      id: "1",
      blogId: "1",
      postId: '1',
      content:
        "Lorem ipsum dolor sit amet."
    },
    {
      id: "2",
      blogId: "1",
      postId: '1',
      content:
        "Lorem ipsum dolor sit amet."
    },
    {
      id: "3",
      blogId: "2",
      postId: '2',
      content:
        "Lorem ipsum dolor sit amet."
    },
    {
      id: "4",
      blogId: "2",
      postId: '2',
      content:
        "Lorem ipsum dolor sit amet."
    },
    {
      id: "5",
      blogId: "2",
      postId: '5',
      content:
        "Lorem ipsum dolor sit amet."
    },
    {
      id: "6",
      blogId: "2",
      postId: '5',
      content:
        "Lorem ipsum dolor sit amet."
    },
    {
      id: "7",
      blogId: "3",
      postId: '3',
      content:
        "Lorem ipsum dolor sit amet."
    },
    {
      id: "8",
      blogId: "3",
      postId: '3',
      content:
        "Lorem ipsum dolor sit amet."
    },
    {
      id: "9",
      blogId: "3",
      postId: '4',
      content:
        "Lorem ipsum dolor sit amet."
    },
    {
      id: "10",
      blogId: "3",
      postId: '4',
      content:
        "Lorem ipsum dolor sit amet."
    }
]

export function getComments(postId) {
  return comments.filter(comment => comment.postId === postId);
}

export function getComment(commentId) {
  return comments.find(c => c.id === commentId);
}

export function saveComment(comment) {
  let commentInDb = comments.find(c => c.id === comment.id) || {};
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
