import CustomAuth from "@toruslabs/customauth";

export default function handler(req, res) {
  res.status(200).json({ name: "John Doe" });
}
