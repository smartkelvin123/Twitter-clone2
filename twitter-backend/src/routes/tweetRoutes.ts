import { Router } from "express";
const router = Router();

router.post("/", (req, res) => {
  res.status(501).json({ error: "not implemented" });
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  res.status(501).json({ error: "not implemented" });
});

router.put("/:id", (req, res) => {
  const id = req.params.id;
  res.status(501).json({ error: "not implemented" });
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  res.status(501).json({ error: `not implemented: ${id}` });
});

export default router;