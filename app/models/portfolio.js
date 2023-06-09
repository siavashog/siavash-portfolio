import {model , Schema,models} from "mongoose";

const PortfolioSchema = new Schema({
  mainImage : {type: String },
  aboutImage : {type: String },
  aboutDescription : {type: String ,},
  experienceImage: {type: String },
  experienceDescription: {type:String },
  skillImage:{type: String },
  skillPercentage: {type:String },
  projectImage:{type: String },
  projectTitle:{type: String },
  projectDescription:{type: String },


}
)


export const Portfolio = models.Portfolio || model('Portfolio',PortfolioSchema)