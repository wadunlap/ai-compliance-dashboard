import React from 'react';
import { ModelData } from '../types';

interface Props {
  models: ModelData[];
}

const ModelMonitoring: React.FC<Props> = ({ models }) => {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Model Monitoring</h2>
      
      <div className="space-y-6">
        {models.map((model) => (
          <div key={model.id} className="border rounded-lg p-4">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-medium">{model.name}</h3>
              <span className="text-sm text-gray-500">
                Last audit: {new Date(model.lastAudit).toLocaleDateString()}
              </span>
            </div>
            
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className={`h-full rounded-full ${
                  model.complianceStatus === 'compliant' ? 'bg-green-500' : 
                  model.complianceStatus === 'partial' ? 'bg-yellow-500' : 'bg-red-500'
                }`}
                style={{ width: `${model.complianceStatus === 'compliant' ? 100 : 
                  model.complianceStatus === 'partial' ? 50 : 20}%` }}
              />
            </div>
            
            <div className="mt-4 text-sm">
              <div className="flex justify-between">
                <span>Compliance</span>
                <span className="font-medium">
                  {model.complianceStatus === 'compliant' ? '100%' : 
                   model.complianceStatus === 'partial' ? '50%' : '20%'}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ModelMonitoring;