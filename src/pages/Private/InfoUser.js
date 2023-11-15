import React, { useEffect, useState } from "react";
import { Space, AutoComplete, Select } from "antd";
import { db } from "../../FireBase/FireBaseConfig";
import { collection, doc, getDoc } from "firebase/firestore";
import { Outlet, useParams } from "react-router-dom";
import user from "../public/Login";
import { getAuth } from "firebase/auth";

const InfoUser = () => {
  const [infomation, setInformation] = useState([]);

  const params = useParams();
//   console.log(params);
  useEffect(() => {
    (async () => {
      const auth = getAuth();
      const user = auth.currentUser;
      console.log(user);
    })();
  }, []);

  return (
    <div style={{ marginTop: "100px", marginLeft: "50px" }}>
      <h1 style={{ color: "white" }}>Fetch Data</h1>
      <h3 style={{ color: "white" }}>{user?.email}</h3>
      <h3 style={{ color: "white" }}>{user?.uid}</h3>
    </div>
  );
};

export default InfoUser;
