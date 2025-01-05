import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

const RelatoriosIndex = ({ total, pendentes, tempoMedio }) => {
  return (
    <AuthenticatedLayout>
      <Head title="Relatórios" />

      <div className="py-4">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                Relatório de Tarefas
              </h2>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md dark:bg-gray-700">
                  <h3 className="text-lg font-medium text-gray-800 dark:text-gray-100">
                    Total de Tarefas
                  </h3>
                  <p className="text-2xl font-bold text-gray-700 dark:text-gray-200">{total}</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md dark:bg-gray-700">
                  <h3 className="text-lg font-medium text-gray-800 dark:text-gray-100">
                    Tarefas Pendentes
                  </h3>
                  <p className="text-2xl font-bold text-gray-700 dark:text-gray-200">{pendentes}</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md dark:bg-gray-700">
                  <h3 className="text-lg font-medium text-gray-800 dark:text-gray-100">
                    Tempo Médio de Conclusão
                  </h3>
                  <p className="text-2xl font-bold text-gray-700 dark:text-gray-200">{tempoMedio} horas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
};

export default RelatoriosIndex;
