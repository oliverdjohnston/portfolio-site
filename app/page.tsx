import { ThemeToggle } from '@/components/theme-toggle';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="flex justify-end p-4">
        <ThemeToggle />
      </header>
      <main className="flex flex-1 items-center justify-center p-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Welcome</h1>
        </div>
      </main>
    </div>
  );
}
