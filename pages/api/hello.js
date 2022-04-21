try {
  import CustomAuth from "@toruslabs/customauth";
} catch (e) {
  console.log(e);
}

export default function handler(req, res) {
  res.status(200).json({ name: "John Doe" });
}
