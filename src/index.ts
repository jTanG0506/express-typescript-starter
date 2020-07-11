import express, { Application, Request, Response } from "express";
import bodyParser from "body-parser";
import { config } from "./config";

const mount = async (app: Application) => {
  app.use(bodyParser.json({ limit: "2mb" }));

  app.disable("x-powered-by");
  app.get("/", (_req: Request, res: Response) => {
    res.status(200).json({ "message": "Hello World!" })
  });

  app.listen(config.server.port, () => {
    console.log(`[app]: http://localhost:${config.server.port}`);
  });
};

mount(express());
