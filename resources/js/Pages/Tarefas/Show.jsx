import PrimaryButton from '@/Components/button/PrimaryButton';
import WarningButton from '@/Components/button/WarningButton';
import ConfirmDeleteButton from '@/Components/delete/ConfirmDeleteButton';

import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function TarefaShow({ auth, tarefa }) {

    // console.log("Auth:", auth);
    // console.log("Tarefa:", tarefa);

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Visualizar Tarefa
                </h2>
            }
        >
            <Head title="Tarefa" />

            <div className="py-4">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="flex justify-between items-center m-4">
                            <h3 className="text-lg text-gray-200">Visualizar Tarefa</h3>
                            <div className="flex space-x-4 text-gray-200">
                                <Link href={route('tarefas.index')}>
                                    <PrimaryButton>Listar Tarefas</PrimaryButton>
                                </Link>
                                <Link href={route('tarefas.edit', { id_tarefa: tarefa.id_tarefa })}>
                                    <WarningButton>Editar</WarningButton>
                                </Link>
                                <ConfirmDeleteButton id={tarefa.id_tarefa} routeName={'tarefas.destroy'} />
                            </div>
                        </div>

                        <div className="overflow-x-auto bg-gray-50 text-sm dark:bg-gray-800 p-4 rounded-lg shadow-md">
                            <table className="min-w-full table-auto">
                                <tbody>
                                    <tr>
                                        <td className="px-4 py-2 font-semibold text-gray-200">ID</td>
                                        <td className="px-4 py-2 text-gray-200">{tarefa.id_tarefa}</td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-2 font-semibold text-gray-200">Título</td>
                                        <td className="px-4 py-2 text-gray-200">{tarefa.titulo}</td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-2 font-semibold text-gray-200">Descrição</td>
                                        <td className="px-4 py-2 text-gray-200">{tarefa.descricao}</td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-2 font-semibold text-gray-200">Data de Criação</td>
                                        <td className="px-4 py-2 text-gray-200">
                                            {new Date(tarefa.data_hora_criacao).toLocaleString('pt-BR')}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-2 font-semibold text-gray-200">Data de Conclusão</td>
                                        <td className="px-4 py-2 text-gray-200">
                                            {tarefa.data_hora_conclusao ? new Date(tarefa.data_hora_conclusao).toLocaleString('pt-BR') : 'Dt Pendente'}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-2 font-semibold text-gray-200">Status</td>
                                        <td className="px-4 py-2 text-gray-200">
                                            {tarefa.status === 'pendente' && <span className="text-yellow-500">🟡 Pendente</span>}
                                            {tarefa.status === 'em andamento' && <span className="text-blue-500">🔵 Em Andamento</span>}
                                            {tarefa.status === 'concluída' && <span className="text-green-500">🟢 Concluída</span>}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
