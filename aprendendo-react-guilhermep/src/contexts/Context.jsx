import { useState, useEffect, createContext } from "react";
import { APIsService } from "../APIs/APIsService";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [language, setLanguage] = useState("br");
  const [languages, setLanguages] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLanguages = async () => {
      try {
        const texts = await APIsService("webText");
        setLanguages(texts);
      } catch (error) {
        console.error("Failed to fetch languages:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLanguages();
  }, []);

  return (
    <AppContext.Provider value={{ language, setLanguage, languages, loading }}>
      {children}
    </AppContext.Provider>
  );
};
