// types.ts
export interface ComplianceCategory {
    score: number;
    status: 'good' | 'warning' | 'critical';
  }
  
  export interface ComplianceData {
    overallScore: number;
    categories: {
      transparency: ComplianceCategory;
      fairness: ComplianceCategory;
      privacy: ComplianceCategory;
      security: ComplianceCategory;
    };
  }
  
  export interface ModelData {
    id: string;
    name: string;
    riskLevel: 'low' | 'medium' | 'high';
    complianceStatus: 'compliant' | 'partial' | 'non-compliant';
    lastAudit: string;
    issues: number;
  }
  
  export interface ChecklistItem {
    id: number;
    title: string;
    completed: boolean;
    dueDate: string;
  }