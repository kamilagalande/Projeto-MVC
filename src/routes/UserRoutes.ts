import { Request, Response, Router } from "express";

const UserRouter = Router();

UserRouter.get("/users", function(req: Request, res: Response){
    res.send("Requisição GET");
});

UserRouter.post("/user", function(req: Request, res: Response){
    res.send("Requisição POST");
});

UserRouter.put("/user", function(req: Request, res: Response){
    res.send("Requisição PUT");
});

UserRouter.delete("/user", function(req: Request, res: Response){
    res.send("Requisição DELETE");
});

export default UserRouter;
