const Annotation = require("../models/AnnotationSchema");

module.exports = {

  async read(request, response) {
    const AnnotationList = await Annotation.find();
    return response.json(AnnotationList);
  },

  async create(request, response) {
    const { title, notes, priority } = request.body;

    if (!title || !notes) {
      return response.status(400).json({ error: "Necessário um título/anotação!" });
    }

    const annotationCreated = await Annotation.create({
      title,
      notes,
      priority
    });

    return response.json(annotationCreated);
  },

  async delete(request, response) {
    const { id } = request.params;

    const annotationDeleted = await Annotation.findOneAndDelete({ _id: id });

    if (annotationDeleted) {
      return response.json(annotationDeleted);
    }

    return response.status(401).json({ error: "Não foi encontrado o registro para deletar!" });
  }

};
