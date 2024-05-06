import express from "express";
import { param } from "express-validator";
import SearchRestaurantController from "../Controllers/SearchRestaurantController";

const router = express.Router();

router.get("/:restaurantId",
        param("restaurantId")
                .isString()
                .trim()
                .notEmpty()
                .withMessage("RestaurantId parameter must be a valid string"),
                SearchRestaurantController.getRestaurant
        )

router.get("/search/:city",
        param("city")
                .isString()
                .trim()
                .notEmpty()
                .withMessage("city parameter must be a valid string"),
        SearchRestaurantController.searchRestaurant
);

export default router;