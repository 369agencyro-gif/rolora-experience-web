const StatsSection = () => {
  const stats = [
    {
      value: "4/5",
      label: "clients strongly recommend us to their friends"
    },
    {
      value: "87%",
      label: "of clients see visible improvements in their skin"
    },
    {
      value: "10,000+",
      label: "treatments delivered with excellence"
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">
                {stat.value}
              </div>
              <p className="text-sm text-muted-foreground max-w-xs mx-auto">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
