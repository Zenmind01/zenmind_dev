const router = require("express").Router();
const sessionModel = require("../models/session.model")

//--------------create post ---------------------------

router.post("/", async (req, res) => {
  try {
    const { userId, docId,title, desc, time, date } = req.body;

    const createPost = new sessionModel({ userId,docId,title,desc,time,date });

    await createPost.save();

    return res.json({
      status: true,
      data: createPost,
      message: "post crested",
    });
  } catch (error) {
    return res.json({ status: false, data: [], message: "error: " + error });
  }
});

//--------------reply post----------------------------

router.put("/:id/:status", async (req, res) => {
  try {
    const sId = req.params.id;
    const status = req.params.status;

    const updatedPost = await sessionModel.findByIdAndUpdate(
      sId,
      { $set: {  status: status  } },
      { new: true }
    );

    if (!updatedPost) {
      return res.status(404).json({ error: "Post not found" });
    }

    res.json({ status: true, data: updatedPost, message: "reply added" });
  } catch (error) {
    return res.json({ success: false, message: error });
  }
});

//--------------like post ---------------------------



//------------------------get request------------------------------

//get a post
router.get("/:id", async (req, res) => {
  try {
    //console.log(req.user);
    const courses = await sessionModel.find({userId:req.params.id});
    return res.json({ success: true, data: courses, message: "here you go" });
  } catch (error) {
    return res.json({ success: false, message: error });
  }
});

//get doc posts
router.get("/doc/:id", async (req, res) => {
  try {
    //console.log(req.user);
    const courses = await sessionModel.find({ docId: req.params.id});
    return res.json({ success: true, data: courses, message: "here you go" });
  } catch (error) {
    return res.json({ success: false, message: error });
  }
});

//get user post
router.get("/user/:id", async (req, res) => {
  try {
    //console.log(req.user);
    const courses = await sessionModel.find({ userId: req.params.id });
    return res.json({ success: true, data: courses, message: "here you go" });
  } catch (error) {
    return res.json({ success: false, message: error });
  }
});

//get all post
router.get("/", async (req, res) => {
  try {
    //console.log(req.user);
    const courses = await sessionModel.find();
    return res.json({ success: true, data: courses, message: "here you go" });
  } catch (error) {
    return res.json({ success: false, message: error });
  }
});

module.exports = router;
