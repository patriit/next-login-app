# LoginApp
This login and registration application is built with Next.js, TypeScript, and Tailwind CSS. It includes live form validation and password strength feedback.  
The project is a learning exercise to practice frontend development patterns in Next.js while laying the groundwork for future backend integration and security improvements.

## Features
- Home page with navigation to login  
- Login form with username and password fields  
- Registration form with:  
  - Username and email inputs  
  - Live password validation (length, uppercase, lowercase, number, special character)  
  - Password confirmation with instant feedback  
- Registration success page with link to login  
- Dashboard page
- Consistent design with Tailwind CSS and gradient backgrounds  

## Tech Stack
- Next.js  
- TypeScript  
- Tailwind CSS

## Planned improvements
- Add actual authentication (user accounts stored and checked)  
- Implement backend integration for registration and login  
- Enable session management  
- Build logout functionality  
- Show error messages for invalid credentials  
- Make components more modular and reusable  
- Add accessibility improvements

## Setup  
1. Clone the repository:  
```
git clone https://github.com/patriit/next-login-app.git
```
```
cd next-login-app
```

2. Install dependencies:  
```
pnpm install  
```  

3. Run the development server:  
```
pnpm dev  
```  

4. Open http://localhost:3000 in the browser.