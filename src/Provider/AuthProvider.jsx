import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import auth from "../firebase/firebase.init";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export const AuthContex = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // firebase auth for observing user from firebase
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (cuurrentUser) => {
      setUser(cuurrentUser);
      setLoading(false);
    });
    return () => unSubscribe();
  }, []);

  const authInfo = { user, createUser, logInUser, logOut, loading };

  return <AuthContex.Provider value={authInfo}>{children}</AuthContex.Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
