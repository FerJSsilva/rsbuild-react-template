import { useState } from 'react';
import {
  // Ícones básicos
  Camera, Heart, Mail, User, Settings, Home, Search, Bell, Menu, X,
  // Ícones de mídia
  Play, Pause, SkipBack, SkipForward, Volume2, VolumeX,
  // Ícones de comunicação
  Phone, MessageSquare, Send, Share, MapPin,
  // Ícones de navegação
  ArrowUp, ArrowRight, ArrowDown, ArrowLeft, ChevronUp, ChevronRight, ChevronDown, ChevronLeft,
  // Ícones de ação
  Plus, Minus, Edit, Trash, Download, Upload, Save, RefreshCw,
  // Ícones de alerta
  AlertCircle, AlertTriangle, CheckCircle, Info,
  // Ícones de dispositivos
  Smartphone, Tablet, Laptop, Monitor,
  // Ícones de tempo
  Clock, Calendar, Timer,
  // Ícones de clima
  Cloud, CloudRain, Sun, Moon,
  // Ícones de redes sociais
  Facebook, Twitter, Instagram, Linkedin, Github,
  // Outros ícones
  Star, Shield, ShoppingCart
} from 'lucide-react';

const LucideDemo = () => {
  const [activeTab, setActiveTab] = useState('icones');
  const [iconSize, setIconSize] = useState(24);
  const [iconColor, setIconColor] = useState('#3b82f6'); // blue-500
  const [strokeWidth, setStrokeWidth] = useState(2);
  const [absoluteStrokeWidth, setAbsoluteStrokeWidth] = useState(false);
  const [animationType, setAnimationType] = useState('none');

  // Função para aplicar animação ao ícone
  const getAnimationClass = (type) => {
    switch (type) {
      case 'spin':
        return 'animate-spin';
      case 'pulse':
        return 'animate-pulse';
      case 'bounce':
        return 'animate-bounce';
      case 'ping':
        return 'animate-ping';
      default:
        return '';
    }
  };

  // Categorias de ícones para a demonstração
  const iconCategories = [
    {
      name: 'Básicos',
      icons: [
        { component: Home, name: 'Home' },
        { component: User, name: 'User' },
        { component: Settings, name: 'Settings' },
        { component: Search, name: 'Search' },
        { component: Bell, name: 'Bell' },
        { component: Menu, name: 'Menu' },
        { component: X, name: 'X' },
        { component: Camera, name: 'Camera' },
      ]
    },
    {
      name: 'Mídia',
      icons: [
        { component: Play, name: 'Play' },
        { component: Pause, name: 'Pause' },
        { component: SkipBack, name: 'SkipBack' },
        { component: SkipForward, name: 'SkipForward' },
        { component: Volume2, name: 'Volume2' },
        { component: VolumeX, name: 'VolumeX' },
      ]
    },
    {
      name: 'Comunicação',
      icons: [
        { component: Mail, name: 'Mail' },
        { component: Phone, name: 'Phone' },
        { component: MessageSquare, name: 'MessageSquare' },
        { component: Send, name: 'Send' },
        { component: Share, name: 'Share' },
      ]
    },
    {
      name: 'Navegação',
      icons: [
        { component: ArrowUp, name: 'ArrowUp' },
        { component: ArrowRight, name: 'ArrowRight' },
        { component: ArrowDown, name: 'ArrowDown' },
        { component: ArrowLeft, name: 'ArrowLeft' },
        { component: ChevronUp, name: 'ChevronUp' },
        { component: ChevronRight, name: 'ChevronRight' },
        { component: ChevronDown, name: 'ChevronDown' },
        { component: ChevronLeft, name: 'ChevronLeft' },
      ]
    },
    {
      name: 'Ação',
      icons: [
        { component: Plus, name: 'Plus' },
        { component: Minus, name: 'Minus' },
        { component: Edit, name: 'Edit' },
        { component: Trash, name: 'Trash' },
        { component: Download, name: 'Download' },
        { component: Upload, name: 'Upload' },
        { component: Save, name: 'Save' },
      ]
    },
    {
      name: 'Alerta',
      icons: [
        { component: AlertCircle, name: 'AlertCircle' },
        { component: AlertTriangle, name: 'AlertTriangle' },
        { component: CheckCircle, name: 'CheckCircle' },
        { component: Info, name: 'Info' },
      ]
    },
  ];

  // Cores para demonstração
  const colorOptions = [
    { name: 'Vermelho', value: '#ef4444' }, // red-500
    { name: 'Verde', value: '#22c55e' },    // green-500
    { name: 'Azul', value: '#3b82f6' },     // blue-500
    { name: 'Amarelo', value: '#eab308' },  // yellow-500
    { name: 'Roxo', value: '#a855f7' },     // purple-500
    { name: 'Rosa', value: '#ec4899' },     // pink-500
    { name: 'Cinza', value: '#6b7280' },    // gray-500
    { name: 'Laranja', value: '#f97316' },  // orange-500
  ];

  // Tamanhos para demonstração
  const sizeOptions = [16, 20, 24, 32, 40, 48, 64];

  // Animações para demonstração
  const animationOptions = [
    { name: 'Nenhuma', value: 'none' },
    { name: 'Girar', value: 'spin' },
    { name: 'Pulsar', value: 'pulse' },
    { name: 'Saltar', value: 'bounce' },
    { name: 'Piscar', value: 'ping' },
  ];

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold">Lucide React - Biblioteca de Ícones</h1>
      <p className="text-gray-300">
        Esta página demonstra os ícones e recursos do Lucide React, uma biblioteca de ícones SVG para React.
      </p>

      {/* Tabs de navegação */}
      <div className="flex flex-wrap gap-2">
        {['icones', 'propriedades', 'tamanhos', 'cores', 'animacoes'].map((tab) => (
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
        {/* 1. Ícones Básicos */}
        {activeTab === 'icones' && (
          <div>
            <h2 className="text-xl font-bold mb-4">Ícones por Categoria</h2>
            <p className="mb-6 text-gray-300">
              O Lucide React oferece mais de 1000 ícones organizados em categorias. Abaixo estão alguns exemplos populares.
            </p>

            <div className="space-y-8">
              {iconCategories.map((category) => (
                <div key={category.name} className="mb-6">
                  <h3 className="text-lg font-semibold mb-3">{category.name}</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
                    {category.icons.map((icon) => {
                      const IconComponent = icon.component;
                      return (
                        <div key={icon.name} className="flex flex-col items-center justify-center p-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
                          <IconComponent size={24} />
                          <span className="mt-2 text-xs text-center">{icon.name}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-gray-700 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Como usar</h3>
              <p className="text-sm mb-2">Importe os ícones individualmente para otimizar o tamanho do bundle:</p>
              <pre className="text-xs overflow-x-auto p-3 bg-gray-900 rounded">
                {`import { Camera, Heart, Mail } from 'lucide-react';

// Uso básico
const MyComponent = () => {
  return (
    <div>
      <Camera />
      <Heart />
      <Mail />
    </div>
  );
};`}
              </pre>
            </div>
          </div>
        )}

        {/* 2. Propriedades */}
        {activeTab === 'propriedades' && (
          <div>
            <h2 className="text-xl font-bold mb-4">Propriedades dos Ícones</h2>
            <p className="mb-6 text-gray-300">
              Os ícones Lucide aceitam várias propriedades para personalização. Abaixo estão as principais propriedades disponíveis.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-700 p-4 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">Propriedades Principais</h3>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-600">
                      <th className="text-left py-2">Propriedade</th>
                      <th className="text-left py-2">Tipo</th>
                      <th className="text-left py-2">Padrão</th>
                      <th className="text-left py-2">Descrição</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-600">
                      <td className="py-2">size</td>
                      <td className="py-2">number</td>
                      <td className="py-2">24</td>
                      <td className="py-2">Tamanho do ícone em pixels</td>
                    </tr>
                    <tr className="border-b border-gray-600">
                      <td className="py-2">color</td>
                      <td className="py-2">string</td>
                      <td className="py-2">currentColor</td>
                      <td className="py-2">Cor do ícone (hex, rgb, nome)</td>
                    </tr>
                    <tr className="border-b border-gray-600">
                      <td className="py-2">strokeWidth</td>
                      <td className="py-2">number</td>
                      <td className="py-2">2</td>
                      <td className="py-2">Espessura da linha</td>
                    </tr>
                    <tr>
                      <td className="py-2">absoluteStrokeWidth</td>
                      <td className="py-2">boolean</td>
                      <td className="py-2">false</td>
                      <td className="py-2">Mantém a espessura independente do tamanho</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-gray-700 p-4 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">Exemplo Interativo</h3>
                <div className="flex flex-col items-center justify-center space-y-6">
                  <div className="p-6 bg-gray-800 rounded-lg flex items-center justify-center">
                    <Camera 
                      size={iconSize} 
                      color={iconColor} 
                      strokeWidth={strokeWidth} 
                      absoluteStrokeWidth={absoluteStrokeWidth} 
                    />
                  </div>
                  
                  <div className="w-full space-y-4">
                    <div>
                      <label className="block text-sm mb-1">Tamanho: {iconSize}px</label>
                      <input 
                        type="range" 
                        min="16" 
                        max="64" 
                        value={iconSize} 
                        onChange={(e) => setIconSize(Number(e.target.value))} 
                        className="w-full"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm mb-1">Cor: {iconColor}</label>
                      <div className="flex flex-wrap gap-2">
                        {colorOptions.map((color) => (
                          <button
                            key={color.value}
                            onClick={() => setIconColor(color.value)}
                            className="w-6 h-6 rounded-full border border-gray-500"
                            style={{ backgroundColor: color.value }}
                            title={color.name}
                          />
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm mb-1">Espessura: {strokeWidth}</label>
                      <input 
                        type="range" 
                        min="0.5" 
                        max="3" 
                        step="0.5" 
                        value={strokeWidth} 
                        onChange={(e) => setStrokeWidth(Number(e.target.value))} 
                        className="w-full"
                      />
                    </div>
                    
                    <div className="flex items-center">
                      <input 
                        type="checkbox" 
                        id="absoluteStrokeWidth" 
                        checked={absoluteStrokeWidth} 
                        onChange={(e) => setAbsoluteStrokeWidth(e.target.checked)} 
                        className="mr-2"
                      />
                      <label htmlFor="absoluteStrokeWidth" className="text-sm">
                        Espessura absoluta
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-700 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Código de Exemplo</h3>
              <pre className="text-xs overflow-x-auto p-3 bg-gray-900 rounded">
                {`import { Camera } from 'lucide-react';

// Uso com propriedades
const MyComponent = () => {
  return (
    <Camera 
      size={${iconSize}} 
      color="${iconColor}" 
      strokeWidth={${strokeWidth}} 
      absoluteStrokeWidth={${absoluteStrokeWidth}} 
    />
  );
};`}
              </pre>
            </div>
          </div>
        )}

        {/* 3. Tamanhos */}
        {activeTab === 'tamanhos' && (
          <div>
            <h2 className="text-xl font-bold mb-4">Tamanhos de Ícones</h2>
            <p className="mb-6 text-gray-300">
              Os ícones Lucide podem ser facilmente redimensionados usando a propriedade size.
            </p>

            <div className="bg-gray-700 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">Comparação de Tamanhos</h3>
              <div className="flex flex-wrap items-end justify-center gap-6 mb-4">
                {sizeOptions.map((size) => (
                  <div key={size} className="flex flex-col items-center">
                    <Camera size={size} />
                    <span className="mt-2 text-xs">{size}px</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 bg-gray-700 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">Tamanhos Responsivos</h3>
              <p className="text-sm mb-4">
                Você pode usar classes do Tailwind para ajustar o tamanho dos ícones em diferentes breakpoints:
              </p>
              <div className="flex justify-center p-4 bg-gray-800 rounded-lg">
                <Camera className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20" />
              </div>
              <pre className="text-xs overflow-x-auto p-3 mt-4 bg-gray-900 rounded">
                {`<Camera className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20" />`}
              </pre>
            </div>
          </div>
        )}

        {/* 4. Cores */}
        {activeTab === 'cores' && (
          <div>
            <h2 className="text-xl font-bold mb-4">Cores dos Ícones</h2>
            <p className="mb-6 text-gray-300">
              Os ícones Lucide podem ser coloridos usando a propriedade color ou classes CSS.
            </p>

            <div className="bg-gray-700 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">Paleta de Cores</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {colorOptions.map((color) => (
                  <div key={color.value} className="flex flex-col items-center p-3 bg-gray-800 rounded-lg">
                    <Heart size={32} color={color.value} />
                    <span className="mt-2 text-xs">{color.name}</span>
                    <span className="text-xs text-gray-400">{color.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 bg-gray-700 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">Usando Cores do Tailwind</h3>
              <p className="text-sm mb-4">
                Você pode usar classes do Tailwind para colorir ícones:
              </p>
              <div className="flex flex-wrap justify-center gap-6 p-4 bg-gray-800 rounded-lg">
                <Heart className="text-red-500" size={32} />
                <Heart className="text-blue-500" size={32} />
                <Heart className="text-green-500" size={32} />
                <Heart className="text-yellow-500" size={32} />
                <Heart className="text-purple-500" size={32} />
              </div>
              <pre className="text-xs overflow-x-auto p-3 mt-4 bg-gray-900 rounded">
                {`<Heart className="text-red-500" size={32} />`}
              </pre>
            </div>
          </div>
        )}

        {/* 5. Animações */}
        {activeTab === 'animacoes' && (
          <div>
            <h2 className="text-xl font-bold mb-4">Animações de Ícones</h2>
            <p className="mb-6 text-gray-300">
              Combine os ícones Lucide com as classes de animação do Tailwind para criar ícones animados.
            </p>

            <div className="bg-gray-700 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">Animações Básicas</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 p-4 bg-gray-800 rounded-lg">
                {animationOptions.filter(a => a.value !== 'none').map((animation) => (
                  <div key={animation.value} className="flex flex-col items-center">
                    <div className="p-4">
                      <RefreshCw className={getAnimationClass(animation.value)} size={32} />
                    </div>
                    <span className="text-xs">{animation.name}</span>
                  </div>
                ))}
              </div>
              <pre className="text-xs overflow-x-auto p-3 mt-4 bg-gray-900 rounded">
                {`<RefreshCw className="animate-spin" size={32} />`}
              </pre>
            </div>

            <div className="mt-4 bg-gray-700 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">Exemplo Interativo</h3>
              <div className="flex flex-col items-center space-y-6">
                <div className="p-6 bg-gray-800 rounded-lg flex items-center justify-center">
                  <div className={getAnimationClass(animationType)}>
                    <Camera 
                      size={48} 
                      color={iconColor} 
                    />
                  </div>
                </div>
                
                <div className="w-full">
                  <label className="block text-sm mb-2">Tipo de Animação:</label>
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                    {animationOptions.map((animation) => (
                      <button
                        key={animation.value}
                        onClick={() => setAnimationType(animation.value)}
                        className={`px-3 py-2 rounded text-sm ${
                          animationType === animation.value
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-600 text-gray-200 hover:bg-gray-500'
                        }`}
                      >
                        {animation.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LucideDemo;
