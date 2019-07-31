import { firestore } from "../../firebase/firebase.utils";

export function loadComments(postId) {
  return new Promise((resolve, reject) => {
    firestore
      .collection("comments")
      .where("postId", "==", postId)
      .get()
      .then(function(snapshot) {
        resolve(snapshot.docs);
      })
      .catch(function(error) {
        console.log(error);
        reject(error);
      });
  });
}

export function loadComment(id) {
  return new Promise((resolve, reject) => {
    firestore
      .collection("comments")
      .doc(id)
      .get()
      .then(function(docRef) {
        resolve(docRef);
      })
      .catch(function(error) {
        console.log(error);
        reject(error);
      });
  });
}

export function saveNewComment(comment) {
  return new Promise((resolve, reject) => {
    firestore
      .collection("comments")
      .add(comment)
      .then(function(snapshot) {
        resolve(snapshot.docs);
      })
      .catch(function(error) {
        console.log(error);
        reject(error);
      });
  });
}

export function deleteComment(commentId) {
  return firestore
    .collection("comments")
    .doc(commentId)
    .delete();
}
