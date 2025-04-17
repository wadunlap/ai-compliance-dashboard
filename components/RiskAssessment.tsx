import React from 'react';
import { ModelData } from '../types';

interface Props {
  models: ModelData[];
}

const RiskAssessment: React.FC<Props> = ({ models }) => {
  const getRiskBadge = (risk: string) => {
    switch (risk) {
      case 'low':
        return <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">Low</span>;
      case 'medium':
        return <span className="px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">Medium</span>;
      case 'high':
        return <span className="px-2 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-800">High</span>;
      default:
        return null;
    }
  };

  const getComplianceStatus = (status: string) => {
    switch (status) {
      case 'compliant':
        return <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">Compliant</span>;
      case 'partial':
        return <span className="px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">Partial</span>;
      case 'non-compliant':
        return <span className="px-2 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-800">Non-compliant</span>;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">AI Risk Assessment</h2>
      
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Model</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Risk Level</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Issues</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {models.map((model) => (
              <tr key={model.id}>
                <td className="px-6 py-4 whitespace-nowrap font-medium">{model.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {getRiskBadge(model.riskLevel)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {getComplianceStatus(model.complianceStatus)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {model.issues > 0 ? (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                      {model.issues}
                    </span>
                  ) : (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      {model.issues}
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RiskAssessment;