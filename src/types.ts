export interface ChecklistItem {
  id: string;
  stageId: string;
  text: string;
  detail?: string;
  defaultChecked?: boolean;
}

export interface TimelineStage {
  id: string;
  number: string;
  badge: string;
  timeframe: string;
  title: string;
  description: string;
  glowColor: 'secondary' | 'violet' | 'amber';
  items: ChecklistItem[];
}

export interface ApplicationTrack {
  id: string;
  badge: string;
  tag: string;
  targetRole: string;
  title: string;
  subtitle: string;
  description: string;
  exams: string;
  professorContact: string;
  professorContactRequired: boolean;
  timeline: string;
  bestFor: string;
  accentColor: string;
}

export interface LabInfo {
  id: string;
  name: string;
  professor: string;
  department: string;
  domain: 'ai_ml' | 'hci_graphics' | 'systems_robotics' | 'theory';
  domainLabel: string;
  description: string;
  keywords: string[];
  campus: string;
  link: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'Eligibility' | 'Exams' | 'Language' | 'Life in Tokyo';
}
