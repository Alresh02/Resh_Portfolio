import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-[rgba(57,255,20,0.18)] bg-[#050807]/90 backdrop-blur-md py-8">
      <div className="container mx-auto px-6 text-center text-sm text-muted-foreground">
        <p>
          &copy; {new Date().getFullYear()} Reshma A. Built with Next.js, Tailwind CSS, and Framer Motion.
        </p>
      </div>
    </footer>
  );
}
