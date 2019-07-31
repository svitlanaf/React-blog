import { firestore } from "../../firebase/firebase.utils";
import { loadPosts } from "./postService";

export function loadAllBlogs() {
  return new Promise((resolve, reject) => {
    firestore
      .collection("blogs")
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

export function loadBlog(id) {
  return new Promise((resolve, reject) => {
    firestore
      .collection("blogs")
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

export function saveNewBlog(blog) {
  return new Promise((resolve, reject) => {
    firestore
      .collection("blogs")
      .add(blog)
      .then(function(snapshot) {
        resolve(snapshot.docs);
      })
      .catch(function(error) {
        console.log(error);
        reject(error);
      });
  });
}

export function deleteBlog(blogId) {
  return new Promise((resolve, reject) => {
    firestore
      .collection("blogs")
      .doc(blogId)
      .delete()
      .then(() => {
        resolve();
        return loadPosts(blogId).then(posts => {
          posts.forEach(element => {
            element.ref.delete();
          });
        });
      })
      .catch(error => {
        reject(error);
      });
  });
}
