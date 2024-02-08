import { useState } from 'preact/hooks'

interface InputType {
	name: string
	label: string
	typeInput?: 'text' | 'email' | 'number'
	placeholder: string
}

export const FormContact = () => {
	const [formData, setFormData] = useState<{}>({})

	const handleSubmit = () => {}

	return (
		<article class="w-full max-w-[500px]">
			<form
				onSubmit={handleSubmit}
				class="mb-6 w-full max-w-[500px] rounded-2xl bg-about-brand bg-cover bg-center bg-no-repeat p-3 py-6"
			>
				<InputField
					label="Nombre completo"
					name="name"
					placeholder="Nombres..."
				/>
				<InputField
					label="Teléfono"
					name="number"
					typeInput="number"
					placeholder="Teléfono.."
				/>
				<InputField
					label="Correo Electrónico"
					name="email"
					typeInput="email"
					placeholder="ejemplo@email.com"
				/>
				<Textarea
					label="Mensaje"
					name="message"
					placeholder="Escrib un mensaje"
				/>

				<button
					type="submit"
					class="m-2 rounded-md bg-primary-original px-4 py-2 text-white"
				>
					Enviar
				</button>
			</form>
		</article>
	)
}

const InputField = ({ name, label, typeInput, placeholder }: InputType) => {
	return (
		<div class="my-2">
			<label for={name} class="mb-2 block text-sm font-medium text-white">
				{label}
			</label>
			<input
				type={typeInput}
				id={name}
				class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-secondary-original focus:ring-secondary-original dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
				placeholder={placeholder}
				name={name}
			/>
		</div>
	)
}

const Textarea = ({ name, label, placeholder }: InputType) => {
	return (
		<div>
			<label for={name} class="mb-2 block text-sm font-medium text-white">
				{label}
			</label>
			<textarea
				id={name}
				name={name}
				rows={4}
				class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-secondary-original focus:ring-secondary-original dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-secondary-original dark:focus:ring-secondary-original"
				placeholder={placeholder}
			></textarea>
		</div>
	)
}
