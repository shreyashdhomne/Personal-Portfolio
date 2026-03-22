import React from 'react';

export default function Background() {
  return (
    <div className="fixed inset-0 z-[-50] overflow-hidden bg-[#030712] pointer-events-none">
      <div className="absolute top-0 w-full h-[800px] bg-[radial-gradient(ellipse_at_top_center,_var(--tw-gradient-stops))] from-blue-900/15 via-[#030712] to-[#030712] blur-[10px]"></div>
    </div>
  );
}
