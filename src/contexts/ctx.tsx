import {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
  ReactNode,
} from "react";
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

interface FormProviderProps {
  children: ReactNode;
}

export const FormProvider: React.FC<FormProviderProps> = ({ children }) => {
  const [formData, setFormData] = useState(defaultCtxValue);

  return (
    <SetCtx.Provider value={{ setFormData }}>
      <ValueCtx.Provider value={{ formData }}>{children}</ValueCtx.Provider>
    </SetCtx.Provider>
  );
};
