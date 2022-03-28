const Annotation = require("../models/AnnotationSchema");

module.exports = {

  async update(request, response) {
    const { id } = request.params;
    const { notes } = request.body;

    const annotation = await Annotation.findOne({ _id: id });

    if (notes) {
      annotation.notes = notes;

      await annotation.save();
    }

    return response.json(annotation);

  }

};