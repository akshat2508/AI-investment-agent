import { useState } from "react";
import api from "../services/api";

export const useResearch = () => {
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const analyzeCompany = async (company) => {
    try {
      setLoading(true);
      setError("");

      const response = await api.post("/research", {
        company,
      });

      setAnalysis(response.data.data);
    } catch (err) {
      console.error(err);
      setError("Failed to analyze company.");
    } finally {
      setLoading(false);
    }
  };

  return {
    analysis,
    loading,
    error,
    analyzeCompany,
  };
};