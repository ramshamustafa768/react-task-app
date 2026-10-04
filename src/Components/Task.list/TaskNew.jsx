import React from 'react'

const Tasknew = () => {
  return (
    <div className="rounded-3xl bg-white/10 backdrop-blur-md border border-white/10 p-6 text-white shadow-[0_20px_50px_rgba(0,0,0,0.35)] hover:-translate-y-2 transition-all duration-300">

      {/* Top */}
      <div className="flex items-center justify-between mb-5">
        <span className="px-3 py-1 rounded-full bg-yellow-500/15 text-yellow-300 text-xs font-semibold border border-yellow-400/20">
          New Task
        </span>

        <span className="text-sm text-gray-400">
          25 Sep 2026
        </span>
      </div>

      {/* Heading */}
      <h2 className="text-2xl font-bold mb-3">
        Build Todo Application
      </h2>

      {/* Description */}
      <p className="text-gray-400 leading-relaxed mb-6">
        Create a modern Todo application using React state,
        components and local storage.
      </p>

      {/* Button */}
      <button className="w-full py-2.5 rounded-xl bg-blue-500/15 text-blue-300 border border-blue-400/20 hover:bg-blue-500 hover:text-white transition">
        Accept Task
      </button>

    </div>
  )
}

export default Tasknew