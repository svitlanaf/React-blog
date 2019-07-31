import { firestore } from "../../firebase/firebase.utils";

export function loadPosts(blogId) {
  return new Promise((resolve, reject) => {
    firestore
      .collection("posts")
      .where("blogId", "==", blogId)
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

export function loadPost(id) {
  return new Promise((resolve, reject) => {
    firestore
      .collection("posts")
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

export function saveNewPost(post) {
  return new Promise((resolve, reject) => {
    firestore
      .collection("posts")
      .add(post)
      .then(function(snapshot) {
        resolve(snapshot.docs);
      })
      .catch(function(error) {
        console.log(error);
        reject(error);
      });
  });
}

export function savePost(postId, post) {
  if (postId) {
    return new Promise((resolve, reject) => {
      firestore
        .collection("posts")
        .doc(postId)
        .set(post)
        .then(function(docRef) {
          resolve(docRef);
        })
        .catch(function(error) {
          console.log(error);
          reject(error);
        });
    });
  } else {
    return saveNewPost(post);
  }
}

export function deletePost(postId) {
  return firestore
    .collection("posts")
    .doc(postId)
    .delete();
}
