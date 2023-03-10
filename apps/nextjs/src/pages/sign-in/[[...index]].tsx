import { SignIn } from '@clerk/nextjs';

const SignInPage = () => (
  <SignIn
    path="/sign-in"
    routing="path"
    signUpUrl="/sign-in"
    redirectUrl="/api/login"
  />
);

export default SignInPage;
