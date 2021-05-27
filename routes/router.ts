import { Router, Request, Response } from "express";

export const router = Router();

router.get("/mensajes", (req: Request, res: Response) => {
  res.json({
    ok: true,
    mensaje: "Todo esta bien!!",
  });
});

router.post("/mensajes", (req: Request, res: Response) => {
  const cuerpo: string = req.body.cuerpo;
  const de: string = req.body.de;

  res.json({
    ok: true,
    mensaje: "Todo esta bien en tipo HTTP POST!!",
    cuerpo: cuerpo.toUpperCase(),
    de: de.toUpperCase(),
  });
});

router.post("/mensajes/:id", (req: Request, res: Response) => {
  const cuerpo: string = req.body.cuerpo;
  const de: string = req.body.de;
  const id: string = req.params.id;

  res.json({
    ok: true,
    mensaje: "Todo esta bien en tipo HTTP POST!!",
    cuerpo: cuerpo.toUpperCase(),
    de: de.toUpperCase(),
    id: id.toUpperCase(),
  });
});
