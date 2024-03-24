const ContentController = (req, res) => {
  return res.json({ valid: true, message: "User Is Authorized" });
};

export default ContentController;
