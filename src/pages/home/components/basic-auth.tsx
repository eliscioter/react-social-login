import type { UsernamePasswordType } from "@/types/UsernamePasswordType";
import { UsernamePasswordSchema } from "@/validators/basic-auth-form";
import { useForm } from "@tanstack/react-form";

export default function BasicAuth() {
	const defaultUserLoginValues: UsernamePasswordType = {
		username: "",
		password: "",
	};

	async function onSubmitForm() {
		console.log("Submitting form");
		return;
	}

	const form = useForm({
		onSubmit: onSubmitForm,
		defaultValues: defaultUserLoginValues,
		validators: {
			onChange: UsernamePasswordSchema,
		},
	});

	return (
		<div className="mt-10">
			<form
				className="w-max mx-auto"
				onSubmit={(e) => {
					e.preventDefault();
					e.stopPropagation();
					form.handleSubmit();
				}}
			>
				<form.Field
					name="username"
					validators={{
						onChangeAsyncDebounceMs: 500,
					}}
				>
					{(field) => (
						<>
							<label htmlFor="">Username</label>
							<input
								type="text"
								className="w-full bg-gray-300 text-black"
								value={field.state.value}
								onBlur={field.handleBlur}
								onChange={(e) => field.handleChange(e.target.value)}
							/>
							{field.state.meta.errors && (
								<p className="text-destructive text-red-700 text-sm mt-1">
									{field.state.meta.errors.at(0)?.message}
								</p>
							)}
						</>
					)}
				</form.Field>
				<form.Field
					name="password"
					validators={{
						onChangeAsyncDebounceMs: 500,
					}}
				>
					{(field) => (
						<>
							<label htmlFor="">Password</label>
							<input
								type="text"
								className="w-full bg-gray-300 text-black"
								value={field.state.value}
								onBlur={field.handleBlur}
								onChange={(e) => field.handleChange(e.target.value)}
							/>
							{field.state.meta.errors && (
								<p className="text-destructive text-red-700 text-sm mt-1">
									{field.state.meta.errors.at(0)?.message}
								</p>
							)}
						</>
					)}
				</form.Field>
				<form.Subscribe
					selector={(state) => [state.canSubmit, state.isSubmitting]}
				>
					{([canSubmit, isSubmitting]) => (
						<button
							type="submit"
							disabled={!canSubmit}
							className={
								!canSubmit
									? "bg-gray-700 w-full p-1 my-4"
									: "bg-blue-700 w-full p-1 my-4"
							}
						>
							{isSubmitting ? "Submitting" : "Submit"}
						</button>
					)}
				</form.Subscribe>
			</form>
		</div>
	);
}
