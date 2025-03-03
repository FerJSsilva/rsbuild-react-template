import { useState } from 'react';
import {
  format, parse, parseISO,
  add, sub, addBusinessDays,
  isAfter, isBefore, isEqual, isSameDay,
  differenceInDays, differenceInMonths, differenceInYears,
  isWeekend, startOfMonth, endOfMonth
} from 'date-fns';

const DateFnsDemo = () => {
  const [activeTab, setActiveTab] = useState('formatacao');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [compareDate, setCompareDate] = useState(
    new Date(new Date().setDate(new Date().getDate() + 7))
  );
  const [dateString, setDateString] = useState('2025-03-15');
  const [formatString, setFormatString] = useState('dd/MM/yyyy');

  // Função para formatar a data atual em string ISO
  const formatDateToISO = (date) => {
    return format(date, 'yyyy-MM-dd');
  };

  // Atualiza a data selecionada
  const handleDateChange = (e) => {
    setSelectedDate(parseISO(e.target.value));
  };

  // Atualiza a data de comparação
  const handleCompareDateChange = (e) => {
    setCompareDate(parseISO(e.target.value));
  };

  // Renderiza a tab de formatação
  const renderFormatTab = () => (
    <div>
      <h2 className="text-xl font-bold mb-4">Formatação de Datas</h2>
      <p className="mb-4 text-gray-300">
        O date-fns oferece várias funções para formatar datas em diferentes formatos.
      </p>

      <div className="mb-6 bg-gray-700 p-4 rounded-lg">
        <h3 className="text-lg font-semibold mb-3">Data Selecionada</h3>
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
          <input
            type="date"
            value={formatDateToISO(selectedDate)}
            onChange={handleDateChange}
            className="bg-gray-800 border border-gray-600 rounded px-3 py-2"
          />
          <div className="text-gray-300">
            {format(selectedDate, 'PPPP')}
          </div>
        </div>
      </div>

      <div className="mb-6 bg-gray-700 p-4 rounded-lg">
        <h3 className="text-lg font-semibold mb-3">Exemplos de Formatação</h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-medium mb-2">Formatos Básicos</h4>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-600">
                  <th className="text-left py-2">Formato</th>
                  <th className="text-left py-2">Resultado</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-600">
                  <td className="py-2 font-mono">yyyy-MM-dd</td>
                  <td className="py-2">{format(selectedDate, 'yyyy-MM-dd')}</td>
                </tr>
                <tr className="border-b border-gray-600">
                  <td className="py-2 font-mono">dd/MM/yyyy</td>
                  <td className="py-2">{format(selectedDate, 'dd/MM/yyyy')}</td>
                </tr>
                <tr className="border-b border-gray-600">
                  <td className="py-2 font-mono">dd MMM yyyy</td>
                  <td className="py-2">{format(selectedDate, 'dd MMM yyyy')}</td>
                </tr>
                <tr>
                  <td className="py-2 font-mono">HH:mm:ss</td>
                  <td className="py-2">{format(selectedDate, 'HH:mm:ss')}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="bg-gray-700 p-4 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">Código de Exemplo</h3>
        <pre className="text-xs overflow-x-auto p-3 bg-gray-900 rounded">
          {`import { format } from 'date-fns';

// Formatação básica
format(new Date(), 'dd/MM/yyyy'); // => '${format(new Date(), 'dd/MM/yyyy')}'

// Formatação com padrão completo
format(new Date(), "EEEE, dd 'de' MMMM"); 
// => '${format(new Date(), "EEEE, dd 'de' MMMM")}'`}
        </pre>
      </div>
    </div>
  );

  // Renderiza a tab de parsing
  const renderParsingTab = () => (
    <div>
      <h2 className="text-xl font-bold mb-4">Parsing de Datas</h2>
      <p className="mb-4 text-gray-300">
        O date-fns permite converter strings em objetos Date usando diferentes formatos.
      </p>

      <div className="mb-6 bg-gray-700 p-4 rounded-lg">
        <h3 className="text-lg font-semibold mb-3">Converter String para Data</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm mb-1">String de data:</label>
            <input
              type="text"
              value={dateString}
              onChange={(e) => setDateString(e.target.value)}
              className="w-full bg-gray-800 border border-gray-600 rounded px-3 py-2"
              placeholder="2025-03-15"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Formato:</label>
            <input
              type="text"
              value={formatString}
              onChange={(e) => setFormatString(e.target.value)}
              className="w-full bg-gray-800 border border-gray-600 rounded px-3 py-2"
              placeholder="yyyy-MM-dd"
            />
          </div>
          <div className="p-4 bg-gray-800 rounded-lg">
            <p className="mb-2 text-sm text-gray-400">Resultado:</p>
            <div className="space-y-2">
              <p>
                <span className="text-gray-400">parse:</span>{' '}
                {(() => {
                  try {
                    const parsedDate = parse(dateString, formatString, new Date());
                    return format(parsedDate, 'PPP');
                  } catch (error) {
                    return <span className="text-red-400">Erro: Formato inválido</span>;
                  }
                })()}
              </p>
              <p>
                <span className="text-gray-400">parseISO (para formato ISO):</span>{' '}
                {(() => {
                  try {
                    const parsedDate = parseISO(dateString);
                    return format(parsedDate, 'PPP');
                  } catch (error) {
                    return <span className="text-red-400">Erro: Formato ISO inválido</span>;
                  }
                })()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Renderiza a tab de manipulação
  const renderManipulacaoTab = () => (
    <div>
      <h2 className="text-xl font-bold mb-4">Manipulação de Datas</h2>
      <p className="mb-4 text-gray-300">
        O date-fns oferece funções para adicionar ou subtrair períodos de tempo de uma data.
      </p>

      <div className="mb-6 bg-gray-700 p-4 rounded-lg">
        <h3 className="text-lg font-semibold mb-3">Adicionar Períodos</h3>
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-600">
              <th className="text-left py-2">Operação</th>
              <th className="text-left py-2">Resultado</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-600">
              <td className="py-2 font-mono">add(date, {`{ days: 7 }`})</td>
              <td className="py-2">{format(add(selectedDate, { days: 7 }), 'dd/MM/yyyy')}</td>
            </tr>
            <tr className="border-b border-gray-600">
              <td className="py-2 font-mono">add(date, {`{ months: 1 }`})</td>
              <td className="py-2">{format(add(selectedDate, { months: 1 }), 'dd/MM/yyyy')}</td>
            </tr>
            <tr>
              <td className="py-2 font-mono">add(date, {`{ years: 1 }`})</td>
              <td className="py-2">{format(add(selectedDate, { years: 1 }), 'dd/MM/yyyy')}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );

  // Renderiza a tab de comparação
  const renderComparacaoTab = () => (
    <div>
      <h2 className="text-xl font-bold mb-4">Comparação de Datas</h2>
      <p className="mb-4 text-gray-300">
        O date-fns oferece funções para comparar datas de diferentes maneiras.
      </p>

      <div className="mb-6 bg-gray-700 p-4 rounded-lg">
        <h3 className="text-lg font-semibold mb-3">Resultados da Comparação</h3>
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-600">
              <th className="text-left py-2">Função</th>
              <th className="text-left py-2">Resultado</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-600">
              <td className="py-2 font-mono">isAfter(data1, data2)</td>
              <td className="py-2">{isAfter(selectedDate, compareDate) ? 'Sim' : 'Não'}</td>
            </tr>
            <tr className="border-b border-gray-600">
              <td className="py-2 font-mono">isBefore(data1, data2)</td>
              <td className="py-2">{isBefore(selectedDate, compareDate) ? 'Sim' : 'Não'}</td>
            </tr>
            <tr>
              <td className="py-2 font-mono">isEqual(data1, data2)</td>
              <td className="py-2">{isEqual(selectedDate, compareDate) ? 'Sim' : 'Não'}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );

  // Renderiza a tab de cálculos
  const renderCalculosTab = () => (
    <div>
      <h2 className="text-xl font-bold mb-4">Cálculos com Datas</h2>
      <p className="mb-4 text-gray-300">
        O date-fns permite calcular diferenças entre datas em várias unidades de tempo.
      </p>

      <div className="mb-6 bg-gray-700 p-4 rounded-lg">
        <h3 className="text-lg font-semibold mb-3">Diferenças entre Datas</h3>
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-600">
              <th className="text-left py-2">Função</th>
              <th className="text-left py-2">Resultado</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-600">
              <td className="py-2 font-mono">differenceInDays</td>
              <td className="py-2">{differenceInDays(compareDate, selectedDate)} dias</td>
            </tr>
            <tr className="border-b border-gray-600">
              <td className="py-2 font-mono">differenceInMonths</td>
              <td className="py-2">{differenceInMonths(compareDate, selectedDate)} meses</td>
            </tr>
            <tr>
              <td className="py-2 font-mono">differenceInYears</td>
              <td className="py-2">{differenceInYears(compareDate, selectedDate)} anos</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );

  // Renderiza o conteúdo da tab ativa
  const renderActiveTab = () => {
    switch (activeTab) {
      case 'formatacao':
        return renderFormatTab();
      case 'parsing':
        return renderParsingTab();
      case 'manipulacao':
        return renderManipulacaoTab();
      case 'comparacao':
        return renderComparacaoTab();
      case 'calculos':
        return renderCalculosTab();
      default:
        return renderFormatTab();
    }
  };

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold">date-fns - Biblioteca de Manipulação de Datas</h1>
      <p className="text-gray-300">
        Esta página demonstra as funcionalidades básicas da biblioteca date-fns para manipulação de datas em JavaScript.
      </p>

      {/* Tabs de navegação */}
      <div className="flex flex-wrap gap-2">
        {['formatacao', 'parsing', 'manipulacao', 'comparacao', 'calculos'].map((tab) => (
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
        {renderActiveTab()}
      </div>
    </div>
  );
};

export default DateFnsDemo;
