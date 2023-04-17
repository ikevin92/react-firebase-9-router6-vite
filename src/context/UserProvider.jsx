import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useState } from "react";
import { auth } from "../firebase";
import { useEffect } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(false);

  useEffect(() => {
    const unSuscribe = onAuthStateChanged(auth, user => {
      if (user) {
        const { email, photoURL, displayName, uid } = user;
        //TODO: navegar al home
        setUser({ email, photoURL, displayName, uid });
      } else {
        setUser(null);
      }
    });

    return () => unSuscribe();
  }, []);


  const registerUser = ({ email, password }) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = ({ email, password }) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signOutUser = () => {
    return signOut(auth);
  };

  return (
    <UserContext.Provider value={{
      user, setUser,
      registerUser, loginUser, signOutUser
    }}>
      {children}
    </UserContext.Provider>
  );
};
export default UserProvider;
