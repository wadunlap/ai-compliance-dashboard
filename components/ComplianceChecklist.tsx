import React from 'react';
import { ChecklistItem } from '../types';

interface Props {
  items: ChecklistItem[];
  onToggleItem: (id: number) => void;
}

const ComplianceChecklist: React.FC<Props> = ({ items, onToggleItem }) => {
  const isOverdue = (dueDate: string) => {
    return new Date(dueDate) < new Date() && !items.find(item => item.dueDate === dueDate)?.completed;
  };

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Compliance Checklist</h2>
      
      <ul className="divide-y divide-gray-200">
        {items.map((item) => (
          <li key={item.id} className="py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={item.completed}
                  onChange={() => onToggleItem(item.id)}
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                />
                <label className={`ml-3 ${item.completed ? 'line-through text-gray-400' : ''}`}>
                  {item.title}
                </label>
              </div>
              <div className={`text-sm ${isOverdue(item.dueDate) ? 'text-red-600 font-semibold' : 'text-gray-500'}`}>
                Due: {new Date(item.dueDate).toLocaleDateString()}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ComplianceChecklist;