import React from "react";
import { useState } from "react";
import Loader from "../Loader/loader";

export default function useLoader() {
  const [loading, setLoading] = useState(false);
  return [
    loading ? <Loader /> : null,
    () => setLoading(true),
    () => setLoading(false),
  ];
}
