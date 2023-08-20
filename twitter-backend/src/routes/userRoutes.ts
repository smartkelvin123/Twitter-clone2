import { Router } from "express";
import {PrismaClient} from "@prisma/client"




const router = Router();
const prisma = new PrismaClient()

router.post("/",async (req, res) => {
  const {email, name, username} = req.body
  try {
    const result = await prisma.user.create({
      data: {
        email,
      
        username,
        bio: "hello, i am on twitter"
      }
    })
    res.json(result)
    
  } catch (error) {
    res.json({error : "username and mail should be unique"})
    
  }

});

//list users
router.get("/users", async (req, res)=>{
  const allUser = await prisma.user.findMany()

 res.json(allUser)
 })

router.get("/:id",async (req, res) => {
  const id = req.params.id;
  const user = await prisma.user.findUnique({where: {id: Number(id)}})
  res.json(user);
});

router.put("/:id", async (req, res) => {
  const id = req.params.id;
  const {bio, name , image} = req.body

  try {
    const result = await prisma.user.update({
      where: {id: Number(id)},
      data: {
        bio,
        
        image
      }
    })
    res.json(result)
    
  } catch (error) {
    res.status(400).json({error: "failed to update user"})

    
  }

});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  const user = await prisma.user.delete({where: {id: Number(id)}})
  res.sendStatus(200);


})




export default router;
