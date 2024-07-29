"use client";
import Checkout from "@/src/components/checkout/Checkout";
import { createContext, Dispatch, SetStateAction, useState } from "react";
import { IFormData } from "../../interfaces";
const defaultCtxValue: IFormData = {
  id: 0,
  phoneA: "",
  phoneB: "",
  pin: 0,
  date: "",
  holder: "",
};

interface ISetCtx {
  setFormData: Dispatch<SetStateAction<IFormData>>;
}

interface IValueCtx {
  formData: IFormData;
}
export const SetCtx = createContext<ISetCtx>({
  setFormData: () => {},
});

export const ValueCtx = createContext<IValueCtx>({
  formData: defaultCtxValue,
});

export default function Home() {
  const [formData, setFormData] = useState(defaultCtxValue);
  return (
    <main>
      <SetCtx.Provider value={{ setFormData }}>
        <ValueCtx.Provider value={{ formData }}>
          <Checkout />
        </ValueCtx.Provider>
      </SetCtx.Provider>
    </main>
  );
}
