import './App.css';
import { Route, Switch, Link } from 'wouter';
import { Toaster } from 'react-hot-toast';
import Home from './pages/Home';
import TailwindDemo from './pages/TailwindDemo';
import LucideDemo from './pages/LucideDemo';
import DateFnsDemo from './pages/DateFnsDemo';
import ToastDemo from './pages/ToastDemo';
import RtkQueryDemo from './pages/RtkQueryDemo';
import FormDemo from './pages/FormDemo';
import RadixDemo from './pages/RadixDemo';
import Settings from './pages/Settings';
import Error from './pages/Error';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Toaster position="top-center" toastOptions={{
        duration: 4000,
        style: {
          background: '#363636',
          color: '#fff',
        },
      }} />
      {/* Cabeçalho */}
      <header className="fixed top-0 w-full header-bg text-white shadow-md z-10">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="text-xl font-bold">React Template</div>
          <nav className="flex space-x-6">
            <Link href="/" className="link-hover transition-colors">Home</Link>
            <Link href="/tailwind-demo" className="link-hover transition-colors">Tailwind 4</Link>
            <Link href="/lucide-demo" className="link-hover transition-colors">Lucide Icons</Link>
            <Link href="/date-fns-demo" className="link-hover transition-colors">Date-fns</Link>
            <Link href="/toast-demo" className="link-hover transition-colors">Toast</Link>
            <Link href="/rtk-query-demo" className="link-hover transition-colors">RTK Query</Link>
            <Link href="/form-demo" className="link-hover transition-colors">Form Demo</Link>
            <Link href="/radix-demo" className="link-hover transition-colors">Radix UI</Link>
            <Link href="/settings" className="link-hover transition-colors">Settings</Link>
            <Link href="/error" className="link-hover transition-colors">Error</Link>
            <Link href="/not-found" className="link-hover transition-colors">Not Found</Link>
          </nav>
        </div>
      </header>
      
      {/* Conteúdo */}
      <main className="container mx-auto px-4 pt-24 pb-16 flex-grow">
        <div className="content-bg rounded-lg shadow-lg p-6">
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/tailwind-demo" component={TailwindDemo} />
            <Route path="/lucide-demo" component={LucideDemo} />
            <Route path="/date-fns-demo" component={DateFnsDemo} />
            <Route path="/toast-demo" component={ToastDemo} />
            <Route path="/rtk-query-demo" component={RtkQueryDemo} />
            <Route path="/form-demo" component={FormDemo} />
            <Route path="/radix-demo" component={RadixDemo} />
            <Route path="/settings" component={Settings} />
            <Route path="/error" component={Error} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </main>
      
      {/* Rodapé */}
      <footer className="w-full footer-bg footer-text py-4">
        <div className="container mx-auto px-4 text-center">
          <p>© 2025 React Template. Todos os direitos reservados.</p>
          <div className="mt-2">
            <a href="#" className="footer-text hover:text-white mx-2">Termos</a>
            <a href="#" className="footer-text hover:text-white mx-2">Privacidade</a>
            <a href="#" className="footer-text hover:text-white mx-2">Contato</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
