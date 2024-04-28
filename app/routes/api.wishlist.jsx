import { json } from "@remix-run/node";

export const loader = async ({ request }) => {
  return json({
    data: "hello",
  });
};

export const action = async ({ request }) => {
  return json({
    data: "did you do post request",
  });
};
