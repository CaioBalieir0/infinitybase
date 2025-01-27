import mongoose, { Schema } from "mongoose";

const TaskSchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: [true, "O título da tarefa é obrigatório"],
      trim: true,
    },
    description: {
      type: String,
      default: "Sem descrição",
      trim: true,
    },
    priority: {
      type: String,
      enum: ["Alta", "Média", "Baixa"],
      default: "Baixa",
    },
    status: {
      type: String,
      enum: ["Não Iniciada", "Em Andamento", "Finalizada"],
      default: "Não Iniciada",
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: false,
  }
);

export default mongoose.model("Task", TaskSchema);
