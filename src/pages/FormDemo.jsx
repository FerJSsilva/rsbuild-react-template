import { useForm } from 'react-hook-form';
import { useState } from 'react';

const FormDemo = () => {
  const [formData, setFormData] = useState(null);
  
  const { 
    register, 
    handleSubmit, 
    formState: { errors },
    reset
  } = useForm();
  
  const onSubmit = (data) => {
    setFormData(data);
    // Em uma aplicação real, aqui você enviaria os dados para uma API
    console.log(data);
    // Opcional: resetar o formulário após envio
    // reset();
  };
  
  return (
    <div className="max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-6">React Hook Form Demo</h1>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            Nome
          </label>
          <input
            id="name"
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("name", { required: "Nome é obrigatório" })}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
          )}
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("email", { 
              required: "Email é obrigatório",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Email inválido"
              }
            })}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-1">
            Mensagem
          </label>
          <textarea
            id="message"
            rows="4"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("message", { 
              required: "Mensagem é obrigatória",
              minLength: {
                value: 10,
                message: "A mensagem deve ter pelo menos 10 caracteres"
              }
            })}
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
          )}
        </div>
        
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
        >
          Enviar
        </button>
      </form>
      
      {formData && (
        <div className="mt-8 p-4 border border-gray-300 rounded-md bg-blue-600">
          <h2 className="text-lg font-medium mb-2">Dados Enviados:</h2>
          <pre className="bg-blue-600 p-2 rounded overflow-x-auto">
            {JSON.stringify(formData, null, 2)}
          </pre>
        </div>
      )}
      
      <div className="mt-8">
        <h2 className="text-xl font-medium mb-4">Recursos do React Hook Form:</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Gerenciamento de estado do formulário</li>
          <li>Validação declarativa</li>
          <li>Mensagens de erro personalizáveis</li>
          <li>Performance otimizada (sem re-renderizações desnecessárias)</li>
          <li>Integração fácil com bibliotecas de UI</li>
        </ul>
      </div>
    </div>
  );
};

export default FormDemo;
