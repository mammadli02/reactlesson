const SliderModel = require('../models/sliders.model');

const SliderController = {
    getAllSliders: async (req, res) => {
        const sliders = await SliderModel.find();
        if (sliders == undefined) {
          res.status(404).send("sliders not found!");
        } else {
          res.status(200).send(sliders);
        }
      },
      getByID: async (req, res) => {
        const id = req.params.id;
        const slider = await SliderModel.findById(id);
        console.log("slider found: ", slider);
        if (!slider) {
          res.status(204).send("slider not found!");
        } else {
          res.status(200).send({
            data: slider,
            message: "data get success!",
          });
        }
      },
      post: async (req, res) => {
        const { name,imageUrl} = req.body;
    
        const slider = new SliderModel({
          name: name,
          imageUrl: imageUrl,
        });
        await slider.save();
        res.status(201).send("slider created successfully");
      },
      delete: async (req, res) => {
        const id = req.params.id;
        const deleteSlider = await SliderModel.findByIdAndDelete(id);
        if (!deleteSlider) {
          res.status(404).send("song not found!");
        } else {
          res
            .status(203)
            .send({ data: deleteSlider, message: "slider deleted successfully!" });
        }
      },
      edit: async (req, res) => {
        const id = req.params.id;
        const { name,imageUrl} = req.body;
        console.log("name: ", name);
        const existedSliders = await SliderModel.findByIdAndUpdate(id, {
          name: name,
        imageUrl:imageUrl
        });
        if (existedSliders == undefined) {
          res.status(404).send(" slider not found!");
        } else {
          res.status(200).send(`${name} updated successfully!`);
        }
      },
};

module.exports =  SliderController