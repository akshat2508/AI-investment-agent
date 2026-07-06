import { useEffect, useState } from "react";

export const useTimeline = () => {
  const [events, setEvents] = useState([]);
  const API_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const source =new EventSource(`${API_URL}/api/timeline`);

    source.onmessage = (event) => {
      const data = JSON.parse(event.data);

      setEvents((prev) => {
        const index = prev.findIndex((e) => e.id === data.id);

        if (index === -1) {
          return [...prev, data];
        }

        const updated = [...prev];
        updated[index] = {
          ...updated[index],
          ...data,
        };

        return updated;
      });
    };

    source.onerror = () => {
      source.close();
    };

    return () => source.close();
  }, []);

  const clearTimeline = () => setEvents([]);

  return {
    events,
    clearTimeline,
  };
};