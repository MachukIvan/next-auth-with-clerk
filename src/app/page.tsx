import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { currentUser } from '@clerk/nextjs/server';
import { Button } from './ui/button';

export default async function Home() {
    return (
        <main className='flex flex-col min-h-screen  p-4'>
            <header className='flex justify-end items-center gap-4 h-8 w-full'>
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </header>
            <div className='flex flex-1 h-full w-full items-center justify-center'>
                <SignedOut>
                    <SignInButton>
                        <Button>Sign In</Button>
                    </SignInButton>
                </SignedOut>
            </div>
        </main>
    );
}
