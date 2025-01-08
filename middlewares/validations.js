const validateRequest = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      let details = error.details.map((err) => err.message).join(", ");
      return res.status(400).json({ error: details });
    }
    next();
  };
};

export { validateRequest };
