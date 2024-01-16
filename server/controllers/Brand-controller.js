const { Brand } = require("../model/Brand");

exports.fetechBrands = async (req, res) => {
  try {
    const brands = Brand.find({}).exec({});
    res.status(201).json(brands);
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.createBrands = async (req, res) => {
  const brand = new Brand(req.body);
  try {
    const doc = brand.save();
    res.status(201).json(doc);
  } catch (error) {
    res.status(400).json(error);
  }
};
