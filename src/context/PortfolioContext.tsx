"use client";
import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import { personal as defaultPersonal } from "@/data/personal";
import { experience as defaultExperience, education as defaultEducation } from "@/data/experience";
import { projects as defaultProjects, Project } from "@/data/projects";
import { publications as defaultPublications } from "@/data/publications";
import { skillGroups as defaultSkills } from "@/data/skills";
import { achievements as defaultAchievements, extracurricular as defaultExtra } from "@/data/achievements";

const STORAGE_KEY = "portfolio_data_v1";
const DEFAULT_PASSWORD = "emran1234";

export type PersonalData = typeof defaultPersonal;
export type ExperienceItem = (typeof defaultExperience)[number];
export type EducationItem = (typeof defaultEducation)[number];
export type PublicationItem = (typeof defaultPublications)[number];
export type SkillGroup = (typeof defaultSkills)[number];
export type AchievementItem = (typeof defaultAchievements)[number];
export type ExtraItem = (typeof defaultExtra)[number];

export interface PortfolioData {
  personal: PersonalData;
  experience: ExperienceItem[];
  education: EducationItem[];
  projects: Project[];
  publications: PublicationItem[];
  skills: SkillGroup[];
  achievements: AchievementItem[];
  extracurricular: ExtraItem[];
}

interface Ctx {
  data: PortfolioData;
  isEditMode: boolean;
  enterEditMode: (pw: string) => boolean;
  exitEditMode: () => void;
  updatePersonal: (updates: Partial<PersonalData>) => void;
  setSection: <K extends keyof PortfolioData>(key: K, value: PortfolioData[K]) => void;
  resetAll: () => void;
  exportData: () => void;
}

const defaults: PortfolioData = {
  personal: defaultPersonal,
  experience: defaultExperience,
  education: defaultEducation,
  projects: defaultProjects,
  publications: defaultPublications,
  skills: defaultSkills,
  achievements: defaultAchievements,
  extracurricular: defaultExtra,
};

const PortfolioCtx = createContext<Ctx>({} as Ctx);

export function PortfolioProvider({ children }: { children: React.ReactNode }) {
  const [data, setData] = useState<PortfolioData>(defaults);
  const [isEditMode, setEditMode] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) setData({ ...defaults, ...JSON.parse(saved) });
    } catch {}
  }, []);

  const persist = useCallback((next: PortfolioData) => {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(next)); } catch {}
    setData(next);
  }, []);

  const updatePersonal = useCallback((updates: Partial<PersonalData>) => {
    setData(prev => {
      const next = { ...prev, personal: { ...prev.personal, ...updates } };
      persist(next);
      return next;
    });
  }, [persist]);

  const setSection = useCallback(<K extends keyof PortfolioData>(key: K, value: PortfolioData[K]) => {
    setData(prev => {
      const next = { ...prev, [key]: value };
      persist(next);
      return next;
    });
  }, [persist]);

  const enterEditMode = useCallback((pw: string) => {
    const stored = localStorage.getItem("portfolio_edit_pw") || DEFAULT_PASSWORD;
    if (pw === stored) { setEditMode(true); return true; }
    return false;
  }, []);

  const exitEditMode = useCallback(() => setEditMode(false), []);

  const resetAll = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY);
    setData(defaults);
  }, []);

  const exportData = useCallback(() => {
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url; a.download = "portfolio-data.json"; a.click();
    URL.revokeObjectURL(url);
  }, [data]);

  return (
    <PortfolioCtx.Provider value={{ data, isEditMode, enterEditMode, exitEditMode, updatePersonal, setSection, resetAll, exportData }}>
      {children}
    </PortfolioCtx.Provider>
  );
}

export const usePortfolio = () => useContext(PortfolioCtx);
