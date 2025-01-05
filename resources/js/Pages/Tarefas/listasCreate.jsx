import { useForm } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import PrimaryButton from '@/Components/button/PrimaryButton';

export default function listasCreate({ auth, errors, flash }) {
    const { data, setData, post, processing, reset } = useForm({
        name: '',
        description: '',
        price: '',
        quantity: '',
        active: false,  
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('products.store'), {
            onSuccess: () => {
                reset();
            },
            onError: (error) => {
                console.log('Erro ao criar produto:', error);
            },
        });
    };

    return (
        <AuthenticatedLayout user={auth.user} header={<h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">Add Product</h2>}>
            <Head title="Add Product" />
            <div className="py-4">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="flex justify-between items-center m-4">
                            <div className="flex space-x-4 text-gray-200">
                                <Link href={route('tarefas.index')}>
                                    <PrimaryButton>List Products</PrimaryButton>
                                </Link>
                            </div>
                        </div>

                        <form onSubmit={submit} className="bg-white shadow-sm sm:rounded-lg dark:bg-gray-800 p-6 space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-50">Name</label>
                                <input
                                    type="text"
                                    value={data.name}
                                    onChange={e => setData('name', e.target.value)}
                                    className="mt-1 block w-full rounded-md"
                                    placeholder="Enter the product name"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-50">Description</label>
                                <textarea
                                    value={data.description}
                                    onChange={e => setData('description', e.target.value)}
                                    className="mt-1 block w-full rounded-md"
                                    placeholder="Enter the product description"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-50">Price</label>
                                <input
                                    type="text"
                                    value={data.price}
                                    onChange={e => setData('price', e.target.value)}
                                    className="mt-1 block w-full rounded-md"
                                    placeholder="Enter the price of the product"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-50">Quantity</label>
                                <input
                                    type="number"
                                    value={data.quantity}
                                    onChange={e => setData('quantity', e.target.value)}
                                    className="mt-1 block w-full rounded-md"
                                    placeholder="Enter the quantity"
                                    required
                                />
                            </div>

                            <div className="flex justify-end">
                                <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md" disabled={processing}>
                                    {processing ? 'Saving...' : 'Save Product'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
