import { SignIn } from '@clerk/nextjs';

const SignInPage = () => (
  <SignIn
    path="/sign-in"
    routing="path"
    signUpUrl="/sign-in"
    redirectUrl="/home"
  />
);

export default SignInPage;
