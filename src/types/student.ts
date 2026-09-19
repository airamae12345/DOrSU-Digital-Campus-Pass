export interface StudentProfile {
  name: string;
  idNumber: string;
  program: string;
  yearLevel: string;
  avatarUrl: string | number;
  campus: string;
}

export interface StatusBadgeProps {
  isActive: boolean;
}