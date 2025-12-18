const Index = () => {
  return (
    <div className="min-h-screen bg-radial flex flex-col items-center justify-center relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-96 h-96 rounded-full bg-primary/10 blur-3xl animate-pulse-glow" />
      </div>

      {/* Content */}
      <main className="relative z-10 text-center px-6">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-medium tracking-tight text-gradient-gold animate-fade-in-up">
          Hello World
        </h1>
        <p className="mt-6 text-lg md:text-xl text-muted-foreground font-body font-light tracking-wide animate-fade-in-up-delay">
          Welcome to your new project
        </p>
      </main>

      {/* Subtle decorative line */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-fade-in-up-delay">
        <div className="w-px h-16 bg-gradient-to-b from-primary/50 to-transparent" />
      </div>
    </div>
  );
};

export default Index;
