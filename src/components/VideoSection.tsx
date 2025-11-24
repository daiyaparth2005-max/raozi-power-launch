const VideoSection = () => {
  return (
    <section className="relative py-24 bg-gradient-to-br from-muted/20 via-background to-muted/20 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-brand-purple/30 to-brand-cyan/30 rounded-full blur-3xl animate-pulse-glow" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-foreground via-accent to-brand-electric bg-clip-text text-transparent">
              Experience RAOZI
            </h2>
            <p className="text-xl text-muted-foreground">
              Witness the power of premium energy
            </p>
          </div>
          
          <div className="relative w-full rounded-3xl overflow-hidden shadow-[0_0_60px_rgba(238,91,43,0.3)] border-2 border-accent/30 hover:border-accent/60 hover:shadow-[0_0_80px_rgba(238,91,43,0.5)] transition-all duration-500 animate-fade-in group" style={{ paddingBottom: "56.25%", animationDelay: '200ms' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-brand-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="RAOZI Energy Drink"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <p className="text-center text-muted-foreground mt-8 text-lg font-medium animate-fade-in" style={{ animationDelay: '400ms' }}>
            Watch how RAOZI is transforming energy for leaders worldwide
          </p>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
