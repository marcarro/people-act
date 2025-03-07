import { Person } from "@/types/person";
import { History, UserX } from "lucide-react";

interface UserHistorySidebarProps {
  personHistory: Person[];
}

export function UserHistorySidebar({ personHistory }: UserHistorySidebarProps) {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden sticky top-4">
      {/* Header */}
      <div className="p-4 border-b border-gray-100 dark:border-slate-700 flex items-center gap-2">
        <History className="w-5 h-5 text-indigo-500 dark:text-indigo-400" />
        <h2 className="text-lg font-medium text-gray-900 dark:text-white">Recent Users</h2>
      </div>
      
      {/* Content */}
      <div className="p-2">
        <div className="flex flex-col gap-1 max-h-[calc(100vh-200px)] overflow-y-auto">
          {personHistory.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-8 px-4 text-gray-500 dark:text-gray-400">
              <UserX className="w-12 h-12 mb-2 text-gray-300 dark:text-gray-600" />
              <p>No history yet</p>
              <p className="text-xs text-center mt-1">Users will appear here after you fetch them</p>
            </div>
          ) : (
            personHistory.toReversed().map((person) => (
              <div 
                key={person.id} 
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-700/50 transition-colors"
              >
                <div className="relative">
                  <img
                    src={person.picture}
                    alt={person.name}
                    className="w-10 h-10 rounded-full object-cover border border-gray-200 dark:border-slate-600"
                  />
                </div>
                <div className="flex-grow min-w-0">
                  <p className="text-gray-900 dark:text-white font-medium truncate">{person.name}</p>
                  <p className="text-gray-500 dark:text-gray-400 text-xs truncate">{person.email}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}