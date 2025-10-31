import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.json([
    { id: 1, name: "Nguyễn Văn A" },
    { id: 2, name: "Trần Thị B" },
  ]);
});

export default router;