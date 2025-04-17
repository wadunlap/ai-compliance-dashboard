import React from 'react';
import { ComplianceData } from '../types';

interface Props {
  data: ComplianceData;
}

const ComplianceScorecard: React.FC<Props> = ({ data }) => {
  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-500';
    return 'text-red-600';
  };

  const getCategoryBadge = (status: string) => {
    switch (status) {
      case 'good':
        return <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">Good</span>;
      case 'warning':
        return <span className="px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">Warning</span>;
      case 'critical':
        return <span className="px-2 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-800">Critical</span>;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Compliance Scorecard</h2>
      
      <div className="mb-6 text-center">
        <div className={`text-5xl font-bold ${getScoreColor(data.overallScore)}`}>
          {data.overallScore}%
        </div>
        <div className="text-gray-500 mt-1">Overall Compliance Score</div>
      </div>
      
      <div className="space-y-4">
        {Object.entries(data.categories).map(([key, category]) => (
          <div key={key} className="flex items-center justify-between">
            <div className="flex items-center">
              <span className="capitalize">{key}</span>
              <div className="ml-2">
                {getCategoryBadge(category.status)}
              </div>
            </div>
            <div className={`font-semibold ${getScoreColor(category.score)}`}>
              {category.score}%
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComplianceScorecard;