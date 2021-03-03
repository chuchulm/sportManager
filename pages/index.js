import React, { Component } from "react";
import Router from "next/router";
import 'antd/dist/antd.css'

export default function Index() {
  React.useEffect(() => {
    Router.push("/admin/dashboard");
  });

  return <div />;
}
