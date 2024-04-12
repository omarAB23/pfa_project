import React, { useState } from "react";
import { useCountries } from "use-react-countries";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Success from "./Success";

import {
  Card,
  CardHeader,
  CardBody,
  Input,
  Button,
  Typography,
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Select,
  Option,
} from "@material-tailwind/react";
import {
  BanknotesIcon,
  CreditCardIcon,
  LockClosedIcon,
} from "@heroicons/react/24/solid";

function formatCardNumber(value) {
  const val = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
  const matches = val.match(/\d{4,16}/g);
  const match = (matches && matches[0]) || "";
  const parts = [];

  for (let i = 0, len = match.length; i < len; i += 4) {
    parts.push(match.substring(i, i + 4));
  }

  if (parts.length) {
    return parts.join(" ");
  } else {
    return value;
  }
}

function formatExpires(value) {
  return value
    .replace(/[^0-9]/g, "")
    .replace(/^([2-9])$/g, "0$1")
    .replace(/^(1{1})([3-9]{1})$/g, "0$1/$2")
    .replace(/^0{1,}/g, "0")
    .replace(/^([0-1]{1}[0-9]{1})([0-9]{1,2}).*/g, "$1/$2");
}

export default function Payment() {
  const { countries } = useCountries();
  const [type, setType] = useState("card");
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpires, setCardExpires] = useState("");
  const [cardCVC, setCardCVC] = useState("");
  const [holderName, setHolderName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const validateCardInputs = () => {
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      toast.error("Invalid email address", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return false;
    }
    if (!cardNumber || cardNumber.replace(/\s/g, "").length !== 16) {
      toast.error("Invalid card number", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return false;
    }
    if (!cardExpires || !/^(0[1-9]|1[0-2])\/\d{2}$/.test(cardExpires)) {
      toast.error("Invalid expiration date (MM/YY)", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return false;
    }
    if (!cardCVC || !/^\d{3,4}$/.test(cardCVC)) {
      toast.error("Invalid CVC", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return false;
    }
    if (!holderName) {
      toast.error("Please enter holder name", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return false;
    }
    return true;
  };

  const validatePaypalInputs = () => {
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      toast.error("Invalid email address", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return false;
    }
    /* if (!country) {
      toast.error("Please select a country", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return false;
    } */
    if (!postalCode) {
      toast.error("Please enter postal code", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return false;
    }
    return true;
  };

  const validateType = () => {
    if (type === "card") {
      return validateCardInputs();
    } else if (type === "paypal") {
      return validatePaypalInputs();
    }
  };

  const submitPayment = (e) => {
    e.preventDefault(); // Prevent the default form submission

    if (validateType()) {
      setShowSuccess(true); // Set showSuccess to true to display the success message
    }
  };

  const closeModal = () => {
    setShowSuccess(false);
    window.location.href = "/";
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="w-full max-w-[24rem]">
        <CardHeader
          color="gray"
          floated={false}
          shadow={false}
          className="m-0 grid place-items-center px-4 py-8 text-center"
        >
          <div className="mb-4 h-20 p-6 text-white">
            {type === "card" ? (
              <CreditCardIcon className="h-10 w-10 text-white" />
            ) : (
              <img
                alt="paypal"
                className="w-14"
                src="https://docs.material-tailwind.com/icons/paypall.png"
              />
            )}
          </div>
          <Typography variant="h5" color="white">
            Payment
          </Typography>
        </CardHeader>
        <CardBody>
          <Tabs value={type} className="overflow-visible">
            <TabsHeader className="relative z-0">
              <Tab value="card" onClick={() => setType("card")}>
                Pay with Card
              </Tab>
              <Tab value="paypal" onClick={() => setType("paypal")}>
                Pay with PayPal
              </Tab>
            </TabsHeader>
            <TabsBody
              className="!overflow-x-hidden !overflow-y-visible"
              animate={{
                initial: {
                  x: type === "card" ? 400 : -400,
                },
                mount: {
                  x: 0,
                },
                unmount: {
                  x: type === "card" ? 400 : -400,
                },
              }}
            >
              <TabPanel value="card" className="p-0">
                <form className="mt-12 flex flex-col gap-4">
                  <div>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="mb-2 font-medium"
                    >
                      Your Email
                    </Typography>
                    <Input
                      type="email"
                      placeholder="name@mail.com"
                      className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      labelProps={{
                        className: "before:content-none after:content-none",
                      }}
                    />
                  </div>
                  <div className="my-3">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="mb-2 font-medium"
                    >
                      Card Details
                    </Typography>
                    <Input
                      maxLength={19}
                      value={formatCardNumber(cardNumber)}
                      onChange={(event) => setCardNumber(event.target.value)}
                      icon={
                        <CreditCardIcon className="absolute left-0 h-4 w-4 text-blue-gray-300" />
                      }
                      placeholder="0000 0000 0000 0000"
                      className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                      labelProps={{
                        className: "before:content-none after:content-none",
                      }}
                    />
                    <div className="my-4 flex items-center gap-4">
                      <div>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="mb-2 font-medium"
                        >
                          Expires
                        </Typography>
                        <Input
                          maxLength={5}
                          value={formatExpires(cardExpires)}
                          onChange={(event) =>
                            setCardExpires(event.target.value)
                          }
                          containerProps={{ className: "min-w-[72px]" }}
                          placeholder="00/00"
                          className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                          labelProps={{
                            className: "before:content-none after:content-none",
                          }}
                        />
                      </div>
                      <div>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="mb-2 font-medium"
                        >
                          CVC
                        </Typography>
                        <Input
                          maxLength={4}
                          value={cardCVC}
                          onChange={(e) => setCardCVC(e.target.value)}
                          containerProps={{ className: "min-w-[72px]" }}
                          placeholder="000"
                          className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                          labelProps={{
                            className: "before:content-none after:content-none",
                          }}
                        />
                      </div>
                    </div>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="mb-2 font-medium"
                    >
                      Holder Name
                    </Typography>
                    <Input
                      placeholder="Holder Name"
                      className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                      value={holderName}
                      onChange={(e) => setHolderName(e.target.value)}
                      labelProps={{
                        className: "before:content-none after:content-none",
                      }}
                    />
                  </div>
                  <Button size="lg" onClick={submitPayment}>
                    Pay Now
                  </Button>
                  <Typography
                    variant="small"
                    color="gray"
                    className="mt-2 flex items-center justify-center gap-2 font-medium opacity-60"
                  >
                    <LockClosedIcon className="-mt-0.5 h-4 w-4" /> Payments are
                    secure and encrypted
                  </Typography>
                </form>
              </TabPanel>
              <TabPanel value="paypal" className="p-0">
                <form className="mt-12 flex flex-col gap-4">
                  <div>
                    <Typography
                      variant="paragraph"
                      color="blue-gray"
                      className="mb-4 font-medium"
                    >
                      Personal Details
                    </Typography>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="mb-2 font-medium"
                    >
                      Your Email
                    </Typography>
                    <Input
                      type="email"
                      placeholder="name@mail.com"
                      className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      labelProps={{
                        className: "before:content-none after:content-none",
                      }}
                    />
                  </div>
                  <div className="my-6">
                    <Typography
                      variant="paragraph"
                      color="blue-gray"
                      className="mb-4 font-medium"
                    >
                      Billing Address
                    </Typography>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="mb-2 font-medium"
                    >
                      Country
                    </Typography>
                    <Select
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      placeholder="USA"
                      className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                      labelProps={{
                        className: "before:content-none after:content-none",
                      }}
                      menuProps={{ className: "h-48" }}
                    >
                      {countries.map(({ name, flags }) => (
                        <Option key={name} value={name}>
                          <div className="flex items-center gap-x-2">
                            <img
                              src={flags.svg}
                              alt={name}
                              className="h-4 w-4 rounded-full object-cover"
                            />
                            {name}
                          </div>
                        </Option>
                      ))}
                    </Select>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="mt-4 -mb-2 font-medium"
                    >
                      Postal Code
                    </Typography>
                    <Input
                      placeholder="0000"
                      className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                      value={postalCode}
                      onChange={(e) => setPostalCode(e.target.value)}
                      labelProps={{
                        className: "before:content-none after:content-none",
                      }}
                      containerProps={{ className: "mt-4" }}
                    />
                  </div>
                  <Button size="lg" onClick={submitPayment}>
                    Pay with PayPal
                  </Button>
                  <Typography
                    variant="small"
                    color="gray"
                    className="flex items-center justify-center gap-2 font-medium opacity-60"
                  >
                    <LockClosedIcon className="-mt-0.5 h-4 w-4" /> Payments are
                    secure and encrypted
                  </Typography>
                </form>
              </TabPanel>
            </TabsBody>
          </Tabs>
        </CardBody>
      </Card>
      {showSuccess && <Success isOpen={showSuccess} closeModal={closeModal} />}
    </div>
  );
}
