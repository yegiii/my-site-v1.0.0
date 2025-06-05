import AboutContent from "../components/contents/AboutContent";
import ContactContent from "../components/contents/ContactContent";
import LinksContent from "../components/contents/LinksContent";
import ProjectsContent from "../components/contents/ProjectsContent";
import WorksContent from "../components/contents/WorksContent";

export const componentMap = {
  LinksContent,
  WorksContent,
  ProjectsContent,
  AboutContent,
  ContactContent,
};

export type ComponentKeys = keyof typeof componentMap;

export const SVG_SIZE = 600;
