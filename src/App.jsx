import './App.css';
import { Route, Switch, Link } from 'wouter';
import { Toaster } from 'react-hot-toast';
import Home from './pages/Home';
import Settings from './pages/Settings';
import Error from './pages/Error';
import NotFound from './pages/NotFound';
import TailwindDemo from './pages/TailwindDemo';
import LucideDemo from './pages/LucideDemo';
import DateFnsDemo from './pages/DateFnsDemo';
import ToastDemo from './pages/ToastDemo';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Toaster position="top-right" toastOptions={{
        duration: 4000,
        style: {
          background: '#363636',
          color: '#fff',
        },
      }} />
      {/* Cabeçalho */}
      <header className="fixed top-0 w-full bg-gray-900 text-white shadow-md z-10">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="text-xl font-bold">React Template</div>
          <nav className="flex space-x-6">
            <Link href="/" className="hover:text-blue-400 transition-colors">Home</Link>
            <Link href="/settings" className="hover:text-blue-400 transition-colors">Settings</Link>
            <Link href="/error" className="hover:text-blue-400 transition-colors">Error</Link>
            <Link href="/not-found" className="hover:text-blue-400 transition-colors">Not Found</Link>
            <Link href="/tailwind-demo" className="hover:text-blue-400 transition-colors">Tailwind 4</Link>
            <Link href="/lucide-demo" className="hover:text-blue-400 transition-colors">Lucide Icons</Link>
            <Link href="/date-fns-demo" className="hover:text-blue-400 transition-colors">Date-fns</Link>
            <Link href="/toast-demo" className="hover:text-blue-400 transition-colors">Toast</Link>
          </nav>
        </div>
      </header>
      
      {/* Conteúdo */}
      <main className="container mx-auto px-4 pt-24 pb-16 flex-grow">
        <div className="bg-gray-800 bg-opacity-50 rounded-lg shadow-lg p-6">
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/settings" component={Settings} />
            <Route path="/error" component={Error} />
            <Route path="/tailwind-demo" component={TailwindDemo} />
            <Route path="/lucide-demo" component={LucideDemo} />
            <Route path="/date-fns-demo" component={DateFnsDemo} />
            <Route path="/toast-demo" component={ToastDemo} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </main>
      
      {/* Rodapé */}
      <footer className="w-full bg-gray-900 text-gray-400 py-4">
        <div className="container mx-auto px-4 text-center">
          <p>© 2025 React Template. Todos os direitos reservados.</p>
          <div className="mt-2">
            <a href="#" className="text-gray-400 hover:text-white mx-2">Termos</a>
            <a href="#" className="text-gray-400 hover:text-white mx-2">Privacidade</a>
            <a href="#" className="text-gray-400 hover:text-white mx-2">Contato</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
