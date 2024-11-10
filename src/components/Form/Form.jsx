import './Form.scss'
import Button from '../Button/Button.jsx'
import { useForm } from 'react-hook-form'
import emailjs from '@emailjs/browser'

function Form() {
	const { register, handleSubmit, formState } = useForm({
		mode: 'onChange',
	})

	const emailError = formState.errors['email']?.message
	const messageError = formState.errors['message']?.message

	const onSubmit = (data) => {
		const serviceID = 'service_zz5nnf5'
		const templateID = 'template_vs5po9u'
		const publicKey = 'FF03oXIPlhJB7iYos'

		const templateParams = {
			from_email: data.email,
			message: data.message,
		}

		emailjs.send(serviceID, templateID, templateParams, publicKey).then(
			(response) => {
				console.log('Ok', response.status, response.text)
				alert('Сообщение отправлено!')
			},
			(err) => {
				console.log('Error', err)
				alert('Произошла ошибка при отправке сообщения.')
			}
		)
	}

	return (
		<>
			<p className="label">Форма обратной связи</p>
			<form onSubmit={handleSubmit(onSubmit)}>
				<input
					type="email"
					placeholder="Введите ваш email"
					{...register('email', {
						required: 'Это поле обязательное',
						pattern: {
							value: /^[A-Z0-9._%+=]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
							message: 'Неверно введен адресс',
						},
					})}
				/>
				{emailError && <p>{emailError}</p>}
				<textarea
					placeholder="Введите ваше сообщение"
					{...register('message', {
						required: 'Это поле обязательное',
					})}
				></textarea>
				{messageError && <p>{messageError}</p>}
				<Button onClick={() => onSubmit()}>Отправить</Button>
			</form>
		</>
	)
}

export default Form
