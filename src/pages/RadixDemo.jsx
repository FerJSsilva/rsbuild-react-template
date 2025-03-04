import React, { useState } from 'react';
import { DropdownMenu, Dialog, Tooltip } from 'radix-ui';

const RadixDemo = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <div className="space-y-10">
      <h1 className="text-2xl font-bold mb-6">Radix UI Demo</h1>

      {/* Dropdown Menu Example */}
      <section className="p-5 border border-gray-300 rounded-lg">
        <h2 className="text-xl font-bold mb-4">Dropdown Menu</h2>
        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild>
            <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
              Opções
            </button>
          </DropdownMenu.Trigger>

          <DropdownMenu.Portal>
            <DropdownMenu.Content
              className="min-w-[220px] bg-white rounded-md p-1 shadow-md"
              sideOffset={5}
            >
              <DropdownMenu.Item className="flex h-8 items-center px-3 text-sm rounded hover:bg-blue-100 cursor-pointer">
                Novo arquivo
              </DropdownMenu.Item>
              <DropdownMenu.Item className="flex h-8 items-center px-3 text-sm rounded hover:bg-blue-100 cursor-pointer">
                Nova pasta
              </DropdownMenu.Item>
              <DropdownMenu.Separator className="h-px bg-gray-200 my-1" />
              <DropdownMenu.Item className="flex h-8 items-center px-3 text-sm rounded hover:bg-blue-100 cursor-pointer">
                Preferências
              </DropdownMenu.Item>
              <DropdownMenu.Separator className="h-px bg-gray-200 my-1" />
              <DropdownMenu.Item className="flex h-8 items-center px-3 text-sm rounded hover:bg-red-100 text-red-600 cursor-pointer">
                Sair
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      </section>

      {/* Dialog Example */}
      <section className="p-5 border border-gray-300 rounded-lg">
        <h2 className="text-xl font-bold mb-4">Dialog Modal</h2>
        <Dialog.Root open={dialogOpen} onOpenChange={setDialogOpen}>
          <Dialog.Trigger asChild>
            <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors">
              Abrir Modal
            </button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50" />
            <Dialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg p-6 shadow-xl w-[90vw] max-w-md max-h-[85vh] overflow-auto">
              <Dialog.Title className="text-xl font-bold mb-2">
                Título do Modal
              </Dialog.Title>
              <Dialog.Description className="text-gray-600 mb-4">
                Este é um exemplo de modal utilizando Radix UI Dialog.
              </Dialog.Description>
              <div className="py-4">
                <p>Você pode adicionar qualquer conteúdo aqui.</p>
              </div>
              <div className="flex justify-end gap-2 mt-4">
                <button
                  className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition-colors"
                  onClick={() => setDialogOpen(false)}
                >
                  Cancelar
                </button>
                <button
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                  onClick={() => setDialogOpen(false)}
                >
                  Confirmar
                </button>
              </div>
              <Dialog.Close asChild>
                <button
                  className="absolute top-3 right-3 w-6 h-6 flex items-center justify-center rounded-full hover:bg-gray-200 transition-colors"
                  aria-label="Fechar"
                >
                  ✕
                </button>
              </Dialog.Close>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </section>

      {/* Tooltip Example */}
      <section className="p-5 border border-gray-300 rounded-lg">
        <h2 className="text-xl font-bold mb-4">Tooltip</h2>
        <Tooltip.Provider>
          <Tooltip.Root>
            <Tooltip.Trigger asChild>
              <button className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors">
                Passe o mouse aqui
              </button>
            </Tooltip.Trigger>
            <Tooltip.Portal>
              <Tooltip.Content
                className="bg-gray-800 text-white rounded px-3 py-2 text-sm shadow-md"
                sideOffset={5}
              >
                Este é um exemplo de tooltip
                <Tooltip.Arrow className="fill-gray-800" />
              </Tooltip.Content>
            </Tooltip.Portal>
          </Tooltip.Root>
        </Tooltip.Provider>
      </section>

      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Vantagens do Radix UI:</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Componentes sem estilo predefinido (headless)</li>
          <li>Acessibilidade por padrão</li>
          <li>Altamente personalizável</li>
          <li>API consistente</li>
          <li>Focado em composição</li>
        </ul>
      </div>
    </div>
  );
};

export default RadixDemo;
