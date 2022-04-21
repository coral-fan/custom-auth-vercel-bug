import CustomAuth from "@toruslabs/customauth";

export default function handler(req, res) {
  res.status(200).send("this will never send.");
}
