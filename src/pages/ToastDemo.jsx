import { useState } from 'react';
import toast from 'react-hot-toast';
import { FiCheck, FiAlertTriangle, FiInfo, FiX } from 'react-icons/fi';

const ToastDemo = () => {
  const [loading, setLoading] = useState(false);

  // Toast básico
  const showBasicToast = () => {
    toast('Isso é um toast básico');
  };

  // Toast de sucesso
  const showSuccessToast = () => {
    toast.success('Operação realizada com sucesso!');
  };

  // Toast de erro
  const showErrorToast = () => {
    toast.error('Ocorreu um erro ao processar sua solicitação.');
  };

  // Toast com promessa
  const showPromiseToast = () => {
    setLoading(true);
    
    toast.promise(
      new Promise((resolve, reject) => {
        setTimeout(() => {
          // Simulando uma operação assíncrona
          const success = Math.random() > 0.3; // 70% de chance de sucesso
          if (success) {
            resolve('Dados carregados com sucesso!');
          } else {
            reject(new Error('Falha ao carregar dados'));
          }
          setLoading(false);
        }, 2000);
      }),
      {
        loading: 'Carregando dados...',
        success: (data) => data,
        error: (err) => err.message,
      }
    );
  };

  // Toast personalizado com ícone
  const showCustomToast = () => {
    toast.custom((t) => (
      <div
        className={`${
          t.visible ? 'animate-enter' : 'animate-leave'
        } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
      >
        <div className="flex-1 w-0 p-4">
          <div className="flex items-start">
            <div className="flex-shrink-0 pt-0.5">
              <FiInfo className="h-6 w-6 text-blue-500" />
            </div>
            <div className="ml-3 flex-1">
              <p className="text-sm font-medium text-gray-900">
                Notificação personalizada
              </p>
              <p className="mt-1 text-sm text-gray-500">
                Este é um exemplo de toast totalmente personalizado com ícone.
              </p>
            </div>
          </div>
        </div>
        <div className="flex border-l border-gray-200">
          <button
            onClick={() => toast.dismiss(t.id)}
            className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <FiX className="h-5 w-5" />
          </button>
        </div>
      </div>
    ));
  };

  // Toast com ação
  const showToastWithAction = () => {
    toast(
      (t) => (
        <span className="flex items-center gap-2">
          Deseja continuar? 
          <button 
            onClick={() => {
              toast.success('Ação confirmada!');
              toast.dismiss(t.id);
            }}
            className="px-2 py-1 bg-green-500 text-white rounded-md text-xs"
          >
            Sim
          </button>
          <button 
            onClick={() => {
              toast.error('Ação cancelada');
              toast.dismiss(t.id);
            }}
            className="px-2 py-1 bg-red-500 text-white rounded-md text-xs"
          >
            Não
          </button>
        </span>
      ),
      {
        duration: 10000, // Duração maior para dar tempo de interagir
      }
    );
  };

  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold mb-6">Demonstração do React Hot Toast</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div className="bg-gray-700 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Toasts Básicos</h2>
          <div className="flex flex-col gap-4">
            <button
              onClick={showBasicToast}
              className="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-md transition-colors"
            >
              Toast Básico
            </button>
            
            <button
              onClick={showSuccessToast}
              className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-md transition-colors"
            >
              Toast de Sucesso
            </button>
            
            <button
              onClick={showErrorToast}
              className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md transition-colors"
            >
              Toast de Erro
            </button>
          </div>
        </div>
        
        <div className="bg-gray-700 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Toasts Avançados</h2>
          <div className="flex flex-col gap-4">
            <button
              onClick={showPromiseToast}
              disabled={loading}
              className={`px-4 py-2 ${
                loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'
              } text-white rounded-md transition-colors`}
            >
              {loading ? 'Carregando...' : 'Toast com Promessa'}
            </button>
            
            <button
              onClick={showCustomToast}
              className="px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-md transition-colors"
            >
              Toast Personalizado
            </button>
            
            <button
              onClick={showToastWithAction}
              className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-md transition-colors"
            >
              Toast com Ação
            </button>
          </div>
        </div>
      </div>
      
      <div className="mt-8 p-6 bg-gray-700 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Como usar</h2>
        <div className="text-left bg-gray-800 p-4 rounded-md overflow-auto">
          <pre className="text-sm">
            <code>
{`// Importar
import toast from 'react-hot-toast';

// Toast básico
toast('Mensagem simples');

// Toast de sucesso
toast.success('Operação realizada com sucesso!');

// Toast de erro
toast.error('Ocorreu um erro!');

// Toast com promessa
toast.promise(
  apiCall(),
  {
    loading: 'Carregando...',
    success: 'Dados carregados!',
    error: 'Erro ao carregar dados',
  }
);`}
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default ToastDemo;
