import { firestore } from "../../firebase/firebase.utils";

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

// export function deleteBlog(id) {
//   let blogInDb = blogs.find(b => b.id === id);
//   blogs.splice(blogs.indexOf(blogInDb), 1);
//   return blogInDb;
// }
