export const FloatingOrbs = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Indigo orb */}
      <div 
        className="absolute w-96 h-96 rounded-full blur-3xl animate-float opacity-15"
        style={{ 
          background: "hsl(239 84% 67%)",
          top: "10%",
          left: "20%",
        }}
      />
      
      {/* Purple orb */}
      <div 
        className="absolute w-72 h-72 rounded-full blur-3xl animate-float-slow opacity-12"
        style={{ 
          background: "hsl(270 91% 65%)",
          top: "40%",
          right: "15%",
        }}
      />
      
      {/* Cyan orb */}
      <div 
        className="absolute w-64 h-64 rounded-full blur-3xl animate-float-reverse opacity-8"
        style={{ 
          background: "hsl(188 94% 53%)",
          bottom: "20%",
          left: "30%",
        }}
      />
      
      {/* Radial gradients */}
      <div 
        className="absolute w-full h-full"
        style={{
          background: "radial-gradient(circle at 20% 20%, hsla(239, 84%, 67%, 0.1) 0%, transparent 50%)",
        }}
      />
      <div 
        className="absolute w-full h-full"
        style={{
          background: "radial-gradient(circle at 80% 80%, hsla(270, 91%, 65%, 0.08) 0%, transparent 50%)",
        }}
      />
    </div>
  );
};
