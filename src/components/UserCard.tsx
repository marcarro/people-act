import { Person } from "@/types/person";
import { Eye, EyeOff, RotateCw, Mail, Phone, Calendar, User } from "lucide-react";
import { useState } from "react";

interface UserCardProps {
  currentPerson: Person | null;
  loading: boolean;
  error: string | null;
  onFetchNewUser: () => void;
}

export function UserCard({
  currentPerson,
  loading,
  error,
  onFetchNewUser,
}: UserCardProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden">
      <div className="p-6 flex justify-between items-center border-b border-gray-100 dark:border-slate-700">
        <h2 className="text-xl font-medium text-gray-900 dark:text-white">Random User</h2>
        <button
          onClick={onFetchNewUser}
          className="inline-flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg transition-colors font-medium text-sm"
          disabled={loading}
        >
          <RotateCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
          {loading ? "Loading" : "New User"}
        </button>
      </div>

      <div className="p-6">
        {loading && !currentPerson ? (
          <div className="flex flex-col items-center py-12">
            <div className="w-16 h-16 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin mb-4"></div>
            <p className="text-gray-500 dark:text-gray-400">Fetching user data...</p>
          </div>
        ) : error && !currentPerson ? (
          <div className="bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 p-4 rounded-lg">
            <p className="text-center">{error}</p>
          </div>
        ) : currentPerson ? (
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-shrink-0 flex justify-center">
              <div className="relative">
                <img
                  src={currentPerson.picture}
                  alt={currentPerson.name}
                  className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-white dark:border-slate-700 shadow-md"
                />
              </div>
            </div>

            <div className="flex-grow">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{currentPerson.name}</h3>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                    <p className="text-gray-900 dark:text-white">{currentPerson.email}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
                    <p className="text-gray-900 dark:text-white">{currentPerson.phone}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center text-amber-600 dark:text-amber-400">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Birthday</p>
                    <p className="text-gray-900 dark:text-white">
                      {new Date(currentPerson.birthday).toLocaleDateString()} 
                      <span className="ml-2 text-gray-500 dark:text-gray-400">({currentPerson.age} years)</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400">
                    <User className="w-5 h-5" />
                  </div>
                  <div className="flex-grow">
                    <p className="text-sm text-gray-500 dark:text-gray-400">Password</p>
                    <div className="flex items-center">
                      <p className="text-gray-900 dark:text-white font-mono">
                        {showPassword ? currentPerson.password : "••••••••••••"}
                      </p>
                      <button 
                        onClick={() => setShowPassword(!showPassword)}
                        className="ml-3 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                      >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="py-16">
            <p className="text-center text-gray-500 dark:text-gray-400">Click "New User" to fetch random user data</p>
          </div>
        )}
      </div>
    </div>
  );
}