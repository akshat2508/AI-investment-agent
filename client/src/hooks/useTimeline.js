import { useEffect, useState } from "react";

export const useTimeline = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const source = new EventSource("http://localhost:3000/api/timeline");

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