import models from "../models/model"

export default {
  Query: {
    allEpisodes: (parent, args, context) => {
      return models.episodes;
    }
  }
}
