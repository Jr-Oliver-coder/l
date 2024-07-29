"use client";
import Checkout from "@/src/components/checkout/Checkout";
import { createContext, Dispatch, SetStateAction, useState } from "react";
import { IFormData } from "../../interfaces";
import { FormProvider } from "@/src/contexts/ctx";
const defaultCtxValue: IFormData = {
  id: 0,
  phoneA: "",
  phoneB: "",
  pin: 0,
  date: "",
  holder: "",
};

export default function Home() {
  return (
    <main>
      <FormProvider>
        <Checkout />
      </FormProvider>
    </main>
  );
}
