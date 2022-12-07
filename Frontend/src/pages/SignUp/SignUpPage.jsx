import React from "react";

import SignUpStyle from "./SignUpPage.module.css";
import google from "./assets/icons/google.svg";
import dashes from "./assets/icons/dashes.png";
import eye from "./assets/icons/eye.svg";
import closedEye from "./assets/icons/close-eye.svg";
import { Link } from "react-router-dom";

const SignUpPage = () => {
	const [showPassword, setShowPassword] = React.useState(false);
	const togglePwd = () => {
		setShowPassword((prevState) => !prevState);
	};

	const [values, setValues] = React.useState({
		fullName: "",
		email: "",
		password: "",
		confirmPwd: "",
	});

	const onChange = (e) => {
		setValues({ ...values, [e.target.name]: e.target.value });
	};

	console.log(values);

	const errorMsg = [
		{
			fullName: "Full Name should be 3-16 characters and shouldn't include any special character!",
		},
		{
			email: "Email should be a valid email",
		},
		{
			password: "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
		},
		{ confirmPwd: "Passwords don't match" },
	];

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<div className={SignUpStyle.sign_up_wrapper}>
			<div className={SignUpStyle.signUp_container}>
				<div className={`${SignUpStyle.flex_col} ${SignUpStyle.r_side}`}>
					<div className={`${SignUpStyle.flex_col} ${SignUpStyle.r_side_textContent}`}>
						<h1 className={SignUpStyle.r_side_title}>TEMIBMC</h1>
						<p className={SignUpStyle.r_side_subtitle}>
							Your business tool used to visualize all the building blocks when you want to start a business, including
							customers, route to market, value proposition and finance.
						</p>
					</div>
				</div>
				<div className={SignUpStyle.l_side}>
					<div className={`${SignUpStyle.flex_col} ${SignUpStyle.l_side_container}`}>
						<div className={SignUpStyle.l_side_header}>
							<h2 className={SignUpStyle.l_side_heading}>Create an account</h2>
							<Link to="" className={`${SignUpStyle.flex} ${SignUpStyle.l_side_button}`}>
								<img src={google} alt="" /> <span>Sign up with google</span>
							</Link>
						</div>
						<div className={`${SignUpStyle.flex} ${SignUpStyle.middleOption}`}>
							<img src={dashes} alt="left dashes" />
							<p>Or</p>
							<img src={dashes} alt="" />
						</div>
						<form onSubmit={handleSubmit} className={`${SignUpStyle.flex_col} ${SignUpStyle.form}`}>
							<div className={`${SignUpStyle.flex_col} ${SignUpStyle.formGroup}`}>
								<label htmlFor="fullName">Enter Full Name</label>
								<input
									type="text"
									name="fullName"
									id="fullName"
									onChange={onChange}
									pattern="^[A-Za-z0-9]{3,16}$"
									required
								/>
								<span className={SignUpStyle.formGroup_errormsg}>{errorMsg[0].fullName}</span>
							</div>
							<div className={`${SignUpStyle.flex_col} ${SignUpStyle.formGroup}`}>
								<label htmlFor="email">Enter email address</label>
								<input type="email" name="email" id="email" onChange={onChange} required />
								<span className={SignUpStyle.formGroup_errormsg}>{errorMsg[1].email}</span>
							</div>
							<div className={`${SignUpStyle.flex_col} ${SignUpStyle.formGroup}`}>
								<label htmlFor="password">Enter Password</label>
								<div className={`${SignUpStyle.password}`}>
									<input
										type={!showPassword ? "password" : "text"}
										name="password"
										id="password"
										onChange={onChange}
										pattern="^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,19}$"
										required
									/>
									<img onClick={togglePwd} src={showPassword ? eye : closedEye} alt="password reveal" />
								</div>
								<span className={SignUpStyle.formGroup_errormsg}>{errorMsg[2].password}</span>
							</div>
							<div className={`${SignUpStyle.flex_col} ${SignUpStyle.formGroup}`}>
								<label htmlFor="confirmPwd">Confirm your password</label>
								<input
									type="password"
									name="confirmPwd"
									id="confirmPwd"
									onChange={onChange}
									pattern={values.password}
									required
								/>
								<span className={SignUpStyle.formGroup_errormsg}>{ errorMsg[3].confirmPwd}</span>
							</div>
							<div className={`${SignUpStyle.flex_col} ${SignUpStyle.formSubmit}`}>
								<button type="submit">Create an account</button>
							</div>
						</form>
						<div className={SignUpStyle.signInRedir}>
							Already have an account?
							<Link to="">
								<span className={SignUpStyle.signIn}> Sign in</span>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignUpPage;
