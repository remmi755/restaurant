"use client";

import { useEffect, useState } from "react";
import { loadStripe, StripeElementsOptions } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "@/components/CheckoutForm";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

const PayPage = ({ params }: { params: { id: string } }) => {
  const [clientSecret, setClientSecret] = useState("");
  const { id } = params;

  useEffect(() => {
    const makeRequest = async () => {
      const apiUrl = "http://localhost:3000" || process.env.API_URL;
      const api = process.env.NEXTAUTH_SECRET;
      console.log(apiUrl);
      console.log(api);
      try {
        const res = await fetch(`${apiUrl}/api/create-intent/${id}`, {
          cache: "no-store",
          method: "POST",
        });
        const data = await res.json();
        setClientSecret(data.clientSecret);
      } catch (err) {
        console.log(err);
      }
    };
    makeRequest();
  }, [id]);

  const options: StripeElementsOptions = {
    clientSecret,
    appearance: {
      theme: "stripe",
    },
  };
  return (
    <div>
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
};

export default PayPage;
