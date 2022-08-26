import generateJson from "../utils/resGen.js";

const notFound = (_, res) => res.status(404).json(generateJson(404, "Requested url not found!", null));

export default notFound;