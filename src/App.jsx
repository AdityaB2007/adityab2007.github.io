import { Education } from './components/Education';
import { Experience } from './components/Experience';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { Projects } from './components/Projects';
import { Publications } from './components/Publications';
import { StackStrip } from './components/StackStrip';
import { useTheme } from './hooks/useTheme';

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen">
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main className="mx-auto max-w-4xl px-5 sm:px-6">
        <Hero />
        <StackStrip />
        <Experience />
        <Projects />
        <Publications />
        <Education />
      </main>
      <Footer />
    </div>
  );
}
