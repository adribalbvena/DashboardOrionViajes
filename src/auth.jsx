import { createContext, useState } from "react";

const AuthContext = createContext(null);

import React from 'react'

export const AuthProvider = () => {
  const [user, setUser] = useState(null);

  const login = (user) => {
    setUser
  }
}
