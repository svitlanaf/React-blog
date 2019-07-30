import { firestore } from "../../firebase/firebase.utils";

export const posts = [
  {
    id: "1",
    blogId: "1",
    title: "Pro C# tips",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis tincidunt lectus, ac consectetur dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque ultrices mi in ex tempor volutpat. Nulla elementum libero tortor, quis auctor orci euismod a. Nulla mollis et eros id blandit. Nunc vitae urna interdum diam pretium maximus. Pellentesque eget sodales urna."
  },
  {
    id: "2",
    blogId: "2",
    title: "My React experience",
    content:
      "Praesent consequat orci ut dui semper, ut fringilla diam tincidunt. Aliquam accumsan consectetur ultrices. Integer dapibus dui ac pulvinar malesuada. Praesent id sem maximus, sagittis arcu eget, pulvinar ligula. Quisque tempor porttitor urna id tempor. Nunc dolor sem, tempus et felis id, mollis venenatis mauris. Sed auctor est pulvinar neque hendrerit, ut scelerisque justo tincidunt. Sed sit amet neque eu mauris sollicitudin tempus in sit amet quam. Etiam iaculis pulvinar enim. Nulla porta egestas lectus sed mattis."
  },
  {
    id: "3",
    blogId: "3",
    title: "Devs are cool",
    content:
      "Nullam posuere lorem quam. Donec est purus, feugiat vel porta in, luctus non lectus. Aliquam erat volutpat. Vestibulum purus lorem, efficitur ut sem nec, viverra imperdiet lectus. Nunc sit amet nunc vitae tellus ornare pharetra. Maecenas accumsan nisi id posuere gravida. Mauris tristique ullamcorper luctus. Quisque vitae elit auctor, bibendum leo sed, scelerisque erat. In hac habitasse platea dictumst. Suspendisse porta tincidunt dolor non congue."
  },
  {
    id: "4",
    blogId: "3",
    title: "Let's talk about PHP basics",
    content:
      "Nullam posuere lorem quam. Donec est purus, feugiat vel porta in, luctus non lectus. Aliquam erat volutpat. Vestibulum purus lorem, efficitur ut sem nec, viverra imperdiet lectus. Nunc sit amet nunc vitae tellus ornare pharetra. Maecenas accumsan nisi id posuere gravida. Mauris tristique ullamcorper luctus. Quisque vitae elit auctor, bibendum leo sed, scelerisque erat. In hac habitasse platea dictumst. Suspendisse porta tincidunt dolor non congue."
  },
  {
    id: "5",
    blogId: "2",
    title: "Blond devs are real: true/false?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis tincidunt lectus, ac consectetur dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque ultrices mi in ex tempor volutpat. Nulla elementum libero tortor, quis auctor orci euismod a. Nulla mollis et eros id blandit. Nunc vitae urna interdum diam pretium maximus. Pellentesque eget sodales urna."
  }
];

export function getPosts(blogId) {
  return posts.filter(post => post.blogId === blogId);
}

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

export function getPost(postId) {
  return posts.find(p => p.id === postId);
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

export function deletePost(id) {
  let postInDb = posts.find(p => p.id === id);
  [posts].splice(posts.indexOf(postInDb), 1);
  return postInDb;
}
