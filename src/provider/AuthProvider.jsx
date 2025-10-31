import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.config";

const auth = getAuth(app);

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    return signOut(auth);
  };

  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      //   console.log("Current User:", currentUser);
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const AuthData = {
    user,
    setUser,
    createUser,
    logOut,
    signInUser,
  };

  return (
    <AuthContext.Provider value={AuthData}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
