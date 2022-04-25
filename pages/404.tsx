import React from "react";
import Image from "next/image";
import Link from "next/link";
const ErrorPage = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h2 style={{ color: "white", margin: "10px" }}>Такой страницы нет ;(</h2>
      <Image width={400} height={350} src={"/error.jpg"} />
      <Link href={"/"}>
        <a
          style={{
            color: "white",
            margin: "10px",
            fontSize: "20px",
            textDecoration: "underline",
          }}
        >
          {" "}
          На главную
        </a>
      </Link>
    </div>
  );
};

export default ErrorPage;
