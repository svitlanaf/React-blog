import { firestore } from "../../firebase/firebase.utils";

export const blogs = [
  {
    id: "1",
    userId: "1",
    title: "C# IS AWESOME",
    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    aboutBlog:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis tincidunt lectus, ac consectetur dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque ultrices mi in ex tempor volutpat. Nulla elementum libero tortor, quis auctor orci euismod a. Nulla mollis et eros id blandit. Nunc vitae urna interdum diam pretium maximus. Pellentesque eget sodales urna.",
    inLink: "#",
    ghLink: "#",
    avatar: "http://hddfhm.com/images/free-black-cat-clipart-13.jpg"
  },
  {
    id: "2",
    userId: "5",
    title: "My Programmer Journey",
    about:
      "Praesent consequat orci ut dui semper, ut fringilla diam tincidunt.",
    aboutBlog:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis tincidunt lectus, ac consectetur dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque ultrices mi in ex tempor volutpat. Nulla elementum libero tortor, quis auctor orci euismod a. Nulla mollis et eros id blandit. Nunc vitae urna interdum diam pretium maximus. Pellentesque eget sodales urna.",
    inLink: "#",
    ghLink: "#",
    avatar:
      "https://images.designtrends.com/wp-content/uploads/2016/03/05114403/Laughing-Cat-Clipart.jpg"
  },
  {
    id: "3",
    userId: "6",
    title: "How To Become A Professional Dev",
    about:
      "Nullam posuere lorem quam. Donec est purus, feugiat vel porta in, luctus non lectus.",
    aboutBlog:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis tincidunt lectus, ac consectetur dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque ultrices mi in ex tempor volutpat. Nulla elementum libero tortor, quis auctor orci euismod a. Nulla mollis et eros id blandit. Nunc vitae urna interdum diam pretium maximus. Pellentesque eget sodales urna.",
    inLink: "#",
    ghLink: "#",
    avatar: "https://ae01.alicdn.com/kf/HTB117BWRpXXXXc5XFXXq6xXFXXXx.jpg"
  }
];

export function getBlogs() {
  return blogs;
}

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

export function getBlog(blogId) {
  return blogs.find(b => b.id === blogId);
}

export function saveBlog(blog) {
  let blogInDb = blogs.find(b => b.id === blog.id) || {};
  blogInDb.title = blog.title;
  blogInDb.userId = blog.userId;
  blogInDb.about = blog.about;
  blogInDb.aboutBlog = blog.aboutBlog;
  blogInDb.inLink = blog.inLink;
  blogInDb.ghLink = blog.ghLink;

  if (!blogInDb.id) {
    blogInDb.id = Date.now().toString();
    blogs.push(blogInDb);
  }

  return blogInDb;
}

export function deleteBlog(id) {
  let blogInDb = blogs.find(b => b.id === id);
  blogs.splice(blogs.indexOf(blogInDb), 1);
  return blogInDb;
}
