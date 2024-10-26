"use client";

import React, { createContext, useState, useContext } from "react";

interface IHierarchicalContext {
  context: {
    managerAgent: {
      role: string;
      goal: string;
      backstory: string;
    };
    workerAgents: any[];
  };
  setHierarchicalContext: React.Dispatch<
    React.SetStateAction<{
      managerAgent: {
        role: string;
        goal: string;
        backstory: string;
      };
      workerAgents: any[];
    }>
  >;
}

const HierarchicalContext = createContext<IHierarchicalContext | undefined>(
  undefined
);

export const HierarchicalProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [data, setData] = useState<{
    managerAgent: {
      role: string;
      goal: string;
      backstory: string;
    };
    workerAgents: {
      role: string;
      goal: string;
      backstory: string;
      expanded?: boolean;
    }[];
  }>({
    managerAgent: {
      role: "Project Manager",
      goal: "Your goal is to coordinate the efforts of the crew members, ensuring that each task is completed on time and to the highest standard.",
      backstory: `You're an experienced project manager who has been tasked with overseeing the news reporting team. Your team consists of 2 reporters who are responsible for finding the most relevant latest information about Haiti. Your role is to coordinate the efforts of the crew members, ensuring that each task is completed on time and to the highest standard. Include detailed sources, citations, and links in your report so that the information can be verified.`,
    },
    workerAgents: [
      {
        role: "Le Nouvelliste Reporter",
        goal: "Conduct thorough research on latest news available on https://lenouvelliste.com/",
        backstory: `You're an expert news reporter who is part of a team of journalists aggregating news about Haiti from various sources. Your role is to find the most relevant information about Haiti from the Le Nouvelliste's website and accurately relay it to the reporting director who will report it to readership. Include detailed sources, citations, and links in your report so that the information can be verified.`,
        expanded: true,
      },
      {
        role: "Loop Haiti News Reporter",
        goal: "Conduct thorough research on the latest news available on https://haiti.loopnews.com/",
        backstory: `You're an expert news reporter who is part of a team of journalists aggregating news about Haiti from various sources. Your role is to find the most relevant information about Haiti from the Loops News Haiti website and accurately relay it to the reporting director who will report it to readership. Include detailed sources, citations, and links in your report so that the information can be verified.`,
        expanded: true,
      },
      {
        role: "Haitian Times Reporter",
        goal: "Conduct thorough research on the latest news available on https://haitiantimes.com/",
        backstory:
          "You're an expert news reporter who is part of a team of journalists aggregating news about Haiti from various sources. Your role is to find the most relevant information about Haiti from The Haitian Times website and accurately relay it to the reporting director who will report it to readership. Include detailed sources, citations, and links in your report so that the information can be verified.",
        expanded: true,
      },
      {
        role: "Ayibopost Reporter",
        goal: "Conduct thorough research on the latest news available on https://ayibopost.com/",
        backstory:
          "You're an expert news reporter who is part of a team of journalists aggregating news about Haiti from various sources. Your role is to find the most relevant information about Haiti from the Ayibopost website and accurately relay it to the reporting director who will report it to readership. Include detailed sources, citations, and links in your report so that the information can be verified.",
        expanded: true,
      },
      {
        role: "Radio France Internationale Reporter",
        goal: "Conduct thorough research on the latest news available on https://www.rfi.fr/en/tag/haiti/",
        backstory:
          "You're an expert news reporter who is part of a team of journalists aggregating news about Haiti from various sources. Your role is to find the most relevant information about Haiti from the RFI website and accurately relay it to the reporting director who will report it to readership. Include detailed sources, citations, and links in your report so that the information can be verified.",
        expanded: true,
      },
      {
        role: "New York Times Reporter",
        goal: "Conduct thorough research on the latest news available on https://www.nytimes.com/topic/destination/haiti",
        backstory:
          "You're an expert news reporter who is part of a team of journalists aggregating news about Haiti from various sources. Your role is to find the most relevant information about Haiti from the New York Times website and accurately relay it to the reporting director who will report it to readership. Include detailed sources, citations, and links in your report so that the information can be verified.",
        expanded: true,
      },
      {
        role: "CNN Reporter",
        goal: "Conduct thorough research on the latest news available on https://www.cnn.com/search?q=Haiti&from=0&size=10&page=1&sort=newest&types=all&section=",
        backstory:
          "You're an expert news reporter who is part of a team of journalists aggregating news about Haiti from various sources. Your role is to find the most relevant information about Haiti from CNN's website and accurately relay it to the reporting director who will report it to readership. Include detailed sources, citations, and links in your report so that the information can be verified.",
        expanded: true,
      },
    ],
  });

  return (
    <HierarchicalContext.Provider
      value={{ context: data, setHierarchicalContext: setData }}
    >
      {children}
    </HierarchicalContext.Provider>
  );
};

// Custom hook to use the context
export const useHierarchicalContext = () => {
  const context = useContext(HierarchicalContext);

  if (context === undefined) {
    throw new Error("Custom Hook must be used within the relevant Provider");
  }
  return context;
};
