import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
const ComingSoon = () => {
  const {
    ref,
    isVisible
  } = useScrollAnimation({
    threshold: 0.2
  });
  return <section ref={ref} className={`py-20 bg-slate-900 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-black text-orange-600 mb-4">
            COMING SOON!
          </h2>
          <p className="text-xl text-slate-400">
            Expanding our energy lineup
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="relative p-8 bg-slate-800/50 rounded-2xl border border-slate-700/50 hover:border-orange-600/50 transition-all">
            <Badge className="absolute -top-3 right-8 bg-orange-600 hover:bg-orange-700 text-white px-4 py-1 text-sm font-bold">NEW FLAVOUR
          </Badge>
            <h3 className="text-3xl md:text-4xl font-black text-white mb-2">
              RAOZI CRANBERRY
            </h3>
            <p className="text-lg text-slate-400">
              250ML
            </p>
          </div>
        </div>
      </div>
    </section>;
};
export default ComingSoon;