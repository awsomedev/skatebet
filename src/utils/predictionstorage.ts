const PREDICTIONS_KEY = "predictions";
import { Prediction } from "../types/prediction";
import { storage } from "./storage";

const getPredictions = (): Prediction[] => {
  const predictions = storage.getString(PREDICTIONS_KEY);
  return predictions ? JSON.parse(predictions) : [];
};

const savePredictions = (predictions: Prediction[]): void => {
  storage.set(PREDICTIONS_KEY, JSON.stringify(predictions));
};

export const PredictionStorage = {
  addPrediction: (prediction: Prediction): Prediction => {
    const predictions = getPredictions();

    predictions.push(prediction);
    savePredictions(predictions);
    return prediction;
  },

  getAllPredictions: (): Prediction[] => {
    return getPredictions();
  },

  getPredictionById: (gameId: string): Prediction | undefined => {
    const predictions = getPredictions();
    return predictions.find((p) => p.gameId === gameId);
  },

  updatePrediction: (prediction: Prediction): Prediction => {
    const predictions = getPredictions();
    const index = predictions.findIndex((p) => p.gameId === prediction.gameId);
    predictions[index] = prediction;
    savePredictions(predictions);
    return prediction;
  },

  deletePrediction: (gameId: string): boolean => {
    const predictions = getPredictions();
    const filteredPredictions = predictions.filter((p) => p.gameId !== gameId);

    if (filteredPredictions.length === predictions.length) {
      return false;
    }

    savePredictions(filteredPredictions);
    return true;
  },

  clearAllPredictions: (): void => {
    storage.delete(PREDICTIONS_KEY);
  },
};
