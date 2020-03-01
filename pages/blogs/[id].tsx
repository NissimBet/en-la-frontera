import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default () => {
  const router = useRouter();
  return (
    <div>
      <h1>{router.query.id}</h1>
    </div>
  );
};
