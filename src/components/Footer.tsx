export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/5 py-12 px-6">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[10px] font-medium tracking-[0.3em] text-muted uppercase">
          © 2026 Siam Afrid. All Rights Reserved.
        </p>
        <div className="flex space-x-8">
          <a href="#" className="text-[10px] font-medium tracking-[0.3em] text-muted uppercase hover:text-white transition-colors">Privacy</a>
          <a href="#" className="text-[10px] font-medium tracking-[0.3em] text-muted uppercase hover:text-white transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  );
}
