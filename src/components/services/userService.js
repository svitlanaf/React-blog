import { firestore } from "../../firebase/firebase.utils";

export function loadUser(id) {
  return new Promise((resolve, reject) => {
    firestore
      .collection("users")
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
