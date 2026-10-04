import React from 'react'

const FailedTask = () => {
  return (
    <div className="rounded-3xl bg-white/10 backdrop-blur-md border border-white/10 p-6 text-white shadow-[0_20px_50px_rgba(0,0,0,0.35)] hover:-translate-y-2 transition-all duration-300">

      {/* Top */}
      <div className="flex items-center justify-between mb-5">
        <span className="px-3 py-1 rounded-full bg-red-500/15 text-red-300 text-xs font-semibold border border-red-400/20">
          Failed
        </span>

        <span className="text-sm text-gray-400">
          28 Sep 2026
        </span>
      </div>

      {/* Heading */}
      <h2 className="text-2xl font-bold mb-3">
        Practice JavaScript
      </h2>

      {/* Description */}
      <p className="text-gray-400 leading-relaxed mb-6">
        Complete JavaScript practice exercises covering arrays,
        objects, functions and DOM manipulation.
      </p>

      {/* Failed */}
      <button className="w-full py-2.5 rounded-xl bg-red-500/15 text-red-300 border border-red-400/20">
        ✕ Task Failed
      </button>

    </div>
  )
}

export default FailedTask