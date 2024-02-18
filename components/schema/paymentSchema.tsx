import React from "react";
import * as yup from "yup";

const paymentSchema = yup.object().shape({
  cardNumber: yup
    .number()
    .integer()
    .test("len", "Card Number code must be exactly 16 digits", (val) => {
      if (val) {
        return val.toString().length === 16;
      }
      return false;
    })
    .required(),

  expiration: yup
    .number()
    .integer()
    .test("len", "Expiration code must be exactly 4 digits", (val) => {
      if (val) {
        return val.toString().length === 4;
      }
      return false;
    })
    .required(),

  cvc: yup
    .number()
    .integer()
    .test("len", "CVC code must be exactly 3 digits", (val) => {
      if (val) {
        return val.toString().length === 3;
      }
      return false;
    })
    .required(),

  zip: yup
    .string()
    .test("len", "ZIP code must be exactly 5 digits", (val) => {
      if (val) {
        return val.toString().length === 5;
      }
      return false;
    })
    .required("feel"),
});

export default paymentSchema;
