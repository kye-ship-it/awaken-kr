export default function TransitionSeparator() {
  return (
    <div className="flex flex-col items-center py-16 md:py-20 lg:py-24 px-6">
      {/* Three gold dots */}
      <div className="flex items-center gap-3 mb-6 md:mb-8">
        <div className="w-1.5 h-1.5 rounded-full bg-gold/60" />
        <div className="w-2.5 h-2.5 rounded-full bg-gold/80" />
        <div className="w-1.5 h-1.5 rounded-full bg-gold/60" />
      </div>

      {/* Text */}
      <p className="font-[family-name:var(--font-dm-serif)] text-[20px] md:text-[24px] lg:text-[28px] text-white text-center mb-1 md:mb-2">
        더 깊이 들어갈 준비가 되셨다면
      </p>
      <p className="font-[family-name:var(--font-dm-serif)] text-[20px] md:text-[24px] lg:text-[28px] text-gold-light text-center">
        Awaken이 기다리고 있습니다
      </p>

      {/* Gold gradient line */}
      <div
        className="h-px w-[120px] mt-8 md:mt-10"
        style={{
          background:
            "linear-gradient(90deg, transparent, var(--color-gold), transparent)",
        }}
      />
    </div>
  );
}
