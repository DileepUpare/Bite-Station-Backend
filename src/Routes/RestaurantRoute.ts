import express from "express";
import multer from "multer";
import RestaurantController from "../Controllers/RestaurantController";
import { jwtCheck, jwtParse } from "../middleware/auth";
import { validateMyrestaurantRequest } from "../middleware/Validation";


const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({
    storage: storage,
    limits:{
        fileSize: 5 * 1024 * 1024  //5mb
    },
});

router.get("/", jwtCheck, jwtParse, RestaurantController.getMyRestaurant);

router.post("/", upload.single("imageFile"),
validateMyrestaurantRequest, jwtCheck, jwtParse,
   RestaurantController.createMyRestaurant);

router.put("/", upload.single("imageFile"),
validateMyrestaurantRequest, jwtCheck, jwtParse,
   RestaurantController.updateMyRestaurant)

export default router;