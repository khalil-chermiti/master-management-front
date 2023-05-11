import React from "react";
import { USER_TYPE } from "../types/types";
import Signin from "../components/SigninComponent";

interface ISignin {
  USER_TYPE: USER_TYPE;
}

const SigninPage: React.FC<ISignin> = ({ USER_TYPE }) => (
  <section style={{ marginTop: "100px" }}>
    <Signin USER_TYPE={USER_TYPE} />
  </section>
);

export default SigninPage;
