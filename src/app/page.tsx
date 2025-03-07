"use client";
import { usePeopleApi } from "@/hooks/usePeopleApi";
import { UserCard } from "@/components/UserCard";
import { UserHistorySidebar } from "@/components/UserHistorySidebar";

export default function Home() {
  const { currentPerson, personHistory, error, loading, fetchData } = usePeopleApi();
  
  return (
    <div className="min-h-screen p-4 md:p-8 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-7xl mx-auto">

        <header className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white text-center">
            People
          </h1>
        </header>
        

        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-6">
          <div className="lg:self-start">
            <UserHistorySidebar personHistory={personHistory} />
          </div>
          <div className="lg:h-full">
            <UserCard
              currentPerson={currentPerson}
              loading={loading}
              error={error}
              onFetchNewUser={fetchData}
            />
          </div>
        </div>
      </div>
    </div>
  );
}