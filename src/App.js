import "./App.css";
import { Form, Button, Checkbox, Input, Typography } from "antd";
import React, {useEffect} from 'react';
import {submitPromotionCode} from './api';

const validateMessages = {
	required: '${label} is required!',
	types: {
		email: '${label} is not a valid email!',
		number: '${label} is not a valid number!',
	},
};

const App = () => {

	return (
		<div className="App">
			<div className="App-header">
				<Typography variant="h5">
					Creata
				</Typography>
				<Form
					autoComplete="off"
					labelCol={{ span: 10 }}
					wrapperCol={{ span: 14 }}
					onFinish={(values) => {
						console.log({ values });
						submitPromotionCode(values)
					}}
					onFinishFailed={(error) => {
						console.log({ error });
					}}
					validateMessages={validateMessages}
				>
					<Form.Item
						name="promo_code"
						label="Promotion Code"
						rules={[
							{
								required: true,
								message: "Please enter Promotion Code",
							},
							{ whitespace: true },
							{ min: 5 },
						]}
						hasFeedback
					>
						<Input placeholder="Type promotion code" />
					</Form.Item>

					<Form.Item
						name="email"
						label="Email"
						rules={[
							{
								required: true,
								message: "Please enter your email",
							},
							{ type: "email", message: "Please enter a valid email" },
						]}
						hasFeedback
					>
						<Input placeholder="Type your email" />
					</Form.Item>

					<Form.Item
						name="firstname"
						label="First Name"
						rules={[
							{
								required: true,
								message: "Please enter your first name",
							},
							{ whitespace: true },
							{ min: 3 },
						]}
						hasFeedback
					>
						<Input placeholder="Type your first name" />
					</Form.Item>

					<Form.Item
						name="lastname"
						label="Last Name"
						rules={[
							{
								required: true,
								message: "Please enter your last name",
							},
							{ whitespace: true },
							{ min: 3 },
						]}
						hasFeedback
					>
						<Input placeholder="Type your last name" />
					</Form.Item>

					<Form.Item
						name="phone"
						label="Phone Number"
						rules={[
							{
								required: true,
								message: 'Please input your phone number!',
							},
						]}
					>
						<Input
							style={{
								width: '100%',
							}}

						/>
					</Form.Item>

					<Form.Item
						name="agreement"
						wrapperCol={{ span: 24 }}
						valuePropName="checked"
						rules={[
							{
								validator: (_, value) =>
									value
										? Promise.resolve()
										: Promise.reject(
											"To proceed, you need to agree with our terms and conditions"
										),
							},
						]}
					>
						<Checkbox>
							{" "}
							Agree to our <a href="#">Terms and Conditions</a>
						</Checkbox>
					</Form.Item>

					<Form.Item wrapperCol={{ span: 24 }}>
						<Button block type="primary" htmlType="submit" >
							Submit
						</Button>
					</Form.Item>
				</Form>
			</div>
		</div>
	);
}

export default App;