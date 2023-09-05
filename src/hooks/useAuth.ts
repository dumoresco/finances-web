import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../redux/store";
import {
  LoginPayload,
  RegisterPayload,
  selectError,
  selectIsAuthenticated,
  selectIsFetching,
  selectToken,
  signIn,
  signUp,
} from "../redux/reducers/auth/auth.reducer";

export const useAuth = () => {
  const dispatch: AppDispatch = useDispatch();
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const isFetching = useSelector(selectIsFetching);
  const getToken = window.localStorage.getItem("token");

  const [payloadLogin, setPayloadLogin] = useState<LoginPayload>({
    email: "",
    password: "",
  });
  const [payloadRegister, setPayloadRegister] = useState<RegisterPayload>({
    name: "",
    email: "",
    password: "",
  });

  const handleLogin = () => {
    dispatch(signIn(payloadLogin)).then(response => console.log(response))
  };


  const handleRegister = () => {
    dispatch(signUp(payloadRegister));
  };


  return {
    payloadLogin,
    setPayloadLogin,

    payloadRegister,
    setPayloadRegister,
    handleLogin,
    handleRegister,

    isAuthenticated,
    isFetching,

    getToken
  };
};
