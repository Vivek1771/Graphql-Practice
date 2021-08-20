import React from "react";
import { gql, useSubscription } from "@apollo/client";
import { client } from "../graphql/subscriptions/currencySub";

const RATES_UPDATED = gql`
  subscription OnRatesUpdated($currency: String!) {
    ratesUpdated(input: {postID: $currency}) {
      currency
      rate
      name
    }
  }
`;

const CurrencySub = () => {
  const { data, loading } = useSubscription(
    RATES_UPDATED,
    { variables: { currency: "USD" } },
    client
  );

  if (data) {
    console.log("cur", data);
  }

  return <h4>{!loading}</h4>;
};

export default CurrencySub;