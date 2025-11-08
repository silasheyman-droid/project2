"use client";

import React from 'react';

// This is the default exported React Component that Next.js expects.
export default function HomePage() {
  // -----------------------------------------------------------------
  // 💡 CONVEX HOOKS GO HERE!
  //
  // Example (Uncomment and import api/useQuery once your setup is complete):
  // const tasks = useQuery(api.tasks.get);
  // 
  // You should also be running 'npx convex dev' in a separate terminal.
  // -----------------------------------------------------------------

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-lg bg-white shadow-xl rounded-xl p-8 space-y-6 transition-all duration-300 transform hover:shadow-2xl">
        
        <header className="text-center space-y-2">
          <h1 className="text-3xl font-extrabold text-indigo-700 sm:text-4xl">
            Project Initialized
          </h1>
          <p className="text-gray-500 text-lg">
            Amburgerrrr
          </p>
        </header>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">
            Next Steps
          </h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li className="flex items-start">
              <span className="text-indigo-500 mr-2 mt-1">✓</span> 
              Check that **`npx convex dev`** is running in your terminal.
            </li>
            <li className="flex items-start">
              <span className="text-indigo-500 mr-2 mt-1">✓</span> 
              Verify your **`.env.local`** has `NEXT_PUBLIC_CONVEX_URL`.
            </li>
            <li className="flex items-start">
              <span className="text-indigo-500 mr-2 mt-1">✓</span> 
              Re-add your Convex data fetching logic where the comment block is above.
            </li>
            <li className="flex items-start">
              <span className="text-indigo-500 mr-2 mt-1">✓</span> 
              Ensure your `app/layout.tsx` is wrapping the children in **`ConvexClientProvider`**.
            </li>
          </ul>
        </section>
        
        {/* Placeholder UI for displaying data later */}
        <div className="mt-8 pt-4 border-t border-dashed">
          <p className="text-center text-sm text-gray-400">
            {/* If your Convex data (like the 'tasks' array) loads successfully, you can replace this line. */}
            Data Loading Placeholder (Expected to disappear when Convex data is fetched)
          </p>
        </div>

      </div>
    </div>
  );
}