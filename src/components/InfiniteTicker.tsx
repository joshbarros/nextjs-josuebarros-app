interface InfiniteTickerProps {
  items: string[];
  speed?: "normal" | "slow";
}

export const InfiniteTicker = ({ items, speed = "normal" }: InfiniteTickerProps) => {
  const duplicatedItems = [...items, ...items];
  const animationClass = speed === "slow" ? "animate-ticker-slow" : "animate-ticker";

  return (
    <div className="overflow-hidden py-5 border-y border-foreground/10">
      <div className={`flex whitespace-nowrap ${animationClass}`}>
        {duplicatedItems.map((item, index) => (
          <span key={index} className="flex items-center">
            <span className="font-mono text-sm text-foreground-secondary px-6">
              {item}
            </span>
            <span className="text-primary">•</span>
          </span>
        ))}
      </div>
    </div>
  );
};
