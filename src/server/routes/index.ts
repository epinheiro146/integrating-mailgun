import * as express from "express";
import blogsRouter from "./blogs";
import tagsRouter from "./tags";
import blogTagsRouter from "./blogtags";
import paymentsRouter from "./payments";
import contactRouter from "./contact";

const router = express.Router();

router.use("/api/blogs", blogsRouter);
router.use("/api/tags", tagsRouter);
router.use("/api/blogtags", blogTagsRouter);
router.use("/api/payments", paymentsRouter);
router.use("/api/contact", contactRouter);

export default router;