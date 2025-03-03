import { useState } from 'react';

const TailwindDemo = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState('container');

  return (
    <div className="space-y-8">
      <h1>Tailwind CSS 4 - Novas Funcionalidades</h1>
      <p className="text-gray-300">
        Esta página demonstra as novas funcionalidades do Tailwind CSS 4 com comentários explicativos.
      </p>

      {/* Tabs de navegação */}
      <div className="flex flex-wrap gap-2">
        {['container', 'variantes', 'has', 'subgrid', 'lightning', 'transitions'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-md transition-colors ${
              activeTab === tab
                ? 'bg-blue-600 text-white'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Conteúdo das tabs */}
      <div className="bg-gray-800 rounded-lg p-6">
        {/* 1. Container Queries - Elementos que respondem ao tamanho do container, não da viewport */}
        {activeTab === 'container' && (
          <div>
            <h2 className="text-xl font-bold mb-4">Container Queries</h2>
            <p className="mb-4">
              Container Queries permitem que elementos respondam ao tamanho de seus containers,
              não apenas ao tamanho da viewport. Isso é perfeito para componentes reutilizáveis.
            </p>

            {/* Demonstração de Container Queries */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              {/* Container pequeno */}
              <div className="border-2 border-gray-500 p-4 rounded-lg @container">
                <p className="text-sm text-gray-400 mb-2">Container pequeno</p>
                {/* O texto muda de cor baseado no tamanho do container */}
                <p className="@sm:text-blue-400 @md:text-green-400 @lg:text-purple-400 @xl:text-red-400">
                  Este texto muda de cor baseado no tamanho do container!
                </p>
                {/* Os botões mudam de layout baseado no tamanho do container */}
                <div className="mt-4 @sm:flex @sm:flex-col @md:flex-row @md:space-x-2 space-y-2 @md:space-y-0">
                  <button className="bg-blue-600 text-white px-4 py-2 rounded">Botão 1</button>
                  <button className="bg-green-600 text-white px-4 py-2 rounded">Botão 2</button>
                </div>
              </div>

              {/* Container grande */}
              <div className="border-2 border-gray-500 p-4 rounded-lg @container">
                <p className="text-sm text-gray-400 mb-2">Container maior</p>
                {/* O texto muda de cor baseado no tamanho do container */}
                <p className="@sm:text-blue-400 @md:text-green-400 @lg:text-purple-400 @xl:text-red-400">
                  Este texto muda de cor baseado no tamanho do container!
                </p>
                {/* Os botões mudam de layout baseado no tamanho do container */}
                <div className="mt-4 @sm:flex @sm:flex-col @md:flex-row @md:space-x-2 space-y-2 @md:space-y-0">
                  <button className="bg-blue-600 text-white px-4 py-2 rounded">Botão 1</button>
                  <button className="bg-green-600 text-white px-4 py-2 rounded">Botão 2</button>
                </div>
              </div>
            </div>

            <div className="bg-gray-700 p-4 rounded-lg">
              <p className="text-sm font-mono mb-2">Código:</p>
              <pre className="text-xs overflow-x-auto p-2 bg-gray-900 rounded">
                {`<div className="@container">
  <p className="@sm:text-blue-400 @md:text-green-400 @lg:text-purple-400">
    Este texto muda de cor baseado no tamanho do container!
  </p>
  <div className="@sm:flex-col @md:flex-row">
    <button>Botão 1</button>
    <button>Botão 2</button>
  </div>
</div>`}
              </pre>
            </div>
          </div>
        )}

        {/* 2. Variantes Aninhadas - Combinação de variantes como hover:dark: */}
        {activeTab === 'variantes' && (
          <div>
            <h2 className="text-xl font-bold mb-4">Variantes Aninhadas</h2>
            <p className="mb-4">
              O Tailwind 4 permite combinar variantes de forma mais poderosa, como hover:dark:
              para aplicar estilos quando o mouse está sobre um elemento no modo escuro.
            </p>

            <div className="flex flex-wrap gap-4 mb-6">
              {/* Botão com variantes aninhadas */}
              <button className="bg-blue-500 hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800 text-white px-4 py-2 rounded">
                hover:dark: (Simule modo escuro)
              </button>

              {/* Botão com variantes aninhadas mais complexas */}
              <button className="bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 dark:bg-green-700 dark:hover:bg-green-800 dark:focus:ring-green-300 text-white px-4 py-2 rounded">
                hover:focus:dark: (Complexo)
              </button>

              {/* Grupo com variantes aninhadas */}
              <div className="group bg-gray-700 p-4 rounded hover:bg-gray-600">
                <p className="text-gray-300 group-hover:text-white">Texto normal</p>
                <p className="text-blue-400 group-hover:dark:text-blue-300">Texto com group-hover:dark:</p>
              </div>
            </div>

            <div className="bg-gray-700 p-4 rounded-lg">
              <p className="text-sm font-mono mb-2">Código:</p>
              <pre className="text-xs overflow-x-auto p-2 bg-gray-900 rounded">
                {`<button className="bg-blue-500 hover:bg-blue-600 
                 dark:bg-blue-700 dark:hover:bg-blue-800">
  hover:dark: (Simule modo escuro)
</button>

<div className="group hover:bg-gray-600">
  <p className="group-hover:dark:text-blue-300">
    Texto com group-hover:dark:
  </p>
</div>`}
              </pre>
            </div>
          </div>
        )}

        {/* 3. Seletor :has() - Estilização baseada em elementos filhos */}
        {activeTab === 'has' && (
          <div>
            <h2 className="text-xl font-bold mb-4">Seletor :has()</h2>
            <p className="mb-4">
              O Tailwind 4 suporta o seletor :has() do CSS, que permite estilizar elementos
              baseados em seus filhos. Isso era impossível antes no CSS puro.
            </p>

            {/* Demonstração do seletor :has() */}
            <div className="space-y-4 mb-6">
              {/* Formulário que muda de estilo baseado no estado do checkbox */}
              <div className="border-2 border-gray-500 p-4 rounded-lg has-[input:checked]:border-green-500 has-[input:checked]:bg-green-900/20">
                <div className="flex items-center mb-2">
                  <input type="checkbox" id="terms" className="mr-2" />
                  <label htmlFor="terms">Aceitar termos</label>
                </div>
                <p className="text-sm text-gray-400">
                  O container muda quando o checkbox está marcado (has-[input:checked])
                </p>
              </div>

              {/* Container que muda quando o input tem foco */}
              <div className="border-2 border-gray-500 p-4 rounded-lg has-[input:focus]:border-blue-500 has-[input:focus]:bg-blue-900/20">
                <input
                  type="text"
                  placeholder="Foque aqui..."
                  className="bg-gray-700 border border-gray-600 rounded px-3 py-2 w-full"
                />
                <p className="text-sm text-gray-400 mt-2">
                  O container muda quando o input tem foco (has-[input:focus])
                </p>
              </div>

              {/* Lista que estiliza itens baseados em seu conteúdo */}
              <ul className="space-y-2">
                <li className="p-2 rounded has-[.priority]:bg-red-900/30 border border-gray-600">
                  Item normal
                </li>
                <li className="p-2 rounded has-[.priority]:bg-red-900/30 border border-gray-600">
                  <span className="priority text-red-400">Prioridade:</span> Item importante
                </li>
                <li className="p-2 rounded has-[.priority]:bg-red-900/30 border border-gray-600">
                  Item normal
                </li>
              </ul>
            </div>

            <div className="bg-gray-700 p-4 rounded-lg">
              <p className="text-sm font-mono mb-2">Código:</p>
              <pre className="text-xs overflow-x-auto p-2 bg-gray-900 rounded">
                {`<div className="border has-[input:checked]:border-green-500 
             has-[input:checked]:bg-green-900/20">
  <input type="checkbox" id="terms" />
  <label htmlFor="terms">Aceitar termos</label>
</div>

<li className="has-[.priority]:bg-red-900/30">
  <span className="priority">Prioridade:</span> Item importante
</li>`}
              </pre>
            </div>
          </div>
        )}

        {/* 4. Subgrid - Herança de grid */}
        {activeTab === 'subgrid' && (
          <div>
            <h2 className="text-xl font-bold mb-4">Subgrid</h2>
            <p className="mb-4">
              Subgrid permite que itens de grid herdem as linhas/colunas do grid pai,
              facilitando alinhamentos complexos que antes eram difíceis de implementar.
            </p>

            {/* Demonstração de Subgrid */}
            <div className="mb-6">
              <p className="text-sm text-gray-400 mb-2">Grid principal com 3 colunas:</p>
              <div className="grid grid-cols-3 gap-4 mb-4 text-center">
                <div className="bg-blue-900/50 p-4 rounded">Coluna 1</div>
                <div className="bg-blue-900/50 p-4 rounded">Coluna 2</div>
                <div className="bg-blue-900/50 p-4 rounded">Coluna 3</div>
              </div>

              <p className="text-sm text-gray-400 mb-2">Com subgrid (os itens herdam o grid pai):</p>
              <div className="grid grid-cols-3 gap-4 mb-4 border border-gray-500 p-4 rounded-lg">
                {/* Primeiro item ocupa 2 colunas e tem um subgrid */}
                <div className="col-span-2 grid grid-cols-subgrid gap-4">
                  <div className="bg-purple-900/50 p-4 rounded text-center">Subitem 1</div>
                  <div className="bg-purple-900/50 p-4 rounded text-center">Subitem 2</div>
                </div>
                {/* Segundo item ocupa 1 coluna */}
                <div className="bg-blue-900/50 p-4 rounded text-center">Item 3</div>
                
                {/* Nova linha */}
                <div className="bg-blue-900/50 p-4 rounded text-center">Item 4</div>
                {/* Item que ocupa 2 colunas e tem um subgrid */}
                <div className="col-span-2 grid grid-cols-subgrid gap-4">
                  <div className="bg-purple-900/50 p-4 rounded text-center">Subitem 5</div>
                  <div className="bg-purple-900/50 p-4 rounded text-center">Subitem 6</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-700 p-4 rounded-lg">
              <p className="text-sm font-mono mb-2">Código:</p>
              <pre className="text-xs overflow-x-auto p-2 bg-gray-900 rounded">
                {`<div className="grid grid-cols-3 gap-4">
  <!-- Primeiro item ocupa 2 colunas e tem um subgrid -->
  <div className="col-span-2 grid grid-cols-subgrid gap-4">
    <div>Subitem 1</div>
    <div>Subitem 2</div>
  </div>
  <!-- Segundo item ocupa 1 coluna -->
  <div>Item 3</div>
</div>`}
              </pre>
            </div>
          </div>
        )}

        {/* 5. Lightning CSS - Demonstração de desempenho e recursos avançados */}
        {activeTab === 'lightning' && (
          <div>
            <h2 className="text-xl font-bold mb-4">Lightning CSS</h2>
            <p className="mb-4">
              O Tailwind 4 usa Lightning CSS internamente, que oferece melhor desempenho e
              recursos avançados como funções CSS nativas e propriedades personalizadas.
            </p>

            {/* Demonstração de funções CSS nativas */}
            <div className="space-y-6 mb-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Funções CSS Nativas</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Demonstração de calc() */}
                  <div className="border border-gray-500 rounded-lg p-4">
                    <p className="text-sm text-gray-400 mb-2">calc():</p>
                    <div className="w-[calc(100%-2rem)] h-8 bg-blue-600 rounded"></div>
                    <p className="text-xs mt-2">w-[calc(100%-2rem)]</p>
                  </div>

                  {/* Demonstração de min() */}
                  <div className="border border-gray-500 rounded-lg p-4">
                    <p className="text-sm text-gray-400 mb-2">min():</p>
                    <div className="w-[min(300px,100%)] h-8 bg-green-600 rounded"></div>
                    <p className="text-xs mt-2">w-[min(300px,100%)]</p>
                  </div>

                  {/* Demonstração de max() */}
                  <div className="border border-gray-500 rounded-lg p-4">
                    <p className="text-sm text-gray-400 mb-2">max():</p>
                    <div className="w-[max(50%,200px)] h-8 bg-purple-600 rounded"></div>
                    <p className="text-xs mt-2">w-[max(50%,200px)]</p>
                  </div>

                  {/* Demonstração de clamp() */}
                  <div className="border border-gray-500 rounded-lg p-4">
                    <p className="text-sm text-gray-400 mb-2">clamp():</p>
                    <div className="w-[clamp(200px,50%,300px)] h-8 bg-red-600 rounded"></div>
                    <p className="text-xs mt-2">w-[clamp(200px,50%,300px)]</p>
                  </div>
                </div>
              </div>

              {/* Demonstração de propriedades personalizadas */}
              <div>
                <h3 className="text-lg font-semibold mb-2">Propriedades Personalizadas (CSS Variables)</h3>
                <div 
                  className="border border-gray-500 rounded-lg p-4 [--theme-color:theme(colors.blue.500)]"
                  style={{ '--card-padding': '1.5rem' }}
                >
                  <p className="text-sm text-gray-400 mb-2">Usando CSS variables:</p>
                  <div className="bg-[var(--theme-color)] p-[var(--card-padding)] rounded-lg">
                    <p>Este card usa variáveis CSS para cores e padding</p>
                  </div>
                  <button 
                    className="mt-4 bg-[var(--theme-color)] hover:bg-[color-mix(in_srgb,var(--theme-color),#000_20%)] text-white px-4 py-2 rounded"
                  >
                    Botão com cor baseada em variável
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-gray-700 p-4 rounded-lg">
              <p className="text-sm font-mono mb-2">Código:</p>
              <pre className="text-xs overflow-x-auto p-2 bg-gray-900 rounded">
                {`<!-- Funções CSS nativas -->
<div className="w-[calc(100%-2rem)]"></div>
<div className="w-[min(300px,100%)]"></div>
<div className="w-[max(50%,200px)]"></div>
<div className="w-[clamp(200px,50%,300px)]"></div>

<!-- Propriedades personalizadas -->
<div className="[--theme-color:theme(colors.blue.500)]">
  <div className="bg-[var(--theme-color)]">
    Usando variáveis CSS
  </div>
</div>`}
              </pre>
            </div>
          </div>
        )}

        {/* 6. View Transitions - Animações de transição entre estados */}
        {activeTab === 'transitions' && (
          <div>
            <h2 className="text-xl font-bold mb-4">View Transitions e Animações</h2>
            <p className="mb-4">
              O Tailwind 4 tem suporte melhorado para animações e transições, incluindo
              suporte para a API View Transitions do CSS.
            </p>

            {/* Demonstração de animações e transições */}
            <div className="space-y-6 mb-6">
              {/* Cards com transições */}
              <div>
                <h3 className="text-lg font-semibold mb-2">Transições Suaves</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div 
                    className="bg-blue-900/30 hover:bg-blue-700/50 p-4 rounded-lg transition-all duration-300 hover:scale-105"
                  >
                    <h4 className="font-medium">Card com Hover</h4>
                    <p className="text-sm text-gray-300">Passe o mouse para ver a transição suave</p>
                  </div>
                  
                  <div 
                    className="bg-purple-900/30 hover:bg-purple-700/50 p-4 rounded-lg transition-all duration-300 hover:translate-y-[-0.5rem]"
                  >
                    <h4 className="font-medium">Card com Elevação</h4>
                    <p className="text-sm text-gray-300">Passe o mouse para ver o card elevar</p>
                  </div>
                </div>
              </div>

              {/* Demonstração de animações */}
              <div>
                <h3 className="text-lg font-semibold mb-2">Animações</h3>
                <div className="flex flex-wrap gap-4">
                  <div className="animate-bounce bg-blue-500 p-4 rounded-full">
                    bounce
                  </div>
                  <div className="animate-pulse bg-green-500 p-4 rounded-full">
                    pulse
                  </div>
                  <div className="animate-spin bg-purple-500 p-4 rounded-full">
                    spin
                  </div>
                  <div className="animate-ping bg-red-500 p-4 rounded-full">
                    ping
                  </div>
                </div>
              </div>

              {/* Demonstração de View Transitions */}
              <div>
                <h3 className="text-lg font-semibold mb-2">View Transitions</h3>
                <p className="text-sm text-gray-400 mb-2">
                  Clique no botão para alternar o estado e ver a transição:
                </p>
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded mb-4"
                >
                  {isExpanded ? 'Recolher' : 'Expandir'}
                </button>
                
                <div className="view-transition-name:demo-card overflow-hidden transition-all duration-500 ease-in-out">
                  {isExpanded ? (
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-lg">
                      <h4 className="text-xl font-bold mb-2">Conteúdo Expandido</h4>
                      <p>
                        Este é um exemplo de como as view transitions podem criar animações
                        suaves entre diferentes estados de um componente.
                      </p>
                      <p className="mt-2">
                        O Tailwind 4 facilita a implementação dessas transições com classes
                        utilitárias para view-transition-name e outras propriedades.
                      </p>
                    </div>
                  ) : (
                    <div className="bg-blue-600 p-4 rounded-lg">
                      <h4 className="font-medium">Conteúdo Recolhido</h4>
                      <p className="text-sm">Clique para expandir e ver mais informações.</p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="bg-gray-700 p-4 rounded-lg">
              <p className="text-sm font-mono mb-2">Código:</p>
              <pre className="text-xs overflow-x-auto p-2 bg-gray-900 rounded">
                {`<!-- Transições -->
<div className="transition-all duration-300 hover:scale-105">
  Card com transição
</div>

<!-- Animações -->
<div className="animate-bounce">bounce</div>
<div className="animate-pulse">pulse</div>

<!-- View Transitions -->
<div className="view-transition-name:demo-card">
  {isExpanded ? (
    <div>Conteúdo expandido</div>
  ) : (
    <div>Conteúdo recolhido</div>
  )}
</div>`}
              </pre>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TailwindDemo;
