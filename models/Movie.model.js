const { Schema, SchemaTypes, model } = require("mongoose");

const movieSchema = new Schema(
  {
    title: String,
    genre: String,
    plot: String,
    cast: [{ type: Schema.Types.ObjectId, ref: "Celebrity" }],
  },
  {
    timestamp: true,
  }
);

const Movie = model("Movie", movieSchema);

module.exports = Movie;
