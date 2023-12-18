"use client";

import Link from "next/link";
import React from "react";
import { useSession } from "next-auth/react";

const AddButton = () => {
  const { data: session, status } = useSession();

  return (
    session?.user.isAdmin && (
      <button>
        <Link href="/add">ADD PRODUCT</Link>
      </button>
    )
  );
};

export default AddButton;
