import * as React from "react";
import { useForm, Controller } from "react-hook-form";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import { Card as MuiCard } from "@mui/material";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import RadioGroup from "@mui/material/RadioGroup";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import AccountBalanceRoundedIcon from "@mui/icons-material/AccountBalanceRounded";
import CreditCardRoundedIcon from "@mui/icons-material/CreditCardRounded";
import SimCardRoundedIcon from "@mui/icons-material/SimCardRounded";
import WarningRoundedIcon from "@mui/icons-material/WarningRounded";
import { UseFormReturn } from "react-hook-form";
import { TFormData } from "./Checkout";
import { SetCtx } from "@/src/contexts/ctx";
const Card = styled(MuiCard)<{ selected?: boolean }>(({ theme }) => ({
  border: "1px solid",
  borderColor: theme.palette.divider,
  width: "100%",
  "&:hover": {
    background:
      "linear-gradient(to bottom right, hsla(210, 100%, 97%, 0.5) 25%, hsla(210, 100%, 90%, 0.3) 100%)",
    borderColor: "primary.light",
    boxShadow: "0px 2px 8px hsla(0, 0%, 0%, 0.1)",
    ...theme.applyStyles("dark", {
      background:
        "linear-gradient(to right bottom, hsla(210, 100%, 12%, 0.2) 25%, hsla(210, 100%, 16%, 0.2) 100%)",
      borderColor: "primary.dark",
      boxShadow: "0px 1px 8px hsla(210, 100%, 25%, 0.5) ",
    }),
  },
  [theme.breakpoints.up("md")]: {
    flexGrow: 1,
    maxWidth: `calc(50% - ${theme.spacing(1)})`,
  },
  variants: [
    {
      props: ({ selected }) => selected,
      style: {
        backgroundColor: theme.palette.action.selected,
        borderColor: theme.palette.primary.light,
        ...theme.applyStyles("dark", {
          borderColor: theme.palette.primary.dark,
        }),
      },
    },
  ],
}));

const PaymentContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  width: "100%",
  height: 375,
  padding: theme.spacing(3),
  borderRadius: "20px",
  border: "1px solid ",
  borderColor: theme.palette.divider,
  background:
    "linear-gradient(to bottom right, hsla(210, 100%, 97%, 0.3) 25%, hsla(210, 100%, 90%, 0.3) 100%)",
  boxShadow: "0px 4px 8px hsla(210, 0%, 0%, 0.05)",
  [theme.breakpoints.up("xs")]: {
    height: 300,
  },
  [theme.breakpoints.up("sm")]: {
    height: 350,
  },
  ...theme.applyStyles("dark", {
    background:
      "linear-gradient(to right bottom, hsla(210, 100%, 12%, 0.2) 25%, hsla(210, 100%, 16%, 0.2) 100%)",
  }),
}));

const FormGrid = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
}));

export default function PaymentForm({
  hookForm,
  onSubmit,
}: {
  hookForm: UseFormReturn<TFormData, any, undefined>;
  onSubmit: (data: TFormData) => void;
}) {
  const { setFormData } = React.useContext(SetCtx);
  const { setValue, handleSubmit, control } = hookForm;
  const [paymentType, setPaymentType] = React.useState("creditCard");

  const handlePaymentTypeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPaymentType(event.target.value);
  };

  const handleCardNumberChange = (value: string) => {
    const formattedValue = value
      .replace(/\D/g, "")
      .replace(/(\d{4})(?=\d)/g, "$1 ");
    if (formattedValue.length <= 19) {
      setValue("cardNumber", formattedValue);
    }
  };

  const handleCvvChange = (value: string) => {
    const formattedValue = value.replace(/\D/g, "");
    if (formattedValue.length <= 3) {
      setValue("cvv", formattedValue);
    }
  };

  const handleExpirationDateChange = (value: string) => {
    const formattedValue = value
      .replace(/\D/g, "")
      .replace(/(\d{2})(?=\d{2})/, "$1/");
    if (formattedValue.length <= 5) {
      setValue("expirationDate", formattedValue);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={{ xs: 3, sm: 6 }} useFlexGap>
        <FormControl component="fieldset" fullWidth>
          <RadioGroup
            aria-label="Payment options"
            name="paymentType"
            value={paymentType}
            onChange={handlePaymentTypeChange}
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: 2,
            }}
          >
            <Card selected={paymentType === "creditCard"}>
              <CardActionArea
                onClick={() => setPaymentType("creditCard")}
                sx={{
                  ".MuiCardActionArea-focusHighlight": {
                    backgroundColor: "transparent",
                  },
                  "&:focus-visible": {
                    backgroundColor: "action.hover",
                  },
                }}
              >
                <CardContent
                  sx={{ display: "flex", alignItems: "center", gap: 1 }}
                >
                  <CreditCardRoundedIcon
                    fontSize="small"
                    sx={[
                      (theme) => ({
                        color: "grey.400",
                        ...theme.applyStyles("dark", {
                          color: "grey.600",
                        }),
                      }),
                      paymentType === "creditCard" && {
                        color: "primary.main",
                      },
                    ]}
                  />
                  <Typography sx={{ fontWeight: "medium" }}>
                    Cartão de Crédito{" "}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card selected={paymentType === "bankTransfer"}>
              <CardActionArea
                onClick={() => setPaymentType("bankTransfer")}
                sx={{
                  ".MuiCardActionArea-focusHighlight": {
                    backgroundColor: "transparent",
                  },
                  "&:focus-visible": {
                    backgroundColor: "action.hover",
                  },
                }}
              >
                <CardContent
                  sx={{ display: "flex", alignItems: "center", gap: 1 }}
                >
                  <AccountBalanceRoundedIcon
                    fontSize="small"
                    sx={[
                      (theme) => ({
                        color: "grey.400",
                        ...theme.applyStyles("dark", {
                          color: "grey.600",
                        }),
                      }),
                      paymentType === "bankTransfer" && {
                        color: "primary.main",
                      },
                    ]}
                  />
                  <Typography sx={{ fontWeight: "medium" }}>PIX</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </RadioGroup>
        </FormControl>
        {paymentType === "creditCard" && (
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <PaymentContainer>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant="subtitle2">Cartão de crédito</Typography>
                <CreditCardRoundedIcon sx={{ color: "text.secondary" }} />
              </Box>
              <SimCardRoundedIcon
                sx={{
                  fontSize: { xs: 48, sm: 56 },
                  transform: "rotate(90deg)",
                  color: "text.secondary",
                }}
              />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                  gap: 2,
                }}
              >
                <FormGrid sx={{ flexGrow: 1 }}>
                  <FormLabel htmlFor="card-number" required>
                    Número do cartão
                  </FormLabel>
                  <Controller
                    name="cardNumber"
                    control={control}
                    render={({ field }) => (
                      <OutlinedInput
                        {...field}
                        id="card-number"
                        autoComplete="card-number"
                        placeholder="0000 0000 0000 0000"
                        required
                        onChange={(e) => handleCardNumberChange(e.target.value)}
                      />
                    )}
                  />
                </FormGrid>
                <FormGrid sx={{ maxWidth: "20%" }}>
                  <FormLabel htmlFor="cvv" required>
                    CVV
                  </FormLabel>
                  <Controller
                    name="cvv"
                    control={control}
                    render={({ field }) => (
                      <OutlinedInput
                        {...field}
                        id="cvv"
                        autoComplete="CVV"
                        placeholder="123"
                        required
                        onChange={(e) => handleCvvChange(e.target.value)}
                      />
                    )}
                  />
                </FormGrid>
              </Box>
              <Box sx={{ display: "flex", gap: 2 }}>
                <FormGrid sx={{ flexGrow: 1 }}>
                  <FormLabel htmlFor="card-name" required>
                    Nome do títular
                  </FormLabel>
                  <Controller
                    name="cardName"
                    control={control}
                    render={({ field }) => (
                      <OutlinedInput
                        {...field}
                        id="card-name"
                        autoComplete="card-name"
                        placeholder="John Smith"
                        required
                      />
                    )}
                  />
                </FormGrid>
                <FormGrid sx={{ flexGrow: 1 }}>
                  <FormLabel htmlFor="card-expiration" required>
                    Data de validade
                  </FormLabel>
                  <Controller
                    name="expirationDate"
                    control={control}
                    render={({ field }) => (
                      <OutlinedInput
                        {...field}
                        id="card-expiration"
                        autoComplete="card-expiration"
                        placeholder="MM/YY"
                        required
                        onChange={(e) =>
                          handleExpirationDateChange(e.target.value)
                        }
                      />
                    )}
                  />
                </FormGrid>
              </Box>
            </PaymentContainer>
            <Controller
              name="saveCard"
              control={control}
              render={({ field }) => (
                <FormControlLabel
                  control={<Checkbox {...field} name="saveCard" />}
                  label="Lembrar dados do cartão para a próxima compra"
                />
              )}
            />
          </Box>
        )}
        {paymentType === "bankTransfer" && (
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Alert severity="warning" icon={<WarningRoundedIcon />}>
              Seu pedido será processado assim que a transação for aprovada e
              finalizada.
            </Alert>
            <Typography variant="subtitle1" sx={{ fontWeight: "medium" }}>
              PIX
            </Typography>
            <Typography variant="body1" gutterBottom>
              Please transfer the payment to the bank account details shown
              below.
            </Typography>
            <Box sx={{ display: "flex", gap: 1 }}>
              <Typography variant="body1" sx={{ color: "text.secondary" }}>
                Código PIX:
              </Typography>
              <Typography variant="body1" sx={{ fontWeight: "medium" }}>
                Mastercredit
              </Typography>
            </Box>
          </Box>
        )}
      </Stack>
    </form>
  );
}
