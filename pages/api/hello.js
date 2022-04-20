// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import CustomAuth from "@toruslabs/customauth";

// new CustomAuth({
//   baseUrl: "localhost:3000",
// });

export default function handler(req, res) {
  res.status(200).json({ name: "John Doe" });
}
