import CustomAuth from "@toruslabs/customauth";

console.log(__dirname);

export default function handler(req, res) {
  res.status(200).json({ name: "John Doe" });
}
