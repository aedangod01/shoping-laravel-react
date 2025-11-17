import DangerButton from '@/Components/Core/DangerButton';
import InputError from '@/Components/Core/InputError';
import InputLabel from '@/Components/Core/InputLabel';
import Modal from '@/Components/Core/Modal';
import SecondaryButton from '@/Components/Core/SecondaryButton';
import TextInput from '@/Components/Core/TextInput';
import { useForm } from '@inertiajs/react';
import { FormEventHandler, useRef, useState } from 'react';

export default function DeleteUserForm({
    className = '',
}: {
    className?: string;
}) {
    const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
    const passwordInput = useRef<HTMLInputElement>(null);

    const {
        data,
        setData,
        delete: destroy,
        processing,
        reset,
        errors,
        clearErrors,
    } = useForm({
        password: '',
    });

    const confirmUserDeletion = () => {
        setConfirmingUserDeletion(true);
    };

    const deleteUser: FormEventHandler = (e) => {
        e.preventDefault();

        destroy(route('profile.destroy'), {
            preserveScroll: true,
            onSuccess: () => closeModal(),
            onError: () => passwordInput.current?.focus(),
            onFinish: () => reset(),
        });
    };

    const closeModal = () => {
        setConfirmingUserDeletion(false);

        clearErrors();
        reset();
    };

    return (
        <section dir='rtl' className={`space-y-6 flex flex-col items-end ${className}`}>
            <header>
                <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                    حذف حساب کاربری
                </h2>

                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                                            پس از حذف حساب، تمام داده‌ها و منابع مربوط به آن برای همیشه پاک خواهند شد. لطفاً برای تأیید اینکه می‌خواهید حساب خود را به‌طور دائمی حذف کنید، گذرواژهٔ خود را وارد کنید.

                </p>
            </header>

            <DangerButton onClick={confirmUserDeletion}>
                حذف حساب کاربری
            </DangerButton>

            <Modal show={confirmingUserDeletion}  onClose={closeModal}>
                <form onSubmit={deleteUser} className="p-6 bg-stone-900">
                    <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">
آیا مطمئن هستید که می‌خواهید حساب خود را حذف کنید؟                    
</h2>

                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                        پس از حذف حساب، تمام داده‌ها و منابع مربوط به آن برای همیشه پاک خواهند شد. لطفاً برای تأیید اینکه می‌خواهید حساب خود را به‌طور دائمی حذف کنید، گذرواژهٔ خود را وارد کنید.
                    </p>

                    <div className="mt-6">
                        <InputLabel
                            htmlFor="password"
                            value="Password"
                            className="sr-only"
                        />

                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            ref={passwordInput}
                            value={data.password}
                            onChange={(e) =>
                                setData('password', e.target.value)
                            }
                            className="mt-1 block w-3/4"
                            isFocused
                            placeholder="رمز عبور"
                        />

                        <InputError
                            message={errors.password}
                            className="mt-2"
                        />
                    </div>

                    <div className="mt-6 flex  justify-end">
                        <SecondaryButton  onClick={closeModal}>
                            لغو
                        </SecondaryButton>

                        <DangerButton className="ms-3 " disabled={processing}>
                            حذف حساب
                        </DangerButton>
                    </div>
                </form>
            </Modal>
        </section>
    );
}
